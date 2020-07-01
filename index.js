// import express from 'express';
// import React from 'react';
// import {renderToString} from 'react-dom/server';
// import { StaticRouter } from 'react-router';
// import { Helmet } from 'react-helmet';

// import { Provider } from 'react-redux'
// import configureStore from './helpers/creatStore';
// import App from './client/App';


// const app = express();

// app.use(express.json())
// app.use(express.static('build/public'));
// const PORT = process.env.PORT || 3000;



// app.get('*', (req, res) => {
//     const context = {}

//     const content = renderToString(
//         <StaticRouter location={req.url} context={context}>
//         <App />
//         </StaticRouter>
//     );

//     const helmet = Helmet.renderStatic();

//     const html = `
// <html>
// <head>
// ${helmet.meta.toString()}
// ${helmet.title.toString()}
// </head>
// <body>
//     <div id="root">
//         ${content}
//     </div>
//     <script src="client_bundle.js"></script>
// </body>
// </html>
// `
//     res.send(html);
// });



// app.listen(PORT, () => {
//     console.log(`App running on ${PORT}`)
// })