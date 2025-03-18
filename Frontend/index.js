document.getElementById("formCalculadora").addEventListener("submit", function(event) {
    event.preventDefault();

    const energia = parseFloat(document.getElementById("inputEnergia").value);
    const alimentos = parseFloat(document.getElementById("inputAlimentos").value);
    const combustivel = parseFloat(document.getElementById("inputCombustivel").value);

    const taxaEnergia = 200; // Exemplo: média ideal de consumo de energia (kWh/mês)
    const taxaAlimentos = 50; // Exemplo: média ideal de alimentos (kg/mês)
    const taxaCombustivel = 30; // Exemplo: média ideal de combustível (litros/mês)

    let resultado = "<h4>Recomendações para reduzir sua pegada ecológica:</h4><ul>";

    if (energia > taxaEnergia) {
        resultado += "<li>🔌 <strong>Consumo de energia alto:</strong> Troque lâmpadas incandescentes por LED e reduza o tempo de banho quente.</li>";
    }

    if (combustivel > taxaCombustivel) {
        resultado += "<li>🚗 <strong>Uso excessivo de carro:</strong> Considere usar transporte público ou bicicleta para pequenas distâncias.</li>";
    }

    if (alimentos > taxaAlimentos) {
        resultado += "<li>🍔 <strong>Consumo elevado de carne:</strong> Reduza o consumo de carne vermelha para diminuir sua pegada de carbono.</li>";
    }

    if (energia <= taxaEnergia && combustivel <= taxaCombustivel && alimentos <= taxaAlimentos) {
        resultado += "<li>✅ <strong>Parabéns!</strong> Seu consumo está dentro dos limites sustentáveis.</li>";
    }

    resultado += "</ul>";

    document.getElementById("resultado").innerHTML = resultado;
});