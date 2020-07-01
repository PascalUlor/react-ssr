import express from 'express';
import path from 'path'
import data from '../assets/data.json'
import template from './helpers/template';
import Renderer from './helpers/renderer';


const app = express();

app.use(express.json())
app.use(express.static('build/public'));
const PORT = process.env.PORT || 3000;

// Serving static files
app.use('../assets', express.static(path.resolve(__dirname, 'assets')));
app.use('../media', express.static(path.resolve(__dirname, 'media')));

// hide powered by express
app.disable('x-powered-by');


let initialState = {
    isFetching: false,
    apps: data
  }
  let context = {}

  // server rendered home page
app.get('/', (req, res) => {
const { preloadedState, content, helmet} = Renderer(req, initialState, context);
const response = template("Server Rendered Page", preloadedState, content, helmet)
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response);
});

// Pure client side rendered page
app.get('/client', (req, res) => {
    let response = template('Client Side Rendered page')
    res.setHeader('Cache-Control', 'assets, max-age=604800')
    res.send(response)
  });
  
  // start server
app.listen(PORT, () => {
  console.log(`App running on ${PORT}`)
})


