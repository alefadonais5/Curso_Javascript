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

const conversor = prompt("Em qual medida deseja converter? \nAs opções são: \n1. Milímetro (mm) \n2. Centímetro (cm) \n3. Decímetro (dm) \n 4. Decâmetro (dam) \n 5. Hectômetro (hm)\n 6. Quilômetro (km)")