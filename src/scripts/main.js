// Defina a data final da contagem regressiva (substitua com a sua data)
const dataFinal = new Date('2024-06-20 23:59:59').getTime();

// Função para atualizar o contador a cada segundo
function atualizarContador() {
    const agora = new Date().getTime();
    const diferenca = dataFinal - agora;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById('contador').innerHTML=(`${dias}d ${horas}h ${minutos}m ${segundos}s`);

    if (diferenca <= 0) {
        clearInterval(interval);
        console.log("Contagem encerrada!");
    }
}

// Chame a função para iniciar a contagem regressiva e atualizar a cada segundo
const interval = setInterval(atualizarContador, 1000);