// async function updateFormHandler(event) {

//     const title = document.querySelector("#title").value.trim();
//     const post_content = document.querySelector("#post_content").value.trim();
    
//     if (event.target.classList.contains("update-post-btn")) {
//         const id = event.target.id
//         console.log(id);
//         const updatePost = await fetch(`/apiedit-post/${id}`, {
            
//             method: "post",
//             body: JSON.stringify({
//                 title,
//                 post_content
//             }),
//             headers: { "Content-Type": "application/json" }
            
//         });
//         if (updatePost.ok) {
//             console.log("updated successful!");
//             window.location.reload();
//         } else {
//             console.log(updatePost.statusText);
//         }
//     }
// }      
  
// document.querySelector("#edit-post-form").addEventListener("click", updateFormHandler);





async function updateFormHandler(event) {
    event.preventDefault();
    
    const title = document.querySelector("#title").value.trim();
    const post_content = document.querySelector("#post_content").value.trim();

    console.log(title);
    console.log(post_content);

    const id = event.target.id;
    
    console.log(`target id: ${id}`);

    if (event.target.classList.contains("update-post-btn")) {

        if (title && post_content) {
            const id = event.target.id;
            
            const response = await fetch(`/api/edit-post/${id}`, {
            method: "post",
            body: JSON.stringify({
            title,
            post_content
            }),
            headers: { "Content-Type": "application/json" }
        });
    
        if (response.ok) {
            document.location.refresh("/dashboard/");
        } else {
            alert(response.statusText);
        }
        }
    }

  };
  

  document.querySelector(".edit-post-form").addEventListener("submit", updateFormHandler);