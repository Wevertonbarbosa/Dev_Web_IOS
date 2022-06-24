import java.util.Scanner;

public class Idade {
    public static void main(String[] args) {

        //declaração das variaveis
        Scanner info = new Scanner(System.in);

        //Condição
        for (int i = 1; i < 5; i++ ) {

            System.out.println("Digite seu nome: ");
            String yourName = info.nextLine();
            System.out.println("Digite sua Idade:");
            int idade = info.nextInt();

            System.out.println("Nome: "+yourName+" Idade: "+idade);

        }


        info.close();



    }
    }
