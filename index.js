
const resultado = document.querySelector('.resultado');
const botao = document.querySelector('#botao');

botao.addEventListener('click',recebeEventoForm)

function recebeEventoForm(evento) {
        evento.preventDefault();
        const peso = document.querySelector('.peso');
        const altura = document.querySelector('.altura');
        const imc = peso.value / (altura.value * altura.value);

        resultado.innerHTML = `<p> Seu IMC é: <strong> ${imc.toFixed(2)} </strong> </p>`;
}

const btn = document.querySelector('#darkmode')
const container = document.querySelector('.container')
const body = document.querySelector('.body')
const footer = document.querySelector('.footer')
const moon = document.querySelector('.fa-moon-o')
const sun = document.querySelector('.fa-sun-o')

btn.onclick = function(){

        this.classList.toggle('active')
        container.classList.toggle('active')
        body.classList.toggle('active')
        copyright.classList.toggle('active')
        footer.classList.toggle('active')
        moon.classList.toggle('disable')
        sun.classList.toggle('disable')
}