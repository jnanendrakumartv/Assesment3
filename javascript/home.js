document.getElementById("signup").style.display = "none";
$("#btnLogin").click(function(event) {
    //Fetch form to apply custom Bootstrap validation
    var form = $("#formLogin")
 
    if (form[0].checkValidity() === false) { 
      event.preventDefault()
      event.stopPropagation()
    }   
    form.addClass('was-validated');
});

function signup()
{
	document.getElementById("signup").style.display = "block";
	document.getElementById("main").style.display = "none";
}
function check_Email(mail){
    var regex = /^(([a-zA-Z0-9]+)@([a-z]+)\.([a-z]{1,5}))$/;
    if(regex.test(mail.myemail.value)==false){
     document.getElementById("signinemail").innerHTML="This is not a valid email address";
      // return false;
      alert("This is not a valid email address");
    }
    var regpwd = /^[0-9]{10}$/;
    if(regpwd.test(mail.mypwd.value)==false){
      document.getElementById("signinpwd").innerHTML="This is not a valid password";
      // return false;
      alert("This is not a valid password");
    }
}