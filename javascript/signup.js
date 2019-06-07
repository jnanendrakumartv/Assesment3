function check_value(){
	var regfirstname = /^[a-zA-Z ]$/;		
	var reglastname = /^[a-zA-Z ]$/;	
	var regemail =/^(([a-zA-Z0-9]+)@([a-z]+)\.([a-z]{1,5}))$/;
	var regphone_number = /^[0-9]{3}-[0-9]{3}-[0-9]{4}/;	
	var regfirstaddress = /^[a-zA-Z0-9]*$/;
	var regsecondaddress = /^[a-zA-Z0-9]*$/;
	var regcity =  /^[a-zA-z] ?([a-zA-z]|[a-zA-z] )*[a-zA-z]$/;
	var regstate =  /^[a-zA-z] ?([a-zA-z]|[a-zA-z] )*[a-zA-z]$/;
	var regzip = /^[0-9]{6}$/;
	var regpasword =  /^[0-9]{10}$/;
	var regverifypassword =  /^[0-9]{10}$/;

	var firstname=document.signupform.firstname.value;
	var lastname=document.signupform.lastname.value;
	var email=document.signupform.email.value;
	var phone=document.signupform.phone_number.value;
	var firstaddress=document.signupform.firstaddress.value;
	var secondaddress=document.signupform.secondaddress.value;
	var city=document.signupform.city.value;
	var state=document.signupform.state.value;
	var zip=document.signupform.zip.value;
	var password=document.signupform.password.value;
	var verifypassword=document.signupform.verifypassword.value

	if(firstname=='null' || firstname=="") {
		document.getElementById("perso_name").innerHTML="Firstname can't be blank";
		document.getElementById("firstname").style.color="#a00909";
		document.getElementById("idfirstname").style.border="1px solid #ff0000b5";
	}
	else if(regfirstname.test(firstname)){}
	else{
		document.getElementById("perso_name").innerHTML="Please Enter a Valid First name";
		document.getElementById("firstname").style.color="#a00909";
		document.getElementById("idfirstname").style.border="1px solid #ff0000b5";
	}

	if(lastname=='null' || lastname=="") {
		document.getElementById("last_name").innerHTML="lastname can't be blank";
		document.getElementById("lastname").style.color="#a00909";
		document.getElementById("idlastname").style.border="1px solid #ff0000b5";
	}
	else if(reglastname.test(lastname)){}
	else {
		document.getElementById("last_name").innerHTML="Please Enter Valid last name";
		document.getElementById("lastname").style.color="#a00909";
		document.getElementById("idlastname").style.border="1px solid #ff0000b5";
	}
	if(email=='null' || email=="") {
		document.getElementById("email_id").innerHTML="email can't be blank";
		document.getElementById("email").style.color="#a00909";
		document.getElementById("emailid").style.border="1px solid #ff0000b5";
	}	
	else if(regemail.test(email)){}
	else {
		document.getElementById("email_id").innerHTML="Please Enter Valid email";
		document.getElementById("email").style.color="#a00909";
		document.getElementById("emailid").style.border="1px solid #ff0000b5";
	}

	if(phone=='null' || phone=="") {
		document.getElementById("phone_id_number").innerHTML="phone number can't be blank";	
		document.getElementById("phone").style.color="#a00909";
		document.getElementById("phone_id").style.border="1px solid #ff0000b5";
	}	
	else if(regphone_number.test(phone)){}
	else {
		document.getElementById("phone_id_number").innerHTML="Please Enter valid phone number";	
		document.getElementById("phone").style.color="#a00909";
		document.getElementById("phone_id").style.border="1px solid #ff0000b5";
	}

	if(firstaddress=='null' || firstaddress==""){
		document.getElementById("addressid").innerHTML="address1 can't be blank";
		document.getElementById("firstaddress").style.color="#a00909";
		document.getElementById("address_id").style.border="1px solid #ff0000b5";
	}
	else if(regfirstaddress.test(firstaddress)){}
	else {
	document.getElementById("addressid").innerHTML="please Enter valid address1";
	document.getElementById("firstaddress").style.color="#a00909";
	document.getElementById("address_id").style.border="1px solid #ff0000b5";
	}

	if(secondaddress=='null' || secondaddress==""){
		document.getElementById("addressid2").innerHTML="address2 can't be blank";
		document.getElementById("secondaddress").style.color="#a00909";
		document.getElementById("address_id2").style.border="1px solid #ff0000b5";
	}
	else if(regsecondaddress.test(secondaddress)){}
	else {
		document.getElementById("addressid2").innerHTML="Please ebter vali address2";
		document.getElementById("secondaddress").style.color="#a00909";
		document.getElementById("address_id2").style.border="1px solid #ff0000b5";
	}

	if(city=='null' || city==""){
		document.getElementById("city_id").innerHTML="city can't be blank";
		document.getElementById("city").style.color="#a00909";
		document.getElementById("cityid").style.border="1px solid #ff0000b5";
	}
	else if(regcity.test(city)){}
	else {
		document.getElementById("city_id").innerHTML="please enter valid city name";
		document.getElementById("city").style.color="#a00909";
		document.getElementById("cityid").style.border="1px solid #ff0000b5";
	}

	if(state=='null' || state==""){
		document.getElementById("state_id").innerHTML="state can't be blank";	
		document.getElementById("state").style.color="#a00909";
		document.getElementById("stateid").style.border="1px solid #ff0000b5";
	}
	else if(regstate.test(state)){}
	else {
		document.getElementById("state_id").innerHTML="please enter valid state name";	
		document.getElementById("state").style.color="#a00909";
		document.getElementById("stateid").style.border="1px solid #ff0000b5";
	}

	if(zip=='null' || zip==""){
		document.getElementById("zip_id").innerHTML="zip can't be blank";	
		document.getElementById("zip").style.color="#a00909";
		document.getElementById("zipid").style.border="1px solid #ff0000b5";	
	}
	else if(regzip.test(zip)){}
	else {
		document.getElementById("zip_id").innerHTML="please Enter valid zip code";	
		document.getElementById("zip").style.color="#a00909";
		document.getElementById("zipid").style.border="1px solid #ff0000b5";	
	}
	if(password=='null' || password==""){
		document.getElementById("password_id").innerHTML="password can't be blank";	
		document.getElementById("password").style.color="#a00909";
		document.getElementById("passwordid").style.border="1px solid #ff0000b5";	
	}
	else if(regpasword.test(password)){}
	else {
		document.getElementById("password_id").innerHTML="please enter valid password";	
		document.getElementById("password").style.color="#a00909";
		document.getElementById("passwordid").style.border="1px solid #ff0000b5";	
	}

	if(verifypassword=='null' || verifypassword==""){
		document.getElementById("verifypassword_id").innerHTML="Re enter the password";	
		document.getElementById("verifypassword").style.color="#a00909";
		document.getElementById("verifypasswordid").style.border="1px solid #ff0000b5";	
	}
	else if(regverifypassword.test(v_pwd) && password==verifypassword){ 
		window.location.href = "#myModal";
	}
	else {
		document.getElementById("verifypassword_id").innerHTML="Missmatch password";	
		document.getElementById("verifypassword").style.color="#a00909";
		document.getElementById("verifypasswordid").style.border="1px solid #ff0000b5";
	}
	return false;
}