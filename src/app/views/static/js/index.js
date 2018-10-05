$(document).ready(function() {
  $('#register').click(function() {
  if ($('input:password').val() !== "") {
  
    var name = $('#name').val();
    var email = $('#email').val();
    var password = $('#password').val();
  
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

/* login */

$(document).ready(function() {
  $('#login').click(function() {

    var email = $('#email').val();
    var password = $('#password').val();

    var data = {
      email: email,
      password: password
    }

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYjYzMjY3ODRjNDgxMGUyNGZjZGRkNiIsImlhdCI6MTUzODY3MzUwNiwiZXhwIjoxNTM4NzU5OTA2fQ.YFmOP-W0ZkEFFgcHVsmTdPKTDJLg969A3qRcF_1gKU8'

    axios.defaults.headers.common = {'Authorization': "bearer " + token}


    var url = 'http://localhost:7000/';
    axios.post(`${url}auth/authenticate`, data)
    
    .then( response => {
      alert('you are logged in dashboard!')
      window.location.replace('http://localhost:7000/dashboard')
      console.log(response)
    })
      .catch( error => {
      console.log(error)
    })
});
});