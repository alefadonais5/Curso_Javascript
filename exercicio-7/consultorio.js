let fila = []
let opcao = ""

do {
    let pacientes = ""
    for (let i = 0; i < fila.length; i++){
        pacientes += (i + 1) + "º - " + fila[i] + "\n"
    }
    
    opcao = prompt(
        "Pacientes:\n" + pacientes + 
        "\n Escola uma ação:\n 1. Novo paciente\n2. Consultar paciente\n3. Sair"
    )

    switch (opcao){
        case "1":
            const novoPaciente = prompt("Qual o nome do paciente?")
            fila.push(novoPaciente)
            break
        case "2":
            const pacienteCosultado = fila.shift()
            if (pacienteCosultado){
                alert(pacienteCosultado + " foi removido da fila.")
            }else{
                alert("Não há paciente na fila! ")
            }
            break
        case "3":
            alert("Encerrando.....")
            break
        default:
            alert("Opção inválida")
    }

} while (opcao !== "3")