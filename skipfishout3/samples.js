var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://localhost:3000/user/transfer/', 'dir': '_m0/0', 'linked': 2, 'len': 1699 },
    { 'url': 'http://localhost:3000/register/', 'dir': '_m0/1', 'linked': 5, 'len': 2588 },
    { 'url': 'http://localhost:3000/user/', 'dir': '_m0/2', 'linked': 5, 'len': 1553 },
    { 'url': 'http://localhost:3000/user/transfer/list/', 'dir': '_m0/3', 'linked': 2, 'len': 1009 },
    { 'url': 'http://localhost:3000/user/transfer/confirm', 'dir': '_m0/4', 'linked': 5, 'len': 1875 },
    { 'url': 'http://localhost:3000/images', 'dir': '_m0/5', 'linked': 2, 'len': 179 } ]
  },
  { 'mime': 'text/css', 'samples': [
    { 'url': 'http://localhost:3000/stylesheets/style.css', 'dir': '_m1/0', 'linked': 2, 'len': 281 } ]
  },
  { 'mime': 'text/plain', 'samples': [
    { 'url': 'http://localhost:3000/', 'dir': '_m2/0', 'linked': 2, 'len': 28 } ]
  }
];

var issue_samples = [
  { 'severity': 3, 'type': 40201, 'samples': [
    { 'url': 'http://localhost:3000/register/', 'extra': 'https://code.getmdl.io/1.3.0/material.orange-amber.min.css', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'http://localhost:3000/register/', 'extra': 'https://code.getmdl.io/1.3.0/material.min.js', 'sid': '0', 'dir': '_i0/1' },
    { 'url': 'http://localhost:3000/user/', 'extra': 'https://code.getmdl.io/1.3.0/material.orange-amber.min.css', 'sid': '0', 'dir': '_i0/2' },
    { 'url': 'http://localhost:3000/user/', 'extra': 'https://code.getmdl.io/1.3.0/material.min.js', 'sid': '0', 'dir': '_i0/3' },
    { 'url': 'http://localhost:3000/user/transfer/', 'extra': 'https://code.getmdl.io/1.3.0/material.orange-amber.min.css', 'sid': '0', 'dir': '_i0/4' },
    { 'url': 'http://localhost:3000/user/transfer/', 'extra': 'https://code.getmdl.io/1.3.0/material.min.js', 'sid': '0', 'dir': '_i0/5' },
    { 'url': 'http://localhost:3000/user/transfer/list/', 'extra': 'https://code.getmdl.io/1.3.0/material.orange-amber.min.css', 'sid': '0', 'dir': '_i0/6' },
    { 'url': 'http://localhost:3000/user/transfer/list/', 'extra': 'https://code.getmdl.io/1.3.0/material.min.js', 'sid': '0', 'dir': '_i0/7' },
    { 'url': 'http://localhost:3000/user/transfer/confirm', 'extra': 'https://code.getmdl.io/1.3.0/material.orange-amber.min.css', 'sid': '0', 'dir': '_i0/8' },
    { 'url': 'http://localhost:3000/user/transfer/confirm', 'extra': 'https://code.getmdl.io/1.3.0/material.min.js', 'sid': '0', 'dir': '_i0/9' },
    { 'url': 'http://localhost:3000/user/transfer/confirm', 'extra': 'https://code.getmdl.io/1.3.0/material.orange-amber.min.css', 'sid': '0', 'dir': '_i0/10' },
    { 'url': 'http://localhost:3000/user/transfer/confirm', 'extra': 'https://code.getmdl.io/1.3.0/material.min.js', 'sid': '0', 'dir': '_i0/11' },
    { 'url': 'http://localhost:3000/user/transfer/confirm', 'extra': 'https://code.getmdl.io/1.3.0/material.orange-amber.min.css', 'sid': '0', 'dir': '_i0/12' },
    { 'url': 'http://localhost:3000/user/transfer/confirm', 'extra': 'https://code.getmdl.io/1.3.0/material.min.js', 'sid': '0', 'dir': '_i0/13' } ]
  },
  { 'severity': 2, 'type': 30701, 'samples': [
    { 'url': 'http://localhost:3000/stylesheets/style.css', 'extra': 'conflicting \x27Cache-Control\x27 data', 'sid': '0', 'dir': '_i1/0' } ]
  },
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://localhost:3000/user/transfer/confirm', 'extra': '', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://localhost:3000/user/transfer/execute', 'extra': '', 'sid': '0', 'dir': '_i2/1' },
    { 'url': 'http://localhost:3000/user/transfer/execute', 'extra': '', 'sid': '0', 'dir': '_i2/2' },
    { 'url': 'http://localhost:3000/user/transfer/execute', 'extra': '', 'sid': '0', 'dir': '_i2/3' } ]
  },
  { 'severity': 1, 'type': 20101, 'samples': [
    { 'url': 'http://localhost:3000/register', 'extra': 'during parameter brute-force tests', 'sid': '0', 'dir': '_i3/0' } ]
  },
  { 'severity': 0, 'type': 10802, 'samples': [
    { 'url': 'http://localhost:3000/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'http://localhost:3000/login/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/1' },
    { 'url': 'http://localhost:3000/register', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/2' },
    { 'url': 'http://localhost:3000/register', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/3' },
    { 'url': 'http://localhost:3000/register', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/4' },
    { 'url': 'http://localhost:3000/user/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/5' },
    { 'url': 'http://localhost:3000/user/transfer/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/6' },
    { 'url': 'http://localhost:3000/user/transfer/list/', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/7' },
    { 'url': 'http://localhost:3000/user/transfer/confirm', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/8' },
    { 'url': 'http://localhost:3000/user/transfer/confirm', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/9' },
    { 'url': 'http://localhost:3000/user/transfer/confirm', 'extra': 'text/plain', 'sid': '0', 'dir': '_i4/10' } ]
  },
  { 'severity': 0, 'type': 10602, 'samples': [
    { 'url': 'http://localhost:3000/register', 'extra': '', 'sid': '0', 'dir': '_i5/0' } ]
  },
  { 'severity': 0, 'type': 10601, 'samples': [
    { 'url': 'http://localhost:3000/user/transfer/execute', 'extra': '', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://localhost:3000/user/transfer/execute', 'extra': '', 'sid': '0', 'dir': '_i6/1' } ]
  },
  { 'severity': 0, 'type': 10505, 'samples': [
    { 'url': 'http://localhost:3000/user/transfer/', 'extra': 'iban', 'sid': '0', 'dir': '_i7/0' },
    { 'url': 'http://localhost:3000/user/transfer/', 'extra': 'money', 'sid': '0', 'dir': '_i7/1' } ]
  },
  { 'severity': 0, 'type': 10403, 'samples': [
    { 'url': 'http://localhost:3000/user/transfer/confirm', 'extra': '', 'sid': '0', 'dir': '_i8/0' },
    { 'url': 'http://localhost:3000/user/transfer/confirm', 'extra': '', 'sid': '0', 'dir': '_i8/1' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://localhost:3000/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i9/0' } ]
  },
  { 'severity': 0, 'type': 10204, 'samples': [
    { 'url': 'http://localhost:3000/', 'extra': 'X-Powered-By', 'sid': '0', 'dir': '_i10/0' } ]
  }
];

