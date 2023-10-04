//es un objeto que representa un valor futuro o una operación asincrónica que aún no ha sido completada. 
const names = ["Franck","peter","luciana","petra"]

const getNamesPromise = (valor) => new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            console.log('Ejecuta promesas');
            if(valor){
                resolve(names);
            }
            else{
                reject(new Error('Fallo'));
            }
            resolve(names);
        }, 1000)
    }
)

//console.log(getNamesPromise);

console.log('inicia peticion')
getNamesPromise(1).then(
    (datos) =>{
        console.log(datos);
        console.log('finaliza peticion')

    }
    )
    .catch (error => console.log(error))
console.log('continua ejecucion')
