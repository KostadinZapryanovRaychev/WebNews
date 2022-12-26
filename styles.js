function styles (){
    return `
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
        footer {
          background-color: #333;
          color: #fff;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .social-media {
          display: flex;
        }
        .social-media a {
          margin-right: 10px;
          color: #fff;
        }
        .social-media a:hover {
          color: #ccc;
        }
        .contact-us {
          text-align: right;
        }
        .contact-us h3 {
          margin: 0;
          font-size: 18px;
          font-weight: normal;
        }
        .contact-us p {
          margin: 0;
          margin-bottom: 5px;
        }
        /* Add styles for the sidebar */
        aside {
          width: 400px;
          height: 100%;
          position: fixed;
          right: 0;
          background-color: #333;
          color: #fff;
          padding: 20px;
          box-sizing: border-box;
        }
        aside .about-me {
          text-align: center;
        }
        aside .about-me img {
          width: 150px;
          border-radius: 50%;
          margin: 20px 0;
        }
    `
}

module.exports = { styles };