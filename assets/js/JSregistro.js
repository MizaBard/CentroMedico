var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var email = document.getElementById('mail');
var contraseña = document.getElementById('contraseña');
var confContraseña = document.getElementById('confirmContraseña');
var rut = document.getElementById('rut');
var errorNombre = document.getElementById('errorNombre');
var errorApellido = document.getElementById('errorApellido');
var errorMail = document.getElementById('errorMail');
var errorContraseña = document.getElementById('errorContraseña');
var errorConfContraseña = document.getElementById('errorContraseña2');
var errorRut = document.getElementById('errorRut');
var mensajeExito = document.getElementById('mensajeExito');
var Fn = {
    //validar cadena del rut "xxxxxxxx-x"
    validaRut : function(rutCompleto){
        rutCompleto = rutCompleto.replace("-","-");
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
            return false;
        var tmp = rutCompleto.split('-');
        var digv = tmp [1];
        var rut = tmp [0];
        if (digv == 'K') digv = 'k';

        return (Fn.dv(rut) == digv);
    },
    dv : function(T){
        var M=0,S=1;
        for(;T;T=Math.floor(T/10))
            S=(S+T%10*(9-M++%6))%11;
        return S?S-1:'k';
    }
}

$("#enviar").click(function(){
	if (Fn.validaRut( $("#rut").val() )){
		$("#errorRut").html("El rut ingresado es válido :D");
	} else {
		$("#errorRut").html("El Rut no es válido :'( ");
	}
});


function enviarFormulario(){
    var hayErrores = false;

    var mensajesError = [];

    //validacion nombre
    if(nombre.value.trim() === ''){
        mensajesError.push('Ingrese su nombre');
        errorNombre.textContent = 'Ingrese su nombre';
        hayErrores = true;
        console.log('Nombre validado')
    } else if (!/^[A-Za-záéíóúÁÉÍÓÚñÑ]+$/.test(nombre.value)){
        mensajesError.push('El nombre solo puede contener letras');
        errorNombre.textContent = 'El nombre solo puede contener letras';
        hayErrores = true;
        console.log('Nombre validado')
    } else{
        errorNombre.textContent ='';
    }

    //validacion apellido
    if(apellido.value.trim() === ''){
        mensajesError.push('Ingrese su apelldio');
        errorApellido.textContent = 'Ingrese su apellido';
        hayErrores = true;
        console.log('apellido validado')
    } else if (!/^[A-Za-záéíóúÁÉÍÓÚñÑ]+$/.test(apellido.value)){
        mensajesError.push('El apellido solo puede contener letras');
        errorApellido.textContent = 'El apellido solo puede contener letras';
        hayErrores = true;
        console.log('apellido validado')
    } else{
        errorApellido.textContent ='';
    }

    //validacion formato rut
    
    if (rut.value.trim() === '') {
        mensajesError.push('Ingrese su RUT');
        errorRut.textContent = 'Ingrese su RUT';
        hayErrores = true;
    } else if (!Fn.validaRut(rut.value.trim())) {
        mensajesError.push('RUT ingresado invalido');
        errorRut.textContent = 'RUT ingresado invalido';
        hayErrores = true;
    } else {
        errorRut.textContent = '';
    }

    //validacion email
    if(email.value.trim() === '') {
        mensajesError.push('Ingrese su correo');
        errorMail.textContent = 'Ingrese su correo';
        hayErrores = true; // Se establece a true si hay un error
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        mensajesError.push('El correo electrónico debe tener un formato válido');
        errorMail.textContent = 'El correo electrónico debe tener un formato válido';
        hayErrores = true; // Se establece a true si hay un error
    } else {
        errorMail.textContent = '';
    }

    //validacion contraseña
    if(contraseña.value.trim() === '') {
        errorContraseña.textContent = 'Ingresa una contraseña';
        hayErrores = true; // Se establece a true si hay un error
    } else if (contraseña.value.length < 4) {
        errorContraseña.textContent = 'La contraseña debe tener minimo 4';
        hayErrores = true; // Se establece a true si hay un error
    } else {
        errorContraseña.textContent = '';
    }

    //validacion confirmacio de contraseña
    if(confContraseña.value.trim() === '') {
        errorConfContraseña.textContent = 'Repite tu contraseña';
        hayErrores = true; // Se establece a true si hay un error
    } else if (confContraseña.value !== contraseña.value) {
        errorConfContraseña.textContent = 'Las contraseñas no coinciden';
        hayErrores = true; // Se establece a true si hay un error
    } else {
        errorConfContraseña.textContent = '';
    }

    if(hayErrores){
        return false;
    } else{
        return true;
    }
}