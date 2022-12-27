function mainHtmlSkeleton(content, style, logged, advirtises) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kichuka Web News</title>
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
    <style>
     ${style}
    </style>
  </head>
  <body>
    <header>
    <div class="header-category">
     <h2><a href="/kichuka">Kichuka News</a></h2>
     <h2><a href="/world">World News</a></h2>
    </div>
    <ul>
      ${!logged ? `<li><a href="/login">Login</a></li>` : ""}
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </header>
  <aside class="aside-left">
  <div class="about-me">
    <img src="https://m.media-amazon.com/images/I/611hBRJHcGL.jpg" alt="Profile picture of John Doe" class="flying-picture">
    ${logged ? `${advirtises}` : "" }
    

    ${logged ? `<a href="/advirtises">All Advirtisement</a>` : ""}
    </div>
  </aside>

  <aside class="aside-right">
  <div class="about-me">
    <h3>About the Owner</h3>
    <p>Hi, my name is John Doe and I'm the owner of Kichuka News. I started this website as a passion project to share the latest news and information with my community. I hope you find the content on this website useful and informative.</p>
    <img src="https://m.media-amazon.com/images/I/611hBRJHcGL.jpg" alt="Profile picture of John Doe">
  </div>
     ${
       logged
         ? `<form action="/logout" method="post">
                    <button type="submit">Log Out</button>
                  </form>`
         : ""
     }
  </aside>

    <main>
      ${content}
    </main>
    <footer>
    <div class="social-media">
      <a href="#"><i class="fa fa-facebook-square"></i></a>
      <a href="#"><i class="fa fa-twitter-square"></i></a>
      <a href="#"><i class="fa fa-instagram"></i></a>
    </div>
    <div class="contact-us">
      <h3>Contact Us</h3>
      <p>Phone: 555-555-5555</p>
      <p>Email: info@kichukanews.com</p>
    </div>
    </footer>
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
          background-color: #00ccff;
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
            <input required type="text" id="name" name="name"><br>
            <label for="email">Email:</label><br>
            <input required type="text" id="email" name="email"><br>
            <label for="profilePic">Profile Pic:</label><br>
            <input type="text" id="profilePic" name="profilePic"><br>
            <label for="password">Password:</label><br>
            <input required type="password" id="password" name="password"><br>
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
            background-color: #00ccff;
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
           <img src="https://dogstreets.com/images/artwork/185666/art.webp" alt="Avatar">
            <form action="/login" method="POST">
              <label for="email">Email:</label><br>
              <input type="text" id="email" name="email"><br>
              <label for="password">Password:</label><br>
              <input type="password" id="password" name="password"><br>
              <button type="submit">Log In</button>
            </form>
          `;
}

module.exports = { createRegistrationView, createLoginView, mainHtmlSkeleton };
