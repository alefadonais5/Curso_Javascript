let saldo = parseFloat(prompt("Qual a quantidade de dinheiro disponível?"))


do {
    let menu = prompt("Menu Interativo: \n" +
    "1. Adicionar \n" +
    "2. Remover \n" +
    "3. Encerrar \n" +
    
    "\nSaldo da conta R$ " + saldo + ".") 
    
    if (menu === "1"){
        let adicionar = parseFloat(prompt("Digite o valor que deseja adicionar?"))
        saldo =+ adicionar  
    } else if (menu === "2"){
        let remover = parseFloat(prompt("Digite o valor que deseja remover?"))
        saldo =- remover
    } else {
        alert("Programa encerrado")
    }
}while (menu <= "3")