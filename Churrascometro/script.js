let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

let calc = document.getElementById("calc");

calc.addEventListener("click",exc);

// essa é a func do click
function exc(){

            let adultos = inputAdultos.value
            let criancas = inputCriancas.value
            let duracao = inputDuracao.value
            if(adultos >=0 && criancas >=0 && duracao >0){
                let meat = carne(duracao);
                let drink = bebida(duracao);
                
                let qtdCarne = meat*adultos + meat/2*criancas;
                let qtdBebida = drink*adultos + drink/2*criancas;
    
                
                resultado.innerHTML= `<p>${qtdCarne/1000} Kg de Carne</p>`;
                resultado.innerHTML+= `<p>${qtdBebida/1000} L de Refrigerante/Água</p>`;

            }
            else{
                resultado.innerHTML=`<p>Valores Inválidos</p>`
            }
        
            function carne(duracao){
                if(duracao >= 6){
                    return 650;
                }
                else{
                    return 400;
                }
            }
            function bebida(duracao){
                if(duracao >= 6){
                    return 1500;
                }
                else{
                    return 1200;
                }
            }// ao clickar no botao
        }
   


