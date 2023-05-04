// length
var arr = [1,2,3,4,5];

console.log(arr.length);

// push adiciona  elementos ao array
arr.push(6);
arr.push('Qualquer coisa');

console.log(arr);

// pop remove ultimo elemento adicionado no array no final
arr.pop();

console.log(arr);

// unshift adiciona um elemento no inicio do array
arr.unshift(0);
arr.unshift('teste');

console.log(arr);

// shift remove um elmento do começo do array
arr.shift();

console.log(arr);

// acessar o último elemento
console.log(arr[arr.length - 1]);

// isArray Verifica  se é um array
console.log(Array.isArray(5));

console.log(Array.isArray(arr));
