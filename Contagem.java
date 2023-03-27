import java.util.Scanner;
import java.util.Arrays;

public class Contagem {

    private final double[] conjunto;

    public Contagem(int tam) {
        this.conjunto = new double[tam];
    }

    public void ler() {
        Scanner sc = new Scanner(System.in);
        try {
            int tamanho = this.conjunto.length;
            for (int i = 0; i < tamanho; i++) {
                System.out.printf("Informe o %dº elemento: ", i + 1);
                conjunto[i] = Double.parseDouble(sc.next().replace(",", "."));
            }
        } catch (Exception e) {
            System.out.println("Entrada inválida");
            sc.close();
        }
    }

    public int contarInteiros() {
        return (int) Arrays.stream(conjunto).filter(n -> n == (int) n).count();
    }
}