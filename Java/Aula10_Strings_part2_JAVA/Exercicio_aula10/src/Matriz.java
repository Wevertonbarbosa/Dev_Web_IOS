import java.util.Random;

public class Matriz {
    public static void main(String[] args) {

        int cem[][] = new int[100][100];
        Random gerador = new Random();
        //int num;
        for (int i = 0; i < cem.length; i++) {
            for (int j = 0; j < cem[i].length; j++) {
                cem[i][j] = gerador.nextInt(101);
                System.out.print(cem[i][j] + "\t");

                if (cem[i][j] % 2 != 0) {
                    cem[i][j] = -1;
                } else {
                    cem[i][j] = 1;
                }
            }
            System.out.println("");
        }

        for (int i = 0; i < cem.length; i++) {
            for (int j = 0; j < cem[i].length; j++) {
                if (cem[i][j] == -1)
                    System.out.print(cem[i][j] + "\t");
                else
                    System.out.print(" " + cem[i][j] + "\t");
            }
            System.out.println("");
        }
    }
}
