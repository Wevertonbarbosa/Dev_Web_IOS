import java.util.Scanner;


public class Inteiros {
    public static void main ( String [] args ) {

        Scanner Info1 = new Scanner(System.in);
        double num1, num2, num3;

        //Pergunta ao usuário
        System.out.println ("Digite um Número:");
        num1 = Info1.nextDouble();
        System.out.println ("Digite outro Número:");
        num2 = Info1.nextDouble();
        System.out.println ("Digite outro Número:");
        num3 = Info1.nextDouble();

        //Condição para mostrar entre os três o maior e não filtra para que não haja números iguais
        if (num1 == num2 || num1 == num3) {
            System.out.println ("É necessario três números diferentes!");
        }
        else if (num1 > num2 && num1 > num3){
            System.out.println ("O número "+num1+ ", é o maior entre os 3 número digitados");

        }
        else if (num1 < num2 && num2 > num3) {
            System.out.println ("O número "+num2+ ", é o maior entre os 3 número digitados");
        }
        else {
            System.out.println ("O número "+num3+ ", é o maior entre os 3 número digitados");
        }


    }
}
