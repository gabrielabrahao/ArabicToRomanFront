const proxy = [
  {
    context: '/api',
    target: 'http://localhost:8080/',
    pathRewrite: {'^/api' : '/converter'}
  }
];
module.exports = proxy;

