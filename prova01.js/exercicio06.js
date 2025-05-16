let caixas = [3, 7, 1, 2, 1];
let totalAnimais = 0;

for (let i = 0; i < caixas.length; i++){
    totalAnimais= totalAnimais + caixas[i];
}

console.log("Total de animais:", totalAnimais)

if (totalAnimais > 20){
    console.log("Estoque cheio");
} else {
    console.log("Ainda cabe mais!");
}