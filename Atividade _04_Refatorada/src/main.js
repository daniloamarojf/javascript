import { AdicionarEventoBotao } from './utilitarios/utilitarios.js';
import { CalcularParImpar } from './modulos/parImpar.js';
import { CalcularMaiorMenor } from './modulos/maiorMenor.js';
import { CalcularVelocidade } from './modulos/velocidade.js'
import { CalcularAumento } from './modulos/aumentoSalarial.js';
import { CalcularPrecoPassagem } from './modulos/passagens.js';
import { CalcularBissexto } from './modulos/anoBissexto.js';
import { VerificarTringulo } from './modulos/verificarTriangulo.js';

// Só estava carregando o botão parImpar. Para que o botão maioMenor funcionase
// foi necessário cria condições (if) só o botão maoirMenor funcionaou.
document.addEventListener('DOMContentLoaded', () => {
    console.log("Pagina carregada");

    if (document.getElementById('botao-par-impar')) {
        AdicionarEventoBotao('botao-par-impar', CalcularParImpar);
        console.log("Par ímpar carregado");
    }

    if (document.getElementById('botao-maior-menor')) {
        AdicionarEventoBotao('botao-maior-menor', CalcularMaiorMenor);
        console.log("Maior Menor carregado");
    }
    
    if (document.getElementById('botao-velocidade')) {
        AdicionarEventoBotao('botao-velocidade', CalcularVelocidade);
    }

    if (document.getElementById('botao-aumento-salarial')) {
        AdicionarEventoBotao('botao-aumento-salarial', CalcularAumento);
    }

    if (document.getElementById('botao-passagens')) {
        AdicionarEventoBotao('botao-passagens', CalcularPrecoPassagem);
    }

    if (document.getElementById('botao-ano-bissexto')) {
        AdicionarEventoBotao('botao-ano-bissexto', CalcularBissexto);
    }
    
    if (document.getElementById('botao-triangulo')) {
        AdicionarEventoBotao('botao-triangulo', VerificarTringulo);
    }
})

