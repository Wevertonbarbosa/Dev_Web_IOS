
import java.util.Scanner;

public class Nomes {
    public static void main(String[] args) {

        Scanner info = new Scanner(System.in);
        String[] names = new String[5];


        for (int i = 0; i < names.length; i++) {
            System.out.println("Digite um nome: ");
            names[i] = info.nextLine();

        }
        System.out.println(names);
    }

}
