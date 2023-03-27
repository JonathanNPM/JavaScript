import java.util.Scanner;

public class MDC {
    
    
    private int calcular(int n1, int n2) {
        return n2 == 0 ? n1 : calcular(n2, n1 % n2);
    }
    public void ler() {
        Scanner sc = new Scanner(System.in);
        try {
            System.out.print("Informe o primeiro numero: ");
            int a = sc.nextInt();
            System.out.print("Informe o segundo numero: ");
            int b = sc.nextInt();
            System.out.printf("O MDC de %d e %d é: %d\n", a, b, calcular(a, b));
        } catch (Exception e) {
            System.out.println();
            System.out.println("Entrada invalida");
            sc.close();
        }
    }
}
