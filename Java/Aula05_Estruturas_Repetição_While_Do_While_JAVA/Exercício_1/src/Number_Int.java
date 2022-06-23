import java.util.Scanner;

public class Number_Int {
    public static void main(String[] args) {

        //Declaração das Variaveis
        //int number = 0;
        int par = 0, impar = 0, conta = 1;


        //Pergunta para o Usuário, declaração Scanner.
        Scanner info = new Scanner(System.in);

        //Aplicação da Condição
        while (conta <= 10) {

            System.out.println("Digite 10 números:");
            int recebeValue = info.nextInt();

            if ( recebeValue % 2 == 0 ) {
                System.out.println ("Esse número é par "+conta);
                par ++;
            }
            else {
                System.out.println ("Esse número é Impar "+conta);
                impar ++;
            }
            System.out.println("Todos os números Pares: "+ par +" Todos os números Impar: "+ impar);

            conta ++;
        }



    }
}
