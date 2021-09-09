
const barra2 = document.getElementById('dado2');
const barra1 = document.getElementById('dado1');

let armazernar = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function contador() {

    for (let i = 1; i <= 1000; i++) {

        let dado1 = aleatorio(1, 6);
        let dado2 = aleatorio(1, 6);
        let somaDado = dado1 + dado2;
        armazernar[somaDado] += 1;
    }

    return armazernar;
}

function aleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

contador();



function mostraResultados() {
    for (let i = 0; i <= 12; i++) {
        const c = document.createElement('div')
        c.classList.add('barra1')
        c.innerText = armazernar[i];
        c.style.width = `${armazernar[i]}px`
       
        barra1.appendChild(c);
    }
};

mostraResultados()



