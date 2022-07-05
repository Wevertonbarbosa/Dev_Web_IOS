import java.util.Random;

public class Sorteio {
    public static void main(String[] args) {

        int[] sorte = new int[10];
        int menor = sorte.length;
        Random gerador = new Random();


        for (int i = 0; i < sorte.length; i++) {
            sorte[i] = gerador.nextInt(100);
            System.out.print("\t" + sorte[i]);
        }

        for (int i = 0; i < sorte.length; i++) {
            if (menor > sorte[i]) {
                menor = sorte[i];

            }
        }

        System.out.println("\n    O menor número: " + menor);

    }
}
