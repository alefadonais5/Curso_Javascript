// inicialização ; condição ; finalização

//for (let indice = 0; indice <= 10; indice++) {
//    alert("Índice = " + indice)   
//}


//opção 1

//let indice = 0

//for (alert("Inicialização o for"); indice <= 10; alert("Finalizando o for"))  {
//    alert("Índice = " + indice)  
//    indice++
//}


//opção 3

//let indice = 0 
//for (alert("Inicialização o for"); indice <= 3;)  {
//    alert("Índice = " + indice)  
//    indice++
//}


//opção 4

//let indice = 0 

//for ( ; indice <= 3;)  {
//    alert("Índice = " + indice)  
//    indice++
//}

//let indice = 0 

//for ( ; ;)  {
//    alert("Índice = " + indice)  
//    break
//    indice++
//}


let nome = "Alef Adonais" // tamanho 11 -> 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

for (let i = 0; i < nome.length; i++)  {
    console.log(nome[i])
}