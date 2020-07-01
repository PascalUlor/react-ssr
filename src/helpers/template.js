// html skeleton provider
export default function template(title, initialState = {}, content = "", helmet) {
    let scripts = ''; // Dynamically ship scripts based on render type
    if (content) {
      scripts = ` <script>
                     window.__STATE__ = ${JSON.stringify(initialState)}
                  </script>
                  <script src="assets/client.js"></script>
                  `
    } else {
      scripts = ` <script src="assets/bundle.js"> </script> `
    }
    let page = `<!DOCTYPE html>
                <html lang="en">
                <head>
                  <meta charset="utf-8">
                  <meta name="keywords" content= ${title} "HTML, CSS, JavaScript">
                  ${helmet.meta.toString()}
                  ${helmet.title.toString()}
                  <title> ${title} </title>
                  <link href="assets/style.css" rel="stylesheet">
                </head>
                <body>
                  <div class="content">
                     <div id="root" class="wrap-inner">
                        ${content}
                     </div>
                  </div>
  
                    ${scripts}
                </body>
                `;
  
    return page;
  }
  