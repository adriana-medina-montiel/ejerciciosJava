const names = ["Franck","peter","luciana","petra"]

console.log(names);

function getNames(){
    return names;
}

console.log(getNames());

//sirve para dar tiempo a los distintos tipos de peticion
function asynGetNames(){
    setTimeout(() => {
        console.log('ejecuta funcion');
        return names;
    }, 3000); 
}

console.log('Inicia peticion');
console.log(asynGetNames());
console.log('termina peticion');