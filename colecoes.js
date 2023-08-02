//Arrays
let arr = [0,1,2,3,4,5]
let arr2 = ['uva', 'maça', 'pera']
let arr3 = ['João',40,'Casado',3, true]
//Tuplas
let tup = (0,1,2,3,4,5)
let tup2 = ('gabiroba','gavirova','guabiroba','guavirova')
let tup3 = ("João", 45, 'Casado',3, true)
//Dicionarios
let pessoa = {
    'nome' : 'João',
    'idade' : 45,
    'estado_civil' : 'Casado',
    'filhos' : 3,
    'Registrado': true
}
console.log(pessoa)

let pessoa2 = {
    nome : 'João',
    idade : 45,
    estado_civil : 'Casado',
    filhos : 3,
    Registrado : true
}
console.log(pessoa2)

let arr4 = [1,2,3,4,5,6]
console.log(arr4[3])

arr3[0] = 'Jose'
arr3[1] = 25
arr3[2] = 'Solteiro'
console.log(arr3)

//laço de repetição
//Enquanto - while

let indice = 0
let parar = true
//while (Enquanto) quando eu não sei o tamanho dos dados
//ou o resultado de uma operacao
//Ler arquivos / conectar site ou banco de dados
//preciso de um criterio de parada, senão é infinito
//Arquivo - EOF
while(indice < 10000){
    //fazer algo
    console.log(indice)
    indice++
}
//Para ou Até ou Faça - for
let arr6 = [11,22,33,44,55]
for (let index = 0; index < arr6.length; index++) {
    const element = arr6[index];
    console.log(element)
}

let arr5 = [0,1,2,3,4,5,6,7]
arr5.forEach(element => console.log(element))

const arr7 = arr6.map( x => x * 2)
console.log(arr7)

//Recaptulando
//Array = é uma coleção de dados , varios tipos, e podem
//ser alterados conforme a necessidade.
//Voce pode consultar usando o indice, a partir do 0 até
//o tamanho do array, e pode alterar tambem cada indice
//É definido pelo [] (Colchetes)

//Unidirecional = [0]
let uni = [1,2,3]
//Bidirecional = [0][0]
let bid = [
    [0,1,2],
    [0,1,3]
]
//Tridimensional = [0][0][0]
let tri = [
    [
        [0,1,2],
        [0,1,3]
    ],
    [
        [0,1,2],
        [0,1,3]
    ]
]

//Array vazio
let vazio = []

vazio.push(1)//0
vazio.push(2)//1
vazio.push(3)//2
vazio.push(5)//3
vazio.push(7)//4
vazio.push(11)//5

console.log(vazio)

vazio.pop()//Remove o ultimo elemento

console.log(vazio)

vazio.shift()//Remove o primeiro elemento

console.log(vazio)

let p1 = {nome: 'Maria', idade: 45, estado_civil: 'Casada'}
let p2 = {nome: 'Ana', idade: 40, estado_civil: 'Casada'}
let p3 = {nome: 'Paula', idade: 20, estado_civil: 'Solteira'}
//quando eu quero acessar o atributo eu pego a variavel e
//chamo pelo nome
console.log(p2.nome)

let lista = [p1, p2, p3]
console.log(lista)
//Remover por indice e total de registros apos este indice
lista.splice(1,1)
console.log(lista)

const nomes = lista.map(p => p.nome)
console.log(nomes)

