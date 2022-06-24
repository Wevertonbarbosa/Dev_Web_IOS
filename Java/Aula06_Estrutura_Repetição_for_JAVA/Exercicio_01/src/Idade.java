import java.util.Scanner;

public class Idade {
    public static void main(String[] args) {

        //declaração das variaveis
        Scanner name = new Scanner(System.in);
        Scanner age = new Scanner(System.in);


        for (int i = 1; i < 5; i++ ) {

            System.out.println("Digite seu nome: ");
            String yourName = name.nextLine();
            System.out.println("Digite sua Idade:");
            int idade = age.nextInt();

            System.out.println("Nome: "+yourName+" Idade: "+idade);

        }


        name.close();
        age.close();


    }
    }
