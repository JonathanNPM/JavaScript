abstract class Somatorio {
    
    static int somar(int[] arr) {
        int total = 0;
        for(int i : arr) {
            total += i;
        }
        return total;
    }
}
