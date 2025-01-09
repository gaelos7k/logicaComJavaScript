alert('Bem vindo ao meu jogo do número secreto.');

const numeroSecreto = parseInt(Math.random() * 11);
const dificuldade = 10;

console.log(`Para fins de teste o número secreto é ${numeroSecreto}.`);

let numeroEscolhido;
let chute = 1;

while (numeroEscolhido != numeroSecreto) {

    let palavraTentativa = chute === 1 ? 'tentativa.' : 'tentativas.';

    numeroEscolhido = parseInt(prompt(`Escolha um número entre 0 e ${dificuldade}`));

    if (numeroEscolhido === numeroSecreto) {
        alert(`Parábens você acertou com ${chute} ${palavraTentativa}`);
        break;
    } else if (numeroEscolhido > numeroSecreto) {
        alert(`Tente novamente! O número secreto é menor que ${numeroEscolhido}.`);
    } else {
        alert(`Tente novamente! O número secreto é maior que ${numeroEscolhido}`);
    }
    chute++;
}