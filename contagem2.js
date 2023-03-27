Array.prototype.quicksort = function(inicio = 0, fim = this.length) {
    let i, j, pivo, aux;
    i = inicio;
    j = fim - 1;
    pivo = this[(inicio + fim) >> 1];
    while(i <= j) {
        while(this[i] < pivo) {
            i++;
        }
        while(this[j] > pivo) {
            j--;
        }
        if(i <= j) {
            aux = this[i];
            this[i] = this[j];
            this[j] = aux;
            i++;
            j--;
        }
    }
    if(i < fim) {
        this.quicksort(i, fim);
    }
    if(inicio < j) {
        this.quicksort(inicio, j + 1);
    }
	return this;
}

const n = rand(10, 51)
const nums = new Array(n);

for(let i = 0; i < n; i++) {
	nums[i] = (rand(10, 500) / 10);
}

let cont = 0;

for(const i of nums) {
    if(i - Math.trunc(i) === 0)cont++;
}

console.log(nums.quicksort());
console.log(`numeros inteiros: ${cont}`);

function rand(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}