import java.util.Arrays;
import java.util.Scanner;


public class Vetores {
    public static void main(String[] args) {

        int vetorA[] = new int[4];
        int vetorB[] = new int[7];
        int vetorC[] = new int[vetorA.length + vetorB.length];
        Scanner info = new Scanner(System.in);


        for (int i = 0; i < vetorA.length; i++) {
            System.out.println("Digite um número #" + (i + 1));
            vetorA[i] = info.nextInt();


        }

        for (int i = 0; i < vetorB.length; i++) {
            System.out.println("Digite um número #" + (i + 1));
            vetorB[i] = info.nextInt();

        }

        int count = 0;

        for (int indice : vetorA) {
            vetorC[count] = indice;
            count++;
        }

        for (int indice : vetorB) {
            vetorC[count] = indice;
            count++;
        }

        for (int c = 0; c < vetorC.length; c++) {
            System.out.println(vetorC[c]);
        }


    }


}
