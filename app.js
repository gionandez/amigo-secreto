// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// let amigo = [];

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    if(amigo != ''){
        console.log("El campo no esta vacio");
        limpiarCaja();
    }else{
        alert("El campo esta vacio");
        limpiarCaja();
    }
    
}

function limpiarCaja(){
    document.getElementById('amigo').value = "";
}