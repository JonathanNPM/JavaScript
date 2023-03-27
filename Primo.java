import java.util.Scanner;

class Primo {
    
    private boolean checarPrimo(int n) {
        n = Math.abs(n);
        if(n <= 1) return false;
        else if(n <= 3) return true;
        else if(n % 2 == 0 || n % 3 == 0) return false;
        int i = 5;
        while(i * i <= n) {
            if(n % i == 0 || n % (i + 2) == 0) return false;
            i += 6;
        }
        return true;
    }

    public void testar() {
        Scanner sc = new Scanner(System.in);
        try {
            System.out.print("Informe o numero a ser testado: ");
            int num = sc.nextInt();
            System.out.println(checarPrimo(num) ? "O numero " + num + " é primo." : "O número " + num + " não é primo.");
        } catch (Exception e) {
            System.out.println("Entrada Inválida");
            sc.close();
        }
    }
}
