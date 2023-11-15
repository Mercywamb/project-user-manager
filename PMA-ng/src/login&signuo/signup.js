alert('hi');
const signUpForm = document.getElementById('sign-up-form');

signUpForm.addEventListener('submit', function(e) {
  e.preventDefault(); 
  
 
  const usernameInput = document.getElementById('username').value;
  
  
  if (usernameInput.trim() === '' || !(/^[a-zA-Z]+$/.test(usernameInput))) {
    alert('Invalid username. Please enter alphabetic characters only.');
    return;
  }
  

  signUpForm.submit();
});