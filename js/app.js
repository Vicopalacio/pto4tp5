let tiempo = document.querySelector(".tiempo");
let fecha = document.querySelector(".fecha");

function reloj(){
    let f = new Date();
    let d = f.getDate();
    let m = f.getMonth() +1;
    let a = f.getFullYear();
    let semana = f.getDay();


    let time = f.toLocaleTimeString();
    tiempo.innerHTML = time;


    let diasemana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
    let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    let mostrarSemana = (diasemana[semana])
    let mostrarMes =(meses[m])
    fecha.innerHTML = `${mostrarSemana} ${d} ${mostrarMes} ${a}`
}
setInterval(() => {
    reloj()
}, 1000);