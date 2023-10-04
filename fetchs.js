const URL = 'http://127.0.0.1:5500';

console.log("peticion1");
fetch(URL+"/datos.txt")
    .then(resp => resp.text())
    .then(texto=> console.log(texto))
    .catch(error => console.log(error))

console.log('peticion2');    

fetch(URL +"/datos.json")
    .then(resp => resp.text())
    .then(texto=> console.log(texto))
    .catch(error => console.log(error))

console.log('sigue ejecutando');
