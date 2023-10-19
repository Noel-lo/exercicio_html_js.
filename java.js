function validarFormulario() {
    var campoA = parseFloat(document.getElementById('campoA').value);
    var campoB = parseFloat(document.getElementById('campoB').value);

    if (campoB > campoA) {
        document.getElementById('mensagem').innerHTML = 'Formulário válido!';
        document.getElementById('mensagem').style.color = 'green';
    } else {
        document.getElementById('mensagem').innerHTML = 'Campo B deve ser maior que Campo A!';
        document.getElementById('mensagem').style.color = 'red';
    }

    return false; // Evita o envio real do formulário
}
