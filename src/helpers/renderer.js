import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Helmet } from 'react-helmet';

import { Provider } from 'react-redux';
import App from '../client/App';
import configureStore from './creatStore';


export default (req, initialState, context) => {

    // Configure the store with the initial state provided
    const store = configureStore(initialState)

    const content = renderToString(
        <Provider store={store} >
           <StaticRouter location={req.url} context={context}>
        <App />
        </StaticRouter>
      </Provider>
    );

    // Get a copy of store data to create the same store on client side 
    const preloadedState = store.getState()

    // helmet to parse metadatas
    const helmet = Helmet.renderStatic()


    return {content, preloadedState, helmet};
}