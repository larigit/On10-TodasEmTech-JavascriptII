const listagemDeFrutas = [ "Uva", "Banana", "Manga", "Cajá", "Pinha", "Maçã", "Melão"];

const usuarios = [
    {user:234, name: 'Marcia', idade:40 },
    {user:235, name: 'Lorena', idade:20 },
    {user:236, name: 'Patricia', idade:24 },
    {user:237, name: 'Mariana', idade:15 },
    {user:238, name: 'Isis', idade:34 },
    {user:239, name: 'Pietra', idade:23 }
]
const primeiroElemento = listagemDeFrutas.shift();
const primeiroUsuario = usuarios.shift();

console.log(primeiroElemento);
console.log(primeiroUsuario);

var str1 = 'hello';
var str2 = 'world';
var res = `${str1} ${str2}`;

console.log(res);