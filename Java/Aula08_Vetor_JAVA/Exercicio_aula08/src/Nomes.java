
import java.util.Scanner;

public class Nomes {
    public static void main(String[] args) {

        Scanner info = new Scanner(System.in);
        String[] names = new String[5];

        //Armazém dos nomes
        for (int i = 0; i < names.length; i++) {
            System.out.println("Digite um nome: #" + (i + 1));
            names[i] = info.nextLine();
        }

        System.out.println("\nLista de Nomes invertido: ");
        //Invertendo a ordem da lista
        for (int i = names.length - 1; i >= 0; i--){
            System.out.println(names[i]);
        }

    }

}
