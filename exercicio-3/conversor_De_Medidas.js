/*Conversor de Medidas
Escreva um programa em javascript que funcione como um conversos de medidas. 
O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:
milímetro (mm)
centímetro (cm)
decímetro (dm)
decâmetro (dam)
hectômetro (hm)
quilômetro (km)
O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.
O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso)*/


const valor = parseFloat(prompt("Informe o valor em metros: "))

const conversor = parseFloat(prompt("Em qual medida deseja converter? \nAs opções são: \n1. Milímetro (mm) \n2. Centímetro (cm) \n3. Decímetro (dm)\n4. Decâmetro (dam)\n5. Hectômetro (hm)\n6. Quilômetro (km)"))

switch (conversor) {
    case 1:
        let mm = valor*1000
        alert(valor + " em metros é " + mm + " milímetro")
        break;
    case 2:
        let cm = valor*100
        alert(valor + " em metros é " + cm + " centímetro")
        break;
    case 3:
        let dm = valor*10
        alert(valor + " em metros é " + dm + " decímetro")
        break;
    case 4:
        let dam = valor*0.1
        alert(valor + " em metros é " + dam + "  decâmetro")
        break;
    case 5:
        let hm = valor*0.01
        alert(valor + " em metros é " + hm + "  hectômetroo")
        break;
    case 6:
        let km = valor*0.001
        alert(valor + " em metros é " + km + " quilômetro")
        break;
    default:
        alert("Opção inválida! Digite o números das opções(1,2,3,4,5 ou 6")
        break;
}