async function editFormHandler(event) {
  event.preventDefault();
  const title = document.querySelector('#post-title').value;
  const post_content = document.querySelector('#post-content').value;
  const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      post_content
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  if (response.ok) {
    alert("Post updated...")
    fetch('/api/users/dashboard').then(
      document.location.replace('/api/users/dashboard')
  )} else {
    alert(response.statusText);
  }
}
  
document.querySelector('.edit-post').addEventListener('submit', editFormHandler);
