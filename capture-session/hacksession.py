from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import sys
import subprocess

URL = "http://ikot.edu.pl"
wifi = sys.argv[1]
dur = sys.argv[2]

print(sys.argv)
cmd = "tshark -i {} -Y http.request -T fields -e http.cookie -a duration:{}".format(wifi, dur).split(" ")
result = subprocess.run(cmd, stdout=subprocess.PIPE)
output = result.stdout.decode("utf-8").split()

phpsessids = [pair[10:-1] for pair in output if pair.startswith("PHPSESSID")]
print(phpsessids)

sessionID = phpsessids[-1]

driver = webdriver.Chrome()
driver.get(URL)
driver.add_cookie({
    'name': 'PHPSESSID',
    'path': '/',
    'value': sessionID
})
driver.refresh()


input("end?")
driver.close()