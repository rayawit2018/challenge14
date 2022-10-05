
const commentFormHandler = async function (event) {
  event.preventDefault();
  
  const blog_id = document.querySelector(".new-comment-form").dataset.blogid;
  const comment_description = document
    .querySelector("#comment_description")
    .value.trim();
  if (comment_description) {
    console.log("comments");
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        blog_id,
        comment_description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("post for comments compleat");
    document.location.reload();
  }
};
document
  .querySelector(".new-comment-form")
  .addEventListener("submit", commentFormHandler);
