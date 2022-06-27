import java.util.Scanner;

public class Conta {
    public static void main(String[] args) {

        Scanner info = new Scanner(System.in);

        System.out.println("Digite uma nota:");
        double nota1 = info.nextDouble();

        System.out.println("Digite uma nota:");
        double nota2 = info.nextDouble();

        System.out.println("Digite uma nota:");
        double nota3 = info.nextDouble();

        System.out.println("Digite uma nota:");
        double nota4 = info.nextDouble();

        double calculo = (nota1 + nota2 + nota3 + nota4) / 4;
        System.out.println("Sua média é: " + calculo);

    }
}
