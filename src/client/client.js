import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
// import {hydrate} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from '../helpers/creatStore';
import App from './App';

// Read the state sent with markup
const state = window.__STATE__;

// delete the state from global window object
delete window.__STATE__;

// reproduce the store used to render the page on server
const store = configureStore(state)

/**
 * hydrate the page to make sure both server and client
 * side pages are identical. This includes markup checking,
 * react comments to identify elements and more.
 */


ReactDOM.hydrate(
<Provider store={store}>
<BrowserRouter>
<App initialText="SSR React App" />
</BrowserRouter>
</Provider>,
 document.querySelector('#root'));