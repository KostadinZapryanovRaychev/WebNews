function getErrorView() {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Error</title>
        <style>
          /* Add some basic styling */
          body {
            font-family: sans-serif;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            text-align: center;
          }
          h1 {
            color: red;
          }
          p {
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>404 Not Found</h1>
          <p>Sorry, the page you were looking for could not be found.</p>
        </div>
      </body>
      </html>
    `;
  }
  

  module.exports = { getErrorView };