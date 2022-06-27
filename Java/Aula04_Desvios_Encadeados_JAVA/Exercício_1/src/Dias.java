import java.util.Scanner;

public class Dias {

    public static void main(String[] args) {

        Scanner info = new Scanner(System.in);


        for (int i = 1; i < 7; i++){

            System.out.println("Digite um número da semana de 1 até 7:");
            int number = info.nextInt();

        switch (number) {

            case 1:
                System.out.println("Domingo");
                break;

            case 2:
                System.out.println("Segunda-Feira");
                break;

            case 3:
                System.out.println("Terça-Feira");
                break;

            case 4:
                System.out.println("Quarta-Feira");
                break;

            case 5:
                System.out.println("Quinta-Feira");
                break;

            case 6:
                System.out.println("Sexta-Feira");
                break;

            case 7:
                System.out.println("Sábado");
                break;

            default:
                System.out.println("Valor não reconhecido");

        }}

        info.close();

    }
}
