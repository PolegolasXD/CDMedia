function resultado() {
var media

var nota1 = Number(document.getElementById('nota1').value)
var nota2 = Number(document.getElementById('nota2').value)
var nota3 = Number(document.getElementById('nota3').value)
var nota4 = Number(document.getElementById('nota4').value)

media = ((nota1 + nota2 + nota3 + nota4)/4).toFixed(1)

if (media > 6) {
     var x = document.getElementsByClassName("resposta");
  x [0].innerHTML = media = `Parabéns, você foi aprovado. Sua media foi ${media}!`;
  }
      else {
  var y = document.getElementsByClassName("resposta");
  y [0].innerHTML = media =`Infelizmente voce foi reprovado, Sua media foi ${media}!`;
      }
}
//isso é um comnetário ><
//Revisão
//variáveis, strings, console.log, toFixed, operações, matemáticas, concatenação, console.

/*------------------------------------------------------------------------------*/
//guilherme
/* var notaSomada = notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoterceiroBimestre + notaDoQuartoBimestre

var notaFinal = notaSomada / 4 */

/*-------------------------------------------------------------------------------*/

/*Desafio do Paulo Silveira 
 var notaFinal


console.log("Bem vindo " + nome)
console.log(notaFinal = ((notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoterceiroBimestre + notaDoQuartoBimestre)/4).toFixed(1))*/