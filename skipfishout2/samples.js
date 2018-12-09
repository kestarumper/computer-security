var mime_samples = [
  { 'mime': 'application/javascript', 'samples': [
    { 'url': 'http://localhost:3000/register', 'dir': '_m0/0', 'linked': 5, 'len': 246 } ]
  },
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://localhost:3000/user/transfer/', 'dir': '_m1/0', 'linked': 2, 'len': 1735 },
    { 'url': 'http://localhost:3000/login/', 'dir': '_m1/1', 'linked': 5, 'len': 1780 },
    { 'url': 'http://localhost:3000/login/passrecover/', 'dir': '_m1/2', 'linked': 5, 'len': 1384 },
    { 'url': 'http://localhost:3000/register/', 'dir': '_m1/3', 'linked': 5, 'len': 2588 },
    { 'url': 'http://localhost:3000/user/', 'dir': '_m1/4', 'linked': 5, 'len': 1553 },
    { 'url': 'http://localhost:3000/images', 'dir': '_m1/5', 'linked': 2, 'len': 179 } ]
  },
  { 'mime': 'text/css', 'samples': [
    { 'url': 'http://localhost:3000/stylesheets/style.css', 'dir': '_m2/0', 'linked': 2, 'len': 281 } ]
  },
  { 'mime': 'text/plain', 'samples': [
    { 'url': 'http://localhost:3000/', 'dir': '_m3/0', 'linked': 2, 'len': 28 } ]
  }
];

var issue_samples = [
  { 'severity': 3, 'type': 40201, 'samples': [
    { 'url': 'http://localhost:3000/login/', 'extra': 'https://code.getmdl.io/1.3.0/material.orange-amber.min.css', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'http://localhost:3000/login/', 'extra': 'https://code.getmdl.io/1.3.0/material.min.js', 'sid': '0', 'dir': '_i0/1' },
    { 'url': 'http://localhost:3000/login/passrecover/', 'extra': 'https://code.getmdl.io/1.3.0/material.orange-amber.min.css', 'sid': '0', 'dir': '_i0/2' },
    { 'url': 'http://localhost:3000/login/passrecover/', 'extra': 'https://code.getmdl.io/1.3.0/material.min.js', 'sid': '0', 'dir': '_i0/3' },
    { 'url': 'http://localhost:3000/login/', 'extra': 'https://code.getmdl.io/1.3.0/material.orange-amber.min.css', 'sid': '0', 'dir': '_i0/4' },
    { 'url': 'http://localhost:3000/login/', 'extra': 'https://code.getmdl.io/1.3.0/material.min.js', 'sid': '0', 'dir': '_i0/5' },
    { 'url': 'http://localhost:3000/register/', 'extra': 'https://code.getmdl.io/1.3.0/material.orange-amber.min.css', 'sid': '0', 'dir': '_i0/6' },
    { 'url': 'http://localhost:3000/register/', 'extra': 'https://code.getmdl.io/1.3.0/material.min.js', 'sid': '0', 'dir': '_i0/7' },
    { 'url': 'http://localhost:3000/user/', 'extra': 'https://code.getmdl.io/1.3.0/material.orange-amber.min.css', 'sid': '0', 'dir': '_i0/8' },
    { 'url': 'http://localhost:3000/user/', 'extra': 'https://code.getmdl.io/1.3.0/material.min.js', 'sid': '0', 'dir': '_i0/9' },
    { 'url': 'http://localhost:3000/user/transfer/', 'extra': 'https://code.getmdl.io/1.3.0/material.orange-amber.min.css', 'sid': '0', 'dir': '_i0/10' },
    { 'url': 'http://localhost:3000/user/transfer/', 'extra': 'https://code.getmdl.io/1.3.0/material.min.js', 'sid': '0', 'dir': '_i0/11' } ]
  },
  { 'severity': 3, 'type': 40101, 'samples': [
    { 'url': 'http://localhost:3000/register', 'extra': 'injected \x27\x3csfi...\x3e\x27 tag seen in HTML', 'sid': '0', 'dir': '_i1/0' } ]
  },
  { 'severity': 2, 'type': 30701, 'samples': [
    { 'url': 'http://localhost:3000/stylesheets/style.css', 'extra': 'conflicting \x27Cache-Control\x27 data', 'sid': '0', 'dir': '_i2/0' } ]
  },
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://localhost:3000/user/transfer/confirm', 'extra': '', 'sid': '0', 'dir': '_i3/0' } ]
  },
  { 'severity': 1, 'type': 20301, 'samples': [
    { 'url': 'http://localhost:3000/user/transfer', 'extra': '', 'sid': '0', 'dir': '_i4/0' } ]
  },
  { 'severity': 1, 'type': 20205, 'samples': [
    { 'url': 'http://localhost:3000/login/', 'extra': '', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://localhost:3000/user/transfer/', 'extra': '', 'sid': '0', 'dir': '_i5/1' } ]
  },
  { 'severity': 1, 'type': 20102, 'samples': [
    { 'url': 'http://localhost:3000/user/signon.sfish', 'extra': 'Child node limit exceeded', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://localhost:3000/user/transfer/is', 'extra': 'Child node limit exceeded', 'sid': '0', 'dir': '_i6/1' } ]
  },
  { 'severity': 0, 'type': 10901, 'samples': [
    { 'url': 'http://localhost:3000/user/transfer/0', 'extra': '', 'sid': '0', 'dir': '_i7/0' },
    { 'url': 'http://localhost:3000/user/3', 'extra': '', 'sid': '0', 'dir': '_i7/1' } ]
  },
  { 'severity': 0, 'type': 10802, 'samples': [
    { 'url': 'http://localhost:3000/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i8/0' },
    { 'url': 'http://localhost:3000/login/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i8/1' },
    { 'url': 'http://localhost:3000/login', 'extra': 'text/plain', 'sid': '0', 'dir': '_i8/2' },
    { 'url': 'http://localhost:3000/user/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i8/3' },
    { 'url': 'http://localhost:3000/user/transfer/sfi9876.xsl', 'extra': 'text/plain', 'sid': '0', 'dir': '_i8/4' },
    { 'url': 'http://localhost:3000/user/transfer/confirm', 'extra': 'text/plain', 'sid': '0', 'dir': '_i8/5' },
    { 'url': 'http://localhost:3000/user/transfer/confirm', 'extra': 'text/plain', 'sid': '0', 'dir': '_i8/6' },
    { 'url': 'http://localhost:3000/user/transfer/confirm', 'extra': 'text/plain', 'sid': '0', 'dir': '_i8/7' },
    { 'url': 'http://localhost:3000/user/.cvsignore', 'extra': 'text/plain', 'sid': '0', 'dir': '_i8/8' },
    { 'url': 'http://localhost:3000/user/3', 'extra': 'text/plain', 'sid': '0', 'dir': '_i8/9' },
    { 'url': 'http://localhost:3000/user', 'extra': 'text/plain', 'sid': '0', 'dir': '_i8/10' },
    { 'url': 'http://localhost:3000/user/transfer', 'extra': 'text/plain', 'sid': '0', 'dir': '_i8/11' } ]
  },
  { 'severity': 0, 'type': 10602, 'samples': [
    { 'url': 'http://localhost:3000/login', 'extra': '', 'sid': '0', 'dir': '_i9/0' },
    { 'url': 'http://localhost:3000/login', 'extra': '', 'sid': '0', 'dir': '_i9/1' },
    { 'url': 'http://localhost:3000/register', 'extra': '', 'sid': '0', 'dir': '_i9/2' } ]
  },
  { 'severity': 0, 'type': 10601, 'samples': [
    { 'url': 'http://localhost:3000/login/passrecover', 'extra': '', 'sid': '0', 'dir': '_i10/0' } ]
  },
  { 'severity': 0, 'type': 10505, 'samples': [
    { 'url': 'http://localhost:3000/user/transfer/', 'extra': 'iban', 'sid': '0', 'dir': '_i11/0' },
    { 'url': 'http://localhost:3000/user/transfer/', 'extra': 'money', 'sid': '0', 'dir': '_i11/1' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://localhost:3000/user/transfer/.htpasswd', 'extra': '', 'sid': '0', 'dir': '_i12/0' },
    { 'url': 'http://localhost:3000/user/transfer/.cvsignore', 'extra': '', 'sid': '0', 'dir': '_i12/1' },
    { 'url': 'http://localhost:3000/user/transfer/0', 'extra': '', 'sid': '0', 'dir': '_i12/2' },
    { 'url': 'http://localhost:3000/user/.cvsignore', 'extra': '', 'sid': '0', 'dir': '_i12/3' },
    { 'url': 'http://localhost:3000/user/3', 'extra': '', 'sid': '0', 'dir': '_i12/4' } ]
  },
  { 'severity': 0, 'type': 10401, 'samples': [
    { 'url': 'http://localhost:3000/register', 'extra': '', 'sid': '0', 'dir': '_i13/0' },
    { 'url': 'http://localhost:3000/register', 'extra': '', 'sid': '0', 'dir': '_i13/1' },
    { 'url': 'http://localhost:3000/register', 'extra': '', 'sid': '0', 'dir': '_i13/2' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://localhost:3000/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i14/0' },
    { 'url': 'http://localhost:3000/user/transfer/sfi9876.xsl', 'extra': '', 'sid': '0', 'dir': '_i14/1' } ]
  },
  { 'severity': 0, 'type': 10204, 'samples': [
    { 'url': 'http://localhost:3000/', 'extra': 'X-DNS-Prefetch-Control', 'sid': '0', 'dir': '_i15/0' },
    { 'url': 'http://localhost:3000/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i15/1' },
    { 'url': 'http://localhost:3000/', 'extra': 'X-Download-Options', 'sid': '0', 'dir': '_i15/2' },
    { 'url': 'http://localhost:3000/', 'extra': 'X-Content-Type-Options', 'sid': '0', 'dir': '_i15/3' },
    { 'url': 'http://localhost:3000/', 'extra': 'X-XSS-Protection', 'sid': '0', 'dir': '_i15/4' } ]
  }
];

