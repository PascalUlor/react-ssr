import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import App from './components/App';

ReactDOM.hydrate(
<BrowserRouter>
<App initialText="SSR React App" />
</BrowserRouter>,
document.getElementById('root'));