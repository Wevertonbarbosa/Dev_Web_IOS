import java.util.Scanner;

public class Vetores {
    public static void main(String[] args) {

        int vetorA[] = new int[4];
        int vetorB[] = new int[7];
        int vetor[] = new int[11];



        Scanner info = new Scanner(System.in);

        for (int i = 0; i < vetorA.length; i++) {
            System.out.println("Digite um número #" + (i + 1));
            vetorA[i] = info.nextInt();


        }

        for (int i = 0; i < vetorB.length; i++) {
            System.out.println("Digite um número #" + (i + 1));
            vetorB[i] = info.nextInt();

        }


        for (int i = 0; i < vetor.length; i++) {
            System.out.println("1°Lista" );

        }


    }


}
