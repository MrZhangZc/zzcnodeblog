var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'production';

var config = {
  production: {
    root: rootPath, 
    app: {
      name: 'blogzzc'
    },
    port: process.env.PORT || 6636,
    db: 'mongodb://localhost/blogzzc-test'
    //db: 'mongodb://csxh_runner:chengshixinghui666@127.0.0.1:27017/blogzzc'
  }
};

module.exports = config[env];
