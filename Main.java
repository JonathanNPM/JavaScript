import java.util.Arrays;

public class Main {

    public static void main(String[] args) {

        Contagem contagem = new Contagem(10);
        contagem.ler();
        System.out.println("O numero de Inteiros foi: " + contagem.contarInteiros());

        MDC mdc = new MDC();
        mdc.ler();

        int[] nums = {5, 2, 3, 2, 9, 4, 5};

        Ordenacao.quickSort(nums, 0, nums.length);
        Arrays.stream(nums).forEach(n -> System.out.print(n + " "));
        System.out.println();

        int total = Somatorio.somar(nums);
        System.out.println("A soma dos elementos foi: " + total);

        Primo primo = new Primo();
        primo.testar();

        Fibonacci.sequecia(10);
    }
}
