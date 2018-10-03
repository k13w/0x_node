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

      var url = 'http://localhost:7000';
      $.ajax({
        url:url + '/auth/register',
        type:"POST",
        data:payload,
        contentType:"application/json; charset=utf-8",
        dataType:"json",
        success: function() { 
          console.log(error)
        }
        })

    } else {
      alert('Password wrong, please, try again!');
    }
  });
});
