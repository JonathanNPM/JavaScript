const n = rand(10, 51)
const nums = new Array(n);

for(let i = 0; i < n; i++) {
	nums[i] = (rand(10, 500) / 10);
}

let cont = 0;

for(const i of nums) {
    if(i - Math.trunc(i) === 0)cont++;
}

console.log(nums);
console.log(`numeros inteiros: ${cont}`);

function rand(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}