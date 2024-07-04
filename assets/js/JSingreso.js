var rut = document.getElementById('rut');
var contraseña = document.getElementById('contraseña');
var errorContraseña = document.getElementById('errorContraseña');
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


function enviarFormulario(){
    var hayErrores = false;

    var mensajesError = [];

    //validacion nombre

    //validacion apellido

    //validacion email

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

    //validacion contraseña
    if(contraseña.value.trim() === '') {
        errorContraseña.textContent = 'Ingresa una contraseña';
        hayErrores = true; // Se establece a true si hay un error
    } else if (contraseña.value.length < 4) {
        errorContraseña.textContent = 'Ingresa la contraseña correcta';
        hayErrores = true; // Se establece a true si hay un error
    } else {
        errorContraseña.textContent = '';
    }

    //validacion confirmacio de contraseña

    if(hayErrores){
        return false;
    } else{
        return true;
    }
}