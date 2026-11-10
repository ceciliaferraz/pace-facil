function calcularPace() {
    const distanciaInput = document.getElementById('distancia').value;
    const tempoInput = document.getElementById('tempo').value;
    const divResultado = document.getElementById('resultado');

    // Validação básica
    if (!distanciaInput || !tempoInput || distanciaInput <= 0 || tempoInput <= 0) {
        alert("Por favor, insira valores válidos para distância e tempo.");
        return;
    }

    const distancia = parseFloat(distanciaInput);
    const tempoTotalMinutos = parseFloat(tempoInput);

    // 1. Cálculo do Pace (minutos por km)
    const paceDecimal = tempoTotalMinutos / distancia;
    const minutos = Math.floor(paceDecimal);
    const segundos = Math.round((paceDecimal - minutos) * 60);

    // Formata os segundos para ter sempre 2 dígitos (ex: 5:05 em vez de 5:5)
    const segundosFormatados = segundos < 10 ? '0' + segundos : segundos;
    const paceFinal = `${minutos}:${segundosFormatados} min/km`;

    // 2. Cálculo da Velocidade na Esteira (km/h)
    // Fórmula: 60 minutos / pace em decimal
    const velocidadeEsteira = (60 / paceDecimal).toFixed(1) + " km/h";

    // Exibe os resultados na tela
    document.getElementById('resPace').innerText = paceFinal;
    document.getElementById('resEsteira').innerText = velocidadeEsteira;

    // Mostra o bloco de resultado caso esteja oculto
    divResultado.classList.remove('hidden');
}
