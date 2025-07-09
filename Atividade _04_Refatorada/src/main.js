import { AdicionarEventoBotao } from './utilitarios/utilitarios.js';
import { CalcularParImpar } from './modulos/parImpar.js';
import { CalcularMaiorMenor } from './modulos/parImpar.js';

document.addEventListener('DOMContentLoaded', () => {
    
    AdicionarEventoBotao('botao-par-impar', CalcularParImpar);
    AdicionarEventoBotao('botao-maior-menor', CalcularMaiorMenor);
})

