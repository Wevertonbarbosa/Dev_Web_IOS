import java.util.Scanner;

public class Numeros {
    public static void main ( String [] args ) {

        //Instanciar e declara as variaveis
        Scanner Info = new Scanner(System.in);
        double num1, num2;

        //Pergunta ao Usuario
        System.out.println ("Digite um Número:");
        num1 = Info.nextDouble();
        System.out.println ("Digite outro Número:");
        num2 = Info.nextDouble();

        //Condição para validar numero descrecente

        if (num1 > num2) {
            System.out.println (num1 + "e" + num2);
        }
        else {
            System.out.println (num2 + "e" + num1);
        }

        Info.close();
    }

}
