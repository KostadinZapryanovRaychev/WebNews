function  mainHtmlSkeleton(content){
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    header {
      background-color: #333;
      color: #fff;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      box-sizing: border-box;
    }
    header h1 {
      margin: 0;
      font-size: 18px;
      font-weight: normal;
    }
    header ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
    }
    header li {
      margin-left: 20px;
    }
    header a {
      color: #fff;
      text-decoration: none;
    }
    header a:hover {
      color: #ccc;
    }
      /* Add styles for the sidebar */
      nav {
        width: 200px;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #333;
        color: #fff;
        padding: 20px;
        box-sizing: border-box;
      }
      nav ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      nav li {
        margin-bottom: 10px;
      }
      nav a {
        color: #fff;
        text-decoration: none;
      }
      nav a:hover {
        color: #ccc;
      }
    </style>
  </head>
  <body>
    <!-- Add the main content -->
    <header>
    <h1>Kichuka News</h1>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </header>
    <main>
      ${content}
    </main>
  </body>
  </html>
  `;
}


function createRegistrationView() {
  return `
        <style>
        form {
          width: 400px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        label {
          display: block;
          margin-bottom: 10px;
        }
        input[type="text"], input[type="password"] {
          width: 100%;
          padding: 12px 20px;
          margin-bottom: 20px;
          box-sizing: border-box;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        button[type="submit"] {
          width: 100%;
          background-color: #4CAF50;
          color: white;
          padding: 14px 20px;
          margin-bottom: 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        form {
            background-color: #FFC0CB;
          }
      </style>
          <form action="/register" method="POST">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name"><br>
            <label for="email">Email:</label><br>
            <input type="text" id="email" name="email"><br>
            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password"><br>
            <button type="submit">Register</button>
          </form>
        `;
}

function createLoginView() {
  return `
          <style>
          form {
            width: 400px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          label {
            display: block;
            margin-bottom: 10px;
          }
          input[type="text"], input[type="password"] {
            width: 100%;
            padding: 12px 20px;
            margin-bottom: 20px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          button[type="submit"] {
            width: 100%;
            background-color: #4CAF50;
            color: white;
            padding: 14px 20px;
            margin-bottom: 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
          form {
              background-color: #FFC0CB;
            }
          img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            transition: all 0.2s ease-in-out;
            display: block;
            margin: 0 auto;
          }
          img:hover {
            transform: scale(1.1);
          }
        </style>
           <img src="https://scontent.fsof9-1.fna.fbcdn.net/v/t1.18169-9/10473369_1563038257250657_1637029864453755271_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=be7NkAVsg6UAX-MSGcY&_nc_ht=scontent.fsof9-1.fna&oh=00_AfBTWiXcjNIfzNxbaRjBoVRp63_V7Gzk-xO-YBWT9qUjGQ&oe=63CD284D" alt="Avatar">
            <form action="/login" method="POST">
              <label for="email">Email:</label><br>
              <input type="text" id="email" name="email"><br>
              <label for="password">Password:</label><br>
              <input type="password" id="password" name="password"><br>
              <button type="submit">Log In</button>
            </form>
          `;
}

module.exports = {  createRegistrationView, createLoginView , mainHtmlSkeleton};
