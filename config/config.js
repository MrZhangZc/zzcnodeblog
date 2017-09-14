var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'production',
    mongoose.Promise = global.Promise;

var config = {
  production: {
    root: rootPath, 
    app: {
      name: 'blogzzc'
    },
    port: process.env.PORT || 5555,
    db: 'mongodb://blog_runner:kobe241298@127.0.0.1:27017/blogzzc-production'
  }
};

module.exports = config[env];
