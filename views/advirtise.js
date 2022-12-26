function createAdvirtiseView() {
  return `
      <div class="article">
        <h1>Create a new Advirtise</h1> 
        <button type="text"><a href="/advirtises">All Advirtises</a></button>
        <form action="/advirtise" method="POST">
          <label for="image">Image:</label><br>
          <input type="text" id="image" name="image"><br>
          <label for="title">Title:</label><br>
          <input required type="text" id="title" name="title"><br>
          <label for="content">Content:</label><br>
          <textarea required id="content" name="content"></textarea><br>
          <label for="link">Link:</label><br>
          <input required type="text" id="link" name="link"><br>
          <button type="submit">Create Advirtise</button>
        </form>
      </div>
    `;
}

function getAdvirtiseView(advirtise) {
  return `
      <div class="article">
        <h1>${advirtise?.title}</h1>
        <img src="${advirtise?.image}" alt="${advirtise?.title}">
        <p>${advirtise?.content}</p>
        <a href="${advirtise?.link}">Learn more</a>
      </div>
    `;
}

function getAllAdvirtisesView(advirtises) {
    let view = '<h1>All Advirtises</h1>';
    advirtises.forEach((advirtise) => {
      view += `
        <form action="/advirtises/${advirtise?._id}?_method=DELETE" method="POST"> 
         <div class="article">
          <h2><a href="/advirtise/${advirtise?._id}">${advirtise?.title}</a></h2>
          <input type="hidden" name="id" value="${advirtise?._id}">
          <img src="${advirtise?.image}" alt="${advirtise?.title}">
          <button class="danger-button" type="submit">Delete</button>
         </form>
        </div>
      `;
    });
    return view;
  }

module.exports = {
  createAdvirtiseView,
  getAdvirtiseView,
  getAllAdvirtisesView
};
