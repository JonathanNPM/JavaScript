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

function quickSort(arr, esq, dir) {

    let i, j, pivo, aux;
    i = esq;
    j = dir - 1;
    pivo = arr[(esq + dir) >> 1];
	
    while(i <= j) {
        while(arr[i] < pivo) {
            i++;
        }
        while(arr[j] > pivo) {
            j--;
        }
        if(i <= j) {
            aux = arr[i];
            arr[i] = arr[j];
            arr[j] = aux;
			// console.log(`Trocou ${arr[i]} por ${arr[j]}`);
            i++;
            j--;
        }
    }
	
    if(esq < j) {
        quickSort(arr, esq, j + 1);
    }
    if(i < dir) {
        quickSort(arr, i, dir);
    }
}

const a = [6, 4, 2, 3, 1, 9 ,7, 9, 5];
const b = [2, 1, 2, 5, 4, 3, 4, 3];

console.log("Antes do quick sort: " + a);
a.quicksort();
console.log("Após o quick sort: " + a + "\n");

console.log("Antes do quick sort: " + b);
quickSort(b, 0, b.length);
console.log("Após o quick sort: " + b);