function createArticleListView(articles, dateFn) {
  return `
      <style>
        .article {
          width: 400px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          margin-bottom: 20px;
        }
        h1 {
          margin-bottom: 20px;
        }
        p {
          margin-bottom: 20px;
        }
        .article {
            background-color: #FFC0CB;
          }
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          transition: all 0.2s ease-in-out;
          display: block;
          margin: 0 auto;
        }
        img:hover {
          transform: scale(1.1);
        }
        button[type="text"] {
          width: 100%;
          background-color: #4CAF50;
          color: white;
          padding: 14px 20px;
          margin-bottom: 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
      </style>
       <img src="/path/to/avatar.jpg" alt="Avatar">
       <div class="article"> 
       <button type="text"><a href="/create">Create New Article</a></button>
       </div>
       ${articles
         .map(
           (article) => `
         <div class="article">
            <h1>${article.title}</h1>
            <p>By ${article.author}</p>
            <p>${article.content}</p>
            <p>${dateFn(article.createdAt)}</p>
            <a href="news/${article._id}">See more</a>
            <a href="news/${article._id}/edit">Edit</a>
            <a href="news/${article._id}/delete">Delete</a>
         </div>
       `
         )
         .join("")}
      `;
}

function createNewArticleView() {
  return `
          <style>
          .article {
            width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-bottom: 20px;
            justify-content: center;
            align-items: center;
            text-align: center;
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
          button[type="text"] {
            width: 60%;
            background-color: #4CAF50;
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
            width: 50px;
            height: 50px;
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
        <div class="article">
        <h1>Hi Vidko, please feel free to destroy the world !</h1> 
        <button type="text"><a href="/news">All News</a></button>
            <form action="/create" method="POST">
              <label for="title">Title:</label><br>
              <input required type="text" id="title" name="title"><br>
              <label for="author">Author:</label><br>
              <input required type="text" id="author" name="author"><br>
              <label for="content">Content:</label><br>
              <textarea required id="content" name="content"></textarea><br>
              <label for="createdAt">Date:</label><br>
              <input type="date" required id="createdAt" name="createdAt"><br>
              <button type="submit">Create Article</button>
            </form>
        </div>
          `;
}

function readArticle(article) {
  return `
      <style>
      .info-button {
        background-color: blue;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
      }
        .article {
          width: 400px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        h1 {
          margin-bottom: 20px;
        }
        p {
          margin-bottom: 20px;
        }
        .article {
            background-color: #FFC0CB;
          }
        img {
          width: 50px;
          height: 50px;
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
       <img src="/path/to/avatar.jpg" alt="Avatar">
       <div class="article">
          <h1>${article.title}</h1>
          <p>By ${article.author}</p>
          <p>${article.content}</p>
          <button class="info-button"><a href="/news">Back</a></button>
       </div>
      
      `;
}

function updateArticleView(article) {
  return `
      <style>
      .danger-button {
        background-color: red;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
      }
    
      .info-button {
        background-color: blue;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
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
        input[type="text"], input[type="password"], textarea {
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
          width: 50px;
          height: 50px;
          border-radius: 50%;
          box-sizing: border-box;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          transition: all 0.2s ease-in-out;
          display: block;
          margin: 0 auto;
        }
        img:hover {
          transform: scale(1.1);
        }
      </style>
      <h1>Update Article</h1>
          <form action="/news/${article._id}?_method=PUT" method="POST">
            <input required type="hidden" name="id" value="${article._id}">
            <label for="title">Title:</label><br>
            <input required type="text" id="title" name="title" value="${article.title}"><br>
            <label for="author">Author:</label><br>
            <input required type="text" id="author" name="author" value="${article.author}"><br>
            <label for="content">Content:</label><br>
            <textarea required id="content" name="content">${article.content}</textarea><br>
            <button type="submit">Update Article</button>
            <button class="info-button"><a href="/news">Back</a></button>
          </form>
        `;
}

function deleteArticle(article) {
  return `
      <style>      
      .danger-button {
        background-color: red;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
      }
    
      .info-button {
        background-color: blue;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
      }
        .article {
          width: 400px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        h1 {
          margin-bottom: 20px;
        }
        p {
          margin-bottom: 20px;
        }
        .article {
            background-color: #FFC0CB;
          }
        img {
          width: 50px;
          height: 50px;
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
      <h1>Are you sure that you want to delete this article ?</h1>
      <form action="/news/${article._id}?_method=DELETE" method="POST">
      <input type="hidden" name="id" value="${article._id}">
      <button class="danger-button" type="submit">Delete</button>
      <button class="info-button"><a href="/news">Back</a></button>
    </form>
      `;
}

module.exports = {
  createNewArticleView,
  createArticleListView,
  readArticle,
  updateArticleView,
  deleteArticle,
};
