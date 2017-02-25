
 
 var userMail=document.getElementById("uemail").value;
 var userPasswrd1=document.getElementById("userpassword_1").value;
 var uName=document.getElementById("usernimi").value;
 var uPerenimi=document.getElementById("userperekonnanimi").value;
 var uAdress=document.getElementById("useradress").value;
 var uTelefon=document.getElementById("usertelefon").value;
 
  function Registr() { 
  if (userMail == ''|| userPasswrd1==''|| uName=='' || uPerenimi=='' || uAdress==''|| uTelefon=='' ){
   alert("Taita koik ");
  //db connect
   return true;
  }else
  alert("Olete registreerinud, linki saadetud emaile.");
  return false;
   
 }
 
 function Tel(){
	 
	if(/^\d{8}$/.test(document.reg.usertelefon.value) ) {
		uTelefon.focus;
		text=" ok";
		return true;
	}else{text="vale, sissestage telefoni number naiteks: xxxxxxxxxx";}
	
	document.getElementById("ut").innerHTML=text; 
 }

 
  function uNim(){
	  
	  if(/^[A-Za-z]+$/.test(document.reg.usernimi.value)) {
		 uName.focus; 
		text="ok";
		return true;
	}else{text="vale, kasutage A-z ";}
	
	document.getElementById("umi").innerHTML=text; 
	  
  }
 
  function UsPer(){
	  
	  if( /^[A-Za-z]+$/.test(document.reg.userperekonnanimi.value)) {
		 uPerenimi.focus; 
		text="ok";
		return true;
	}else{text="vale, kasutage A-z ";}
	
	document.getElementById("upn").innerHTML=text; 
	  
  }

  function Adr(){
	  
	  if(/[A-Za-z0-9]+$/.test(document.reg.useradress.value)) {
	    uAdress.focus;  
		text="ok";
		return true;
	}else{text="vale, kasutage A-z ja numbrid 0-9";}
	document.getElementById("adr").innerHTML=text; 
	  
  }
 function Email(){ 
	  if(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9_\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(document.reg.uemail.value) ){
		userMail.focus;
		text="ok";
		return true;
	}else{
		text="vale, sissestage korrektne e-mail aadress ";
	}
	
	     document.getElementById("uem").innerHTML=text; 
 }
  
  function Pass(){
	  
	  
	  if(/[A-Za-z0-9].{5,20}$/.test(document.reg.userpassword_1.value) ) {
		  userPasswrd1.focus;
		text="ok";
		return true;
	  }else{text="vale, peab olema 6-20 tahti A-z 0-9.";}
	
	     document.getElementById("upsw").innerHTML=text; 
	  
  }
  
  ///////////        new password function    /////////////
  
  var newPass=document.getElementById("uuspsw").value;
  function NewPass(){
	  if(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9_\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(document.newpass.uuspsw.value) ){
		newPass.focus;
		text="ok";
		return true;
	}else{
		text="vale, sissestage korrektne e-mail aadress ";
	}
	document.getElementById("uspsw").innerHTML=text; 
	  
	  
  }
  
   function NewPassword() { 
  if (newPass != '' || newPass.indexOf("@")<3){
   alert("Kirjutage oma email");
	  // db connect
   
   return false;
  }
  return true;  
 }
