const lienzo = document.querySelector('#lienzo');

const ctx = lienzo.getContext('2d');


ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(295, 200); 
ctx.quadraticCurveTo(195, 100, 145, 200); 
ctx.quadraticCurveTo(95, 300, 295, 400); 
ctx.quadraticCurveTo(495, 300, 445, 200); 
ctx.quadraticCurveTo(395, 100, 295, 200); 
ctx.fill();








