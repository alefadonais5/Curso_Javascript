const primeiroNome = prompt("Nome: ")
const sobreNome = prompt("Sobrenome: ")
const campo_De_Estudo = prompt ("Qual a sua atuação")
const ano_De_Nascimento = prompt("Ano de Nascimento")

alert (
    "Recruta cadastrado com sucesso! \n" +
    "\n Nome Completo: " + primeiroNome + " " + sobreNome +
    "\n Campo de estudo: " + campo_De_Estudo +
    "\n Idade: " + (2023 - ano_De_Nascimento) 
)