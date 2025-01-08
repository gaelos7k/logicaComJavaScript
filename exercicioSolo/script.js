alert('Bem vindo ao meu jogo do número secreto.');

const numeroSecreto = parseInt(Math.random() * 11);
const dificuldade = 10;

console.log(`Para fins de teste o número secreto é ${numeroSecreto}.`);

let numeroEscolhido;

while (numeroEscolhido != numeroSecreto) {

    numeroEscolhido = parseInt(prompt(`Escolha um número entre 0 e ${dificuldade}`));

    if (numeroEscolhido === numeroSecreto) {
        alert('Parábens você acertou.');
        break;
    } else if (numeroEscolhido > numeroSecreto) {
        alert(`Tente novamente! O número secreto é menor que ${numeroEscolhido}.`);
    } else {
        alert(`Tente novamente! O número secreto é maior que ${numeroEscolhido}`);
    }
}