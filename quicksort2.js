const a = [6, 4, 2, 3, 1, 9 ,7, 9, 5];
const b = [1, 2, 2, 5, 4, 3, 4, 3];

function troca(arr, a, b) {
	let aux = arr[a];
	arr[a] = arr[b];
	arr[b] = aux;
}

function particao(arr, esq, dir) {
	let pivo = arr[(esq + dir) >> 1],
		i = esq,
		j = dir;
		
	while(i <= j) {
		while(arr[i] < pivo) {
			i++;
		}
		while(arr[j] > pivo) {
			j--;
		}
		if(i <= j) {
			troca(arr, i, j);
			console.log(`Trocou ${arr[i]} por ${arr[j]}`);
			i++;
			j--;
		}
	}
	return i;
}

function quicksort(arr, esq, dir) {
	let index;
	if (arr.length > 1) {
		index = particao(arr, esq, dir);
		if(esq < index - 1) {
			quicksort(arr, esq, index - 1);
		}
		if(index < dir) {
			quicksort(arr, index, dir);
		}
	}
	return arr;
}

console.log(quicksort(a, 0, a.length - 1));
console.log(quicksort(b, 0, b.length - 1));