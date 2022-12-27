function styles() {
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
      h1 {
        margin-bottom: 20px;
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
          justify-content: flex-start;
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
        .aside-right {
          width: 400px;
          height: 100%;
          position: fixed;
          right: 0;
          background-color: #333;
          color: #fff;
          padding: 20px;
          box-sizing: border-box;
        }

        .aside-left {
            width: 400px;
            height: 100%;
            position: fixed;
            left: 0;
            padding: 20px;
            box-sizing: border-box;
          }

        aside .about-me {
          text-align: center;
        }
        aside .about-me img {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          margin: 20px 0;
        }

        .article {
            width: 500px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-bottom: 20px;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: 20px;
          }
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
          input[type="text"], input[type="password"], input[type="date"], textarea {
            width: 100%;
            padding: 12px 20px;
            margin-bottom: 20px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          select {
            width: 100%;
            padding: 12px 20px;
            margin-bottom: 20px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          button[type="text"] {
            width: 60%;
            background-color: #00ccff;
            color: black;
            padding: 14px 20px;
            margin-bottom: 20px;
            border: none;
            text-align:center;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            font: 18px Arial, Helvetica, sans-serif;
          }
          .button-news {
            width: 100%;
            background-color: #00ccff;
            color: white;
            padding: 14px 20px;
            margin-bottom: 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
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
          .header-category{
            display:flex;
            align-items:center;
            justify-content:space-between;
            padding: 3px;
          }
          .article {
            background-color: #FFC0CB;
          }
          h2 {
            margin-left:5px;
            margin-right:5px;
          }
          form {
              background-color: #FFC0CB;
            }
          img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            transition: all 0.2s ease-in-out;
            display: block;
            margin: 0 auto;
          }
          img:hover {
            transform: scale(1.3);
          }
          .comments {
            margin-top: 20px;
          }

          .container-about {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          .img-about {
            display: block;
            margin: 0 auto;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          }
          .comment {
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #FFC0CB;
            padding: 10px;
            margin-bottom: 10px;
          }
          .comment p {
            margin-bottom: 5px;
          }
          .comment p.author {
            font-weight: bold;
          }

          .article-container {
            max-width:100%;
            width:1000px;
            margin: 0 auto;
            border-radius: 5px;
            background-color: #FFC0CB;
          }

          .article-inside {
            width:auto;
            justify-content: center;
            align-items: center;
            text-align: center;
          }
          .info-button {
            background-color: blue;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
          }

          .danger-button {
            background-color: red;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
          }

          .flying-picture {
            /* Other styles for the picture */
            animation: flying-picture 5s infinite;
          }
          
          @keyframes flying-picture {
            0% {
              transform: translateX(0) rotate(0deg);
            }
            100% {
              transform: translateX(100px) rotate(360deg);
            }
          }

          .my-h3 {
            /* Other styles for the my-h3 element */
            transition: all 0.5s ease-in-out;
            opacity: 1;
            visibility: visible;
          }
          
          .my-h3.hidden {
            opacity: 0;
            visibility: hidden;
          }

          p {
            margin-bottom: 20px;
          }

          .button-news {
            width: 100%;
            background-color: #00ccff;
            color: white;
            padding: 14px 20px;
            margin-bottom: 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

    `;
}

module.exports = { styles };
