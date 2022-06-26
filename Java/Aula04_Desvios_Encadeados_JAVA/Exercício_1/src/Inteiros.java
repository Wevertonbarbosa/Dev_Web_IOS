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

        //Condição para mostrar entre os três o maior e não filtra para que não haja os 3 iguais
        if (num1 == num2 || num1 == num3) {
            System.out.println ("Os Número são iguais");
        }
        else if (num1 > num2 && num1 < num3){
            System.out.println (num3+""+num1+""+num2);

        }
        else if (num1 < num2 && num1 > num3) {
            System.out.println (num2+""+num1+""+num3);
        }
        else {
            System.out.println (num1+""+num1+""+num3);
        }


    }
}
