$(document).ready(function() {
  $('.login').click(function() {
  if ($('input:password').val() !== "") {
  
    var name = $('.name').val();
    var email = $('.email').val();
    var password = $('.password').val();
  
  
    var payload = {
      name: name,
      email: email,
      password: password
    }
  
    var url = 'http://localhost:7000/';
    axios.post(`${url}auth/register`, payload)
    .then( response => {
    console.log(response)
  })
    .catch( error => {
    console.log(error)
  })
  
  } else {
    alert('Password wrong, please, try again!');
  }
});
});
