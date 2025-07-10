import { ValidarEntrada } from "../utilitarios/utilitarios.js";
    
export function VerificarTringulo () {

    const medida1 = ValidarEntrada('medida1', 'resultado');
    const medida2 = ValidarEntrada('medida2', 'resultado');
    const medida3 = ValidarEntrada('medida3', 'resultado');

    if (medida1 === null || medida2 === null || medida3 === null) {
        return;
    } 

    if (medida1 + medida2 > medida3 &&
        medida1 + medida3 > medida2 && 
        medida2 + medida3 > medida1) {
        resultado.innerHTML = `As medidas ${medida1}, ${medida2} e ${medida3} formam um trinagulo.`;
        explicacao.innerHTML = "Pois a soma de dois segmentos é maior que o terceiro."
        } else {
        resultado.innerHTML = `As medidas ${medida1}, ${medida2} e ${medida3} NÃO formam um trinagulo.`;
        explicacao.innerHTML = "Pois a soma de dois segmentos NÃO é maior que o terceiro."
        }
}


