exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://sloan:test123@ds153412.mlab.com:53412/mongo-blog';
exports.PORT = process.env.PORT || 8080;
