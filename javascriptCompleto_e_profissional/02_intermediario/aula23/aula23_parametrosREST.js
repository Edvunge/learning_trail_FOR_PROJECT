function soma(...valores){
    let tam = valores.length
    let res = 0

    for(let i = 0; i < tam; i++){
        res += valores[i]
    }
    return valores.length
}

console.log(soma(10,5, 2))