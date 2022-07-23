async function deleteFormHandler(event) {

    
    if (event.target.classList.contains("delete-post-btn")) {
        const id = event.target.id
        console.log(id);
        const delPost = await fetch(`/api/posts/${id}`, {
            
            method: 'DELETE'
            
        });
        if (delPost.ok) {
            console.log("Deleted successful!");
            window.location.reload();
        } else {
            console.log(delPost.statusText);
        }
    }
}      
  
document.querySelector('.post-section').addEventListener('click', deleteFormHandler);