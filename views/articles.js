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

function readArticleWithComments(article) {
  return `
      <style>
      .info-button {
        background-color: blue;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
      }
        .article-container {
          width: 400px;
          margin: 0 auto;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #FFC0CB;
          padding: 20px;
        }
        .article {
          margin-bottom: 20px;
        }
        h1 {
          margin-bottom: 20px;
        }
        p {
          margin-bottom: 20px;
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
        /* Add styles for the comments section */
        .comments {
          margin-top: 20px;
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
      </style>
       <img src="/path/to/avatar.jpg" alt="Avatar">
       <!-- Wrap the article and comments in a common div -->
       <div class="article-container">
          <div class="article">
            <h1>${article.title}</h1>
            <p>By ${article.author}</p>
            <p>${article.content}</p>
            <button class="info-button"><a href="/news">Back</a></button>
          </div>
          <!-- Add the comments section -->
          <div class="comments">
            <h2>Comments</h2>
            ${article.comments
              .map(
                (comment) => `
              <div class="comment">
                <p class="author">${comment.author}:</p>
                <p>${comment.content}</p>
              </div>
            `
              )
              .join("")}
          </div>
          <!-- Add form for submitting comments -->
          <form action="/news/${article._id}/comments?_method=PUT" method="POST" id="comment-form">
            <label for="author">Name:</label><br>
            <input type="text" id="author" name="author"><br>
            <label for="content">Comment:</label><br>
            <textarea id="content" name="content" rows="5" cols="40"></textarea><br>
            <input type="submit" value="Submit">
          </form>
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
      .article-image {
      display: block;
      margin: 0 auto;
      width: 20%;
      height: 20%;
      height: auto;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      /* Add a margin to the bottom of the image */
      margin-bottom: 20px;
    }
  </style>

       <img src="/path/to/avatar.jpg" alt="Avatar">
       <!-- Add the article image -->
       <img class="article-image" src="https://scontent.fsof1-1.fna.fbcdn.net/v/t1.18169-9/10473369_1563038257250657_1637029864453755271_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=be7NkAVsg6UAX_D3m9s&_nc_ht=scontent.fsof1-1.fna&oh=00_AfDwnP7xfJxunRWc6UNc5TOf1rEEWYdqSvnUTOiVVj2HSg&oe=63CEB20D" alt="Article Image">
       <div class="article">
          <h1>${article.title}</h1>
          <p>By ${article.author}</p>
          <p>${article.content}</p>
          <button class="info-button"><a href="/news">Back</a></button>
          <button class="info-button"><a href="/news/${article._id}/comments">Comments</a></button>
       </div>
      
      `;
}

module.exports = {
  createNewArticleView,
  createArticleListView,
  readArticle,
  updateArticleView,
  deleteArticle,
  readArticleWithComments,
};
