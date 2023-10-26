const inputTarea = document.getElementById('inputTarea');
const inputTiempo = document.getElementById('tiempo');
const listaTareas = document.querySelector('#tareas ul');

const tareas = [];

function addTarea(){
    const dato = inputTarea.value;
    const tiempo = inputTiempo.value;
    if(dato){
    tareas.push({tarea: dato, time: tiempo});
    inputTarea.value='';
    showTareas();
    }
}

function showTareas(){
    const tareasLi = tareas.map(tarea => `<li>${ tarea.tarea } - ${tarea.time}</li>`);
    listaTareas.innerHTML = tareasLi.join('');

} //sirve para iterar una linea en pocas palabras te ayuda a dar un espacio