function nota(nota) {
    if (nota >= 8) {
        return 'APROVADO'
    }else{
        return 'REPROVADO'
    }
}
console.log(nota(9))

function notaRecuperacao(nota) {
    if (nota >= 8){
        return 'APROVADO'
    }
    else if (nota >= 7) {
        return 'RECUPERACAO'
    }else{
        return 'REPROVADO'
    }
}
console.log(notaRecuperacao(6))

let inline = ( 9 % 3) == 0 ? "Sim" : "Não"

// 1 ou 0 / True ou False
//<td> modelo.estaAtivo ? "Sim : "Não"</td>


console.log(inline)

let opcao = 2
let saida = "Não Encontrado"
switch (opcao) {
    case 1:
        saida = "Opção 1"
        break
    case 2:
        saida = "Opção 2"
        break
    case 3:
        saida = "Opção 3"
        break
    default:
        saida = "Padrão"
}
console.log(saida)

