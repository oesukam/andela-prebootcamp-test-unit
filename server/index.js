import express from 'express';

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
const PORT = 3000;

server.get('/api/v1/users', (req, res) => {
  res.json({ msg: 'list of users' });
});

server.get('/', (req, res) => {
  res.send('Wrong route');
});

server.listen(PORT, () => {
  console.log(`Server listenning on port: ${PORT}`);
});
