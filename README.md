## Assim também funciona, mas eu preferi usar o Operador Ternário junto com Template String. Achei mais prático!
	if (hor < 10) {
    hor = '0' + hor;
  } 
	if (min < 10) {
    min = '0' + min;
  } 
  if (seg < 10) {
    seg = '0' + seg;
  }  

### Encontrei esse código na internet, só que não gostei da forma como foi escrito
### tava muito confuso e aí resouvi "refatorar". Já faz algum tempo e não lembro nome do Dev que fez o algorítimo! Por isso peço desculpas!

#### As variáveis eram do tipo 'VAR' e mudei para 'LET'. Também mudei 'getElementById' para 'querySelector' e usei 'Arrow Function' no lugar de 'function()'

