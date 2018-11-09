import sqlite3
import os.path
import urllib.parse
import keyring
import sys
from Crypto.Cipher import AES
from Crypto.Protocol.KDF import PBKDF2
import secretstorage

def getChromeSecret():
    """Get Chrome Secret
    This function returns secret from Gnome Keyring
    used to encrypt/decrypt cookies stored in Google-Chrome
    """
    bus = secretstorage.dbus_init()
    collection = secretstorage.get_default_collection(bus)
    MY_PASS = ""
    for item in collection.get_all_items():
        if item.get_label() == 'Chrome Safe Storage':
            MY_PASS = item.get_secret()
            break
    else:
        raise Exception('Chrome password not found!')
    return MY_PASS

def chrome_cookies(url):

    salt = b'saltysalt'
    iv = b' ' * 16
    length = 16

    def chrome_decrypt(encrypted_value, key=None):

        # Encrypted cookies should be prefixed with 'v10' according to the
        # Chromium code. Strip it off.
        encrypted_value = encrypted_value[3:]

        # Strip padding by taking off number indicated by padding
        # eg if last is '\x0e' then ord('\x0e') == 14, so take off 14.
        # You'll need to change this function to use ord() for python2.
        def clean(x):
            return x[:-x[-1]].decode('utf8')

        cipher = AES.new(key, AES.MODE_CBC, IV=iv)
        decrypted = cipher.decrypt(encrypted_value)

        return clean(decrypted)

    # If running Chrome on OSX
    if sys.platform == 'darwin':
        my_pass = keyring.get_password('Chrome Safe Storage', 'Chrome')
        my_pass = my_pass.encode('utf8')
        iterations = 1003
        cookie_file = os.path.expanduser(
            '~/Library/Application Support/Google/Chrome/Default/Cookies'
        )

    # If running Chromium on Linux
    elif sys.platform == 'linux':
        my_pass = getChromeSecret()
        iterations = 1
        cookie_file = os.path.expanduser(
            '~/.config/google-chrome/Default/Cookies'
        )
    else:
        raise Exception("This script only works on OSX or Linux.")

    # Generate key from values above
    key = PBKDF2(my_pass, salt, length, iterations)

    conn = sqlite3.connect(cookie_file)
    sql = 'select name, value, encrypted_value from cookies '\
            'where host_key like "%{}%"'.format(url)

    cookies = {}
    cookies_list = []

    with conn:
        for k, v, ev in conn.execute(sql):

            # if there is a not encrypted value or if the encrypted value
            # doesn't start with the 'v10' prefix, return v
            if v or (ev[:3] != b'v11' and ev[:3] != b'v10'):
                cookies_list.append((k, v))
            else:
                decrypted_tuple = (k, chrome_decrypt(ev, key=key))
                cookies_list.append(decrypted_tuple)
        cookies.update(cookies_list)

    return cookies

if(len(sys.argv) != 2):
    raise Exception("No URL specified");
else:
    print(chrome_cookies(sys.argv[1]))
    