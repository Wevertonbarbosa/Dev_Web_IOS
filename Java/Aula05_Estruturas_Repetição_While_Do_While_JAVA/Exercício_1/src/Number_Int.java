import java.util.Scanner;

public class Number_Int {
    public static void main(String[] args) {

        //Declaração das Variaveis
        int  fluxo = 1, parImpar = 0;


        //declaração variaveis pares e impares
        int par = 0, impar = 0;

        //Aplicação da Condição
        while (fluxo <= 10) {

            Scanner info = new Scanner(System.in);
            System.out.println("Digite 1 números:");
            parImpar = info.nextInt();

            if ( parImpar % 2 == 0 ) {
                par++;
                System.out.println("Todos os números Pares: "+par);
            }
            else {
                impar++;
                System.out.println("Todos os números Impar: "+impar);
            }
            fluxo++;
        }

    }
}
