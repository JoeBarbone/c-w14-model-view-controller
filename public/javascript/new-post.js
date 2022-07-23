async function createPostFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector("#post-title").value.trim();
    const post_content = document.querySelector("#post-content").value.trim();
    const user_id = event.target.id
    // const createdAt = new Date();
    // const updatedAt = new Date();

    
  

    if (title && post_content) {
      const response = await fetch("/api/posts", {
        method: "post",
        body: JSON.stringify({
            title,
            post_content,
            user_id
        }),
        headers: { "Content-Type": "application/json" }
      });
  
      if (response.ok) {
        window.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  }
  

  document.querySelector("#new-post-form").addEventListener("submit", createPostFormHandler);