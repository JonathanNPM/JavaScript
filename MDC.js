let a = rand(10, 500);
let b = rand(10, 500);

console.log("O MDC de "+ a +" e "+ b +" é " + mdc(a, b));

function rand(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function mdc(n1, n2) {
	return n2 === 0 ? n1 : mdc(n2, n1%n2);
}