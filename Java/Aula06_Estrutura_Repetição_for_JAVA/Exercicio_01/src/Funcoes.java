import java.util.Scanner;

import static java.lang.Math.sqrt;

public class Funcoes {

    public static void main(String[] args) {

        Scanner info = new Scanner(System.in);
        int fluxo = 1;
        int number;


        System.out.println("Digite um número: ");
        number = info.nextInt();
        int mult = 1;

        while (fluxo <= 10) {

            //multilicação
            int tab = number * mult;
            System.out.println(number + " X " + mult + " = " + tab);
            fluxo++;
            mult++;

        }

        //Raiz Quadrada
        System.out.println("====Raiz Quadrada====");
        System.out.println(sqrt(number));

        //Par ou Impar
        System.out.println("====Par OU Impar====");
        if (number % 2 == 0) {
            System.out.println("Seu Número " +number+ ", Par");
        }
        else {
            System.out.println("Seu Número " +number+ ", Impar");
        }

            info.close();
    }


}
