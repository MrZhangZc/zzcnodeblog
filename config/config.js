var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'blogzzc'
    },
    port: process.env.PORT || 5555,
    db: 'mongodb://localhost/blogzzc-test'
  },

  test: {
    root: rootPath,
    app: {
      name: 'blogzzc'
    },
    port: process.env.PORT || 5555,
    db: 'mongodb://localhost/blogzzc-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'blogzzc'
    },
    port: process.env.PORT || 5555,
    db: 'mongodb://localhost/blogzzc-production'
  }
};

module.exports = config[env];
