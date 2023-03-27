const n = 20;
const termos = [0, 1];

for(let i = 2; i < n; i++) {
	termos[i] = termos[i - 1] + termos[i - 2];
}

console.log(termos.join(", "));