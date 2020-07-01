import express from 'express';
import path from 'path'
import React from 'react';
import {renderToString} from 'react-dom/server';
import { Helmet } from 'react-helmet';

import { Provider } from 'react-redux'
import configureStore from './helpers/creatStore';
import App from './client/App';
import data from '../assets/data.json'
import template from './template'

const render=(initialState) =>{
    // Configure the store with the initial state provided
    const store = configureStore(initialState)
  
    // render the App store static markup ins content variable
    let content = renderToString(
      <Provider store={store} >
         <App />
      </Provider>
    );
  
    // Get a copy of store data to create the same store on client side 
    const preloadedState = store.getState()

    // helmet to parse metadatas
    const helmet = Helmet.renderStatic()
  
    return {content, preloadedState, helmet};
  }
  


const app = express();

app.use(express.json())
app.use(express.static('build/public'));
const PORT = process.env.PORT || 3000;

// Serving static files
app.use('../assets', express.static(path.resolve(__dirname, 'assets')));
app.use('../media', express.static(path.resolve(__dirname, 'media')));

// hide powered by express
app.disable('x-powered-by');

// start server
app.listen(PORT, () => {
    console.log(`App running on ${PORT}`)
})


let initialState = {
    isFetching: false,
    apps: data
  }

  // server rendered home page
app.get('/', (req, res) => {
const { preloadedState, content, helmet} = render(initialState);
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
  
