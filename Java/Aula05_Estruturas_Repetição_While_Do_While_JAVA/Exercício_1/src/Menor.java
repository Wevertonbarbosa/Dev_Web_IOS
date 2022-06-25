import java.util.Scanner;

public class Menor {
    public static void main(String[] args) {

        Scanner info = new Scanner(System.in);

        int i = 1;
        int number = 99999;

        do {

            System.out.println("Digite um Número #" + i);

            int digitadoValue = info.nextInt();
            boolean logica = digitadoValue < number;//logica

            if (logica) {
                number = digitadoValue;
            }

            i++;

        }
        while (i < 11);

        System.out.println("Número menor " + number);

        info.close();

    }
}
