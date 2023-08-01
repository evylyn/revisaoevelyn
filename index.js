function avaliarIdade() {
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    let resultMessidade;

    if (!nome || isNaN(idade)) {
        resultMessidade = "Por favor, preencha corretamente o nome e a idade.";
    } else {
        if (idade <= 11) {
            resultMessidade = `${nome}, você é uma criança.`;
        } else if (idade >= 12 && idade <= 20) {
            resultMessidade = `${nome}, você é um adolescente.`;
        } else if (idade >= 21 && idade <= 40) {
            resultMessidade = `${nome}, você é um adulto.`;
        } else { idade >= 41 && idade <=60
            resultMessidade = `${nome}, você é um idoso.`;
        }
    }

    document.getElementById('result').innerText = resultMessidade;
}
