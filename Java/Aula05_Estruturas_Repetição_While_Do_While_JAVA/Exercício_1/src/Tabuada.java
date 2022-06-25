import java.util.Scanner;

public class Tabuada {

    public static void main(String[] args) {


        int i = 0;

        Scanner info = new Scanner(System.in);
        System.out.println("Digite 1 número:");
        int number = info.nextInt();

        while (i < 11) {

            int cal = number * i;
            System.out.println(number + " X " + i + " = " + cal);

            i++;
        }

        info.close();
    }
}
