console.log('bobbyhadz.com');

// TypeError: getElementById is not a function in JavaScript

// ✅ correct
const btn = document.getElementById('btn');
console.log(btn);

// Using document.querySelector instead
const btn2 = document.querySelector('#btn');
console.log(btn2);
