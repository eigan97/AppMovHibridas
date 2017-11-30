/*
Clave 1: 2edbc5884ac744f4aa2cd5d8ff591331

Clave 2: b6072cdd5104463d87fbe320689d7e26
*/
var userData = null;
var resultData = null;
let emailUse;
let nombreUse;
let edadUse;
let numTest;
let idUseResE;
let idUseResT;
let idUseImage;
const txtEmail = document.getElementById('txtEmail');
const passPassword = document.getElementById('passPassword');
const passPassword2 = document.getElementById('passPassword2');
const txtNombre = document.getElementById('txtNombre');
const txtUsername = document.getElementById('txtUsername');
const passContraseña = document.getElementById('passContraseña');
const spName = document.getElementById('spName'); 
const mosCorreo = document.getElementById('mosCorreo');
var pantalla = document.getElementById("bandera").value;
var hoy = new Date();
var dd = hoy.getDate();
var mm = hoy.getMonth()+1; //hoy es 0!
var yyyy = hoy.getFullYear();
console.log(dd+"/"+mm+"/"+yyyy);
var fecha = dd+"/"+mm+"/"+yyyy;
const numEdad = document.getElementById('numEdad');

function registro(){

    var pass2 = passPassword2.value;
    var email = txtEmail.value;
	var edad = numEdad.value;
	var nombre = txtNombre.value;
	var pass = passPassword.value;

	localStorage.setItem("email",email);
	localStorage.setItem("edad",edad);
	localStorage.setItem("nombre",nombre);
	localStorage.setItem("pass",pass);

    if (email != "" && edad != "" && nombre !="" && pass !="") {
    	if (email.includes("@") && email.includes(".")) {
    		if(pass.length >= 6){
    			if (pass == pass2) {
		        	window.location.assign('actividades.html');
	        	}else{
	        		alert("Las contraseñas no coinciden");
	        	}
	        }else{
	        	alert("La contraseña es demasiado corta");
	        }
        }else{
        	alert("Tu correo no es valido");
        }
    }else{
        alert("Hacen falta datos");
        console.log(email+" "+edad+" "+nombre+" "+pass);
    }
	//
}
function continuar(){
	var act = localStorage.getItem("actividades");
	var arregloDeCadenas = act.split(",");

	for (var i=0; i < 20; i++) {
    	if(arregloDeCadenas[i] == undefined){
    		arregloDeCadenas[i] = null;
    	}
	}
	window.location.assign('app.html');
}







function nomeacuerdo(){

	window.location.assign('app.html');
}







function test(){
	window.location.assign('test.html');
}
function test2(){
	var x = document.forms["pregunta1"];
	var y = document.forms["pregunta2"];
	var z = document.forms["pregunta3"];
	


	var radios  = document.getElementsByName('respuesta1');
	var radios1 = document.getElementsByName('respuesta2');
	var radios2 = document.getElementsByName('respuesta3');
	var puntaje =0;
	var contest=0;
	for (var i = 0, length = radios.length; i < length; i++)
	{
		if (radios[i].checked)
		{
			puntaje=puntaje+parseInt(radios[i].value);
			console.log("hola");
			contest++;
		}

		if (radios1[i].checked)
		{
			puntaje=puntaje+parseInt(radios1[i].value);
			contest++;
			console.log("hola");
		}

		if (radios2[i].checked)
		{
			puntaje=puntaje+parseInt(radios2[i].value);
			contest++;
			console.log("hola");
		}
	}
	
	if(contest==3){
		localStorage.setItem("p1",puntaje);
		console.log(puntaje);
		console.log(contest);
		window.location.assign('test2.html');
	}else{
		alert("constesta todos los campos");
	}
}
function test3(){

	var chec= document.getElementsByName('respuesta');
	var puntaje=0;
	for (var i = 0, length = chec.length; i < length; i++)
	{
	 if (chec[i].checked)
	 {
	 	puntaje++;
	 }

	}
	console.log(puntaje);
	localStorage.setItem("p2",puntaje);	
	window.location.assign('test3.html');
}









function final(){

	
	var radios  = document.getElementsByName('respuesta1');
	var radios1 = document.getElementsByName('respuesta2');
	var puntaje=0;
	var per=0;
	var contest=0

		for (var i = 0, length = radios.length; i < length; i++)
	{
	 if (radios[i].checked)
	 {
	  // do whatever you want with the checked radio
	  	puntaje=puntaje+parseInt(radios[i].value);
	  	console.log("hola");
	  	contest++;
	  //localStorage.setItem("res1",radios[i].value);
	

	  // only one radio can be logically checked, don't check the rest
	  
	 }
	 if (radios1[i].checked)
	 {
	  // do whatever you want with the checked radio

	  	per=per+parseInt(radios1[i].value);
	  	contest++;

	  //localStorage.setItem("res1",radios[i].value);
	
	  console.log("hola");
	  
	 }
	}
	if(contest==2){
	localStorage.setItem("p3",puntaje);	
	localStorage.setItem("per",per);
	var p1=localStorage.getItem("p1");
	var p2=localStorage.getItem("p2");
	var p3=localStorage.getItem("p3");
	var per=localStorage.getItem("per");
	


	if(p1==3 && p2>=3 && p3==1 && per==0){
		localStorage.setItem("resultado","si");
		console.log("muestra signps de depresion");	
		localStorage.setItem(fecha+"resulta","0");
	}

	else if(p1==3 && p2>=3 && p3==1 && per==1){
		localStorage.setItem("resultado","no");
		console.log("muestra signos de deprecion pero puede no estar deprimiedo");
		localStorage.setItem(fecha+"resulta","1");
	}
	else{
		localStorage.setItem("resultado","no");
		console.log("no muestra signos de deprecion");
		localStorage.setItem(fecha+"resulta","2");
	}
	window.location.assign('final.html');
}
else{
		alert("constesta todos los campos");

	}

}

function index(){
	window.location.assign('app.html');

}
function carga1(){

		var cargar= document.getElementById('cargar')
		var registrar= document.getElementById('registro')
	setTimeout(function (){

		cargar.style.left="-100%";

	}, 1000);
setTimeout(function (){
registrar.style.left="0%";

	}, 1000);

}
function guardarResE(){
    const email = localStorage.getItem("email");
    //var contempt=localStorage.getItem("contempt"),anger=localStorage.getItem("anger"),digust=localStorage.getItem("disgust"),fear=localStorage.getItem("fear"),happiness=localStorage.getItem("happiness"),neutral=localStorage.getItem("neutral"),sadness=localStorage.getItem("sadness"),surprise=localStorage.getItem("surprise");
    window.location.assign('perfil.html');
}

function img(){
	var resulta = localStorage.getItem("resulta");
    window.location.assign('img.html');
}

function reset(){
    for(var i =0; i < localStorage.length; i++){
        if (localStorage.key(i).includes(fecha) || localStorage.key(i).includes("actividades") || localStorage.key(i).includes("anger") || localStorage.key(i).includes("contempt") || localStorage.key(i).includes("disgust") || localStorage.key(i).includes("fear") || localStorage.key(i).includes("happiness") || localStorage.key(i).includes("neutral") || localStorage.key(i).includes("resulta") || localStorage.key(i).includes("sadness") || localStorage.key(i).includes("surprise")) {
            localStorage.removeItem(localStorage.key(i));
            alert(localStorage.key(i));
            alert(i)
            i=-1;
        }
    }
    console.log(localStorage.length);
	var resulta = localStorage.getItem("resulta");
    window.location.assign('actividades.html');
    alert("Se ha reseteado la información")
}

function reEvaluar(){
    var band;
    for(var i =0; i < localStorage.length; i++){
        if (localStorage.key(i).includes(fecha)) {
            band = 0;
        }
    }
    if (band != 0) {
        window.location.assign('app.html');
    }else{
        alert("Ya se realizo la encuesta del día de hoy");
    }
}

function logout(){
    localStorage.clear();
    window.location.assign('index.html');
}

function index(){
	window.location.assign('app.html');

}

console.log(pantalla);
function compruebacambio() {
    if (pantalla!="index" && (localStorage.getItem("email")=="" || localStorage.getItem("email") == undefined || localStorage.getItem("email") == null)) {
        carga1();
        window.location.assign('index.html');
    }
    if (pantalla=="index" && (localStorage.getItem("email")=="" || localStorage.getItem("email") == undefined || localStorage.getItem("email") == null)) {
        carga1();
    }
   	if (pantalla=="index" && localStorage.getItem("email")!="" && localStorage.getItem("email") != undefined && localStorage.getItem("email") != null) {
   		carga1();
        window.location.assign('perfil.html');
   	}
   	const email = localStorage.getItem("email");
   	if (email=="" && pantalla!="index") {
   		window.location.assign('index.html');
   	}
    if (pantalla=="app") {
        spName.innerHTML = localStorage.getItem("nombre");
    }else if(pantalla=="perfil"){
        spName.innerHTML = localStorage.getItem("nombre");
        mosCorreo.innerHTML = localStorage.getItem("email");
        if (!localStorage.getItem('imgData')) {

        }else{
            appendFileAndSubmit();
        }   
    }

}


function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

  var blob = new Blob(byteArrays, {type: contentType});
  return blob;
}

function appendFileAndSubmit(){
    // Get the form
    var form = document.getElementById("myAwesomeForm");

    var ImageURL = localStorage.getItem("imgData");
    // Split the base64 string in data and contentType
    var block = ImageURL.split(";");
    // Get the content type
    var contentType = block[0].split(":")[1];// In this case "image/gif"
    // get the real base64 content of the file
    var realData = block[1].split(",")[1];// In this case "iVBORw0KGg...."

    // Convert to blob
    var blob = b64toBlob(realData, contentType);
    //console.log(realData)
    console.log(contentType)
    console.log(blob);
    console.log(URL.createObjectURL(blob))

    document.getElementById("fotoPerfil").style.background = "url('"+URL.createObjectURL(blob)+"')"
    document.getElementById("fotoPerfil").style.backgroundRepeat="no-repeat"        
    document.getElementById("fotoPerfil").style.backgroundSize="cover"
    document.getElementById("fotoPerfil").style.backgroundPosition="center center"
}

function registrar(){

		var inicio= document.getElementById('inicio')
		var registrar= document.getElementById('registro')
		inicio.style.left="-100%";
		registrar.style.left="0%";
}
function inicio(){

		
}


window.onload = function() { 
	compruebacambio();
}

function sesion(){
	
}
