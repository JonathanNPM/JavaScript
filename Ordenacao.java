abstract class Ordenacao {
    
    static void quickSort(int[] nums, int inicio, int fim) {
        int i, j, pivo, aux;
        i = inicio;
        j = fim - 1;
        pivo = nums[(inicio + fim) / 2];
        while(i <= j) {
            while(nums[i] < pivo) {
                i++;
            }
            while(nums[j] > pivo) {
                j--;
            }
            if(i <= j) {
                aux = nums[i];
                nums[i] = nums[j];
                nums[j] = aux;
                i++;
                j--;
            }
        }
        if(inicio < j) {
            quickSort(nums, inicio, j + 1);
        }
        if(i < fim) {
            quickSort(nums, i, fim);
        }
    }
}
