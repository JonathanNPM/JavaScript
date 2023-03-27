abstract class Fibonacci {
    
    static void sequecia(int n) {
        int a = 0;
        int b = 1;
        int prox = a + b;
        System.out.print(a + " " + b);
        for(int i = 2; i < n; i++) {
            System.out.print(" " + prox);
            a = b;
            b = prox;
            prox = a + b;
        }
    }
}
