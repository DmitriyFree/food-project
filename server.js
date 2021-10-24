const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./server.json');
const middlewares = jsonServer.defaults({
  static: './'
});
const PORT = process.env.PORT || 'https://foodmyproject.herokuapp.com/app';
server.use(middlewares);
server.use(jsonServer.rewriter({
  '/api/*': '/$1',
}))
server.use(router);
server.listen(PORT, () => {
  console.log('Server is running');
});