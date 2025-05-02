const username = "admin";

function renderPost(post) {
    const template = document.getElementById("post-template").content.cloneNode(true);
    template.querySelector(".username").innerText = post.username;
    template.querySelector(".message").innerText = post.message;
    document.getElementById("feed").appendChild(template);
}

function submitPost() {
    const message = document.getElementById("postInput").value;
    console.log("Would post:", message);
    alert("Tweet submitted (not really yet)");
}

<<<<<<< Updated upstream
window.onload = () => {
    const hardcodedPost = {
        username: "admin",
        message: "Welcome to Banterbird! This post is hardcoded.",
    };
    renderPost(hardcodedPost);
};
=======
window.onload = async () => {
  try {
    const response = await fetch("/api/posts");
    const posts = await response.json();
    posts.forEach((post) => {
      renderPost(post);
    });
  } catch (error) {
    console.error("FIXXX ITTTT", error);
  }
};

setInterval( async () => {
  try {
    const response = await fetch("/api/posts");
    const posts = await response.json();
    document.getElementById("feed").innerHTML = ""; 
    posts.forEach((post) => {
      renderPost(post);
    });
  } catch (error) {
    console.error("Polling Failed with error", error);
  }
}, 5000); 
>>>>>>> Stashed changes
