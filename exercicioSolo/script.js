alert('Bem vindo ao meu jogo do número secreto.');

const numeroSecreto = () => {
    console.log(parseInt(Math.random() * 11));
}

for (let i = 1; i <= 20; i++) {
    numeroSecreto();
}