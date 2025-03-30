const jogador1 = {nome:"Edvaldo", energia:100, vidas:3}
const jogador2 = {nome:"bruno", energia:100, vidas:5}
const jogador3 = {...jogador1,...jogador2}

console.log(jogador3)