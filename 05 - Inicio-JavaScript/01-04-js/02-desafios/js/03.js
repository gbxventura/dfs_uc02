// 3. Escreva um programa em JavaScript que solicite um número ao usuário e exiba os números pares entre 1 e o número informado. Utilize uma estrutura de repetição while ou for para verificar se cada número entre 1 e o número informado é par, e exibir os números pares encontrados no console.
n1 = parseInt(prompt("Digite um número: "));
for(let i = 1; i <= n1; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

