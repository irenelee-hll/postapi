const config = {
  port: process.env.PORT || 8080,
  db: 'mongodb://localhost/myblog',
  test_port: 4242,
  test_db: 'mongodb://127.0.0.1:27017/myblog_test'
}
module.exports = config;