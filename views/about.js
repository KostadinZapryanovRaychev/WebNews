function getAboutUsView() {
    return `

        <div class="container-about">
          <h1>About Us</h1>
          <div class="about-me">
            <h3>About the Owner</h3>
            <p>Hi, my name is John Doe and I'm the owner of Kichuka News. I started this website as a passion project to share the latest news and information with my community. I hope you find the content on this website useful and informative.</p>
            <img class="img-about" src="https://m.media-amazon.com/images/I/611hBRJHcGL.jpg" alt="Profile picture of John Doe">
          </div>
          <h2>Get in touch</h2>
          <form action="/send-mail" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            <button type="submit">Send </button>
           </form>
        </div>
    `;
  }
  
  module.exports = { getAboutUsView };