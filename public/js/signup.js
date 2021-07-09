const signUp = async (event)=>{
    event.preventDefault();
    const userName = document.querySelector('nameSignup').value.trim();
    const email = document.querySelector('emailSignup').value.trim();
    const password = document.querySelector('passwordSignup').value.trim();

    if (userName && email && password){
        const response = await fetch('/api/users',{
            method:'POST',
            body: JSON.stringify({userName,email,password}),
            headers:{ 'Content-Type': 'application/json'},
        });
        if (response.status === 200) {
            alert("Account created...")
            document.location.replace('/login');
            } else {
            alert('Failed to sign up.');
            }
        } else {
            alert("Please enter the required fields.")
        }  
    };

    document.querySelector('signUpForm').addEventListener('submit',signUp);
