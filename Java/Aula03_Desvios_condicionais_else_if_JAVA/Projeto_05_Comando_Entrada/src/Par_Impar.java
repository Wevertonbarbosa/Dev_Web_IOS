

import java.util.Scanner;

public class Par_Impar {

    public static void main(String[] args) {

        //Declaração de variavel e instanciamento do Objeto Scanner
        Scanner Label = new Scanner(System.in);
        int InfoNumber;

        //Pergunta para o usuário
        System.out.println("Digite um Número");
        InfoNumber = Label.nextInt();

        //Aplicação da Condição
        if (InfoNumber % 2 == 0) {
            System.out.println("Seu número: " + InfoNumber + ", ele é Par");
        }
        else {

            System.out.println("Seu número: " + InfoNumber + ", ele é Impar");

        }

    Label.close();

    }

}
