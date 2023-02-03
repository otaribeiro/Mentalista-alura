var jogar = prompt('Quer jogar?(sim/não)');
if(jogar == 'sim'){
  
  var numeroSecreto = parseInt(Math.random() * (101 - 1) + 1);
  var iterador = 0;
  console.log(numeroSecreto);
  
  while(chute != numeroSecreto){
    
    if(iterador != 0){
      alert('Você já fez ' + iterador + ' tentativas!')
    }
    
    var chute = prompt('Digite um número entre 1 e 100');
    
    if (chute == numeroSecreto){
      alert('Acertou!');
    } else if (chute > numeroSecreto){
         alert('O número secreto é menor que ' + chute);
    } else if (chute < numeroSecreto){
         alert('O número secreto é maior que ' + chute);
    }
    
    iterador += 1;
  }
}