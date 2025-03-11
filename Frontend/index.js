document.getElementById('form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const energia = document.getElementById('energia').value;
    const transporte = document.getElementById('transporte').value;
    const alimentacao = document.getElementById('alimentacao').value;

    const response = await fetch('http://localhost:3000/calcular', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ energia, transporte, alimentacao })
    });

    const data = await response.json();
    document.getElementById('resultado').innerText = `Sua Pegada Ecológica: ${data.pegada} hectares globais`;
});