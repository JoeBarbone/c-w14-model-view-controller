async function createPostFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector("#post-title").value.trim();
    const content = document.querySelector("#post-content").value.trim();
    const user_id = 3;
    // const createdAt = new Date();
    // const updatedAt = new Date();

    // I have tried every fucking thing I could think of.
    // created_at, createdAt, res.session.user_id for the user_id NOTHING FUCKING WORKS
  

    if (title && content) {
      const response = await fetch("/api/posts", {
        method: "post",
        body: JSON.stringify({
            title,
            content,
            user_id
        }),
        headers: { "Content-Type": "application/json" }
      });
  
      if (response.ok) {
        document.location.replace("/dashboard/");
      } else {
        alert(response.statusText);
      }
    }
  }
  

  document.querySelector("#new-post-form").addEventListener("submit", createPostFormHandler);