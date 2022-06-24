
public class Multiplos {
    public static void main(String[] args) {


        for (int i = 0; i < 1000; i += 2) {
            System.out.print(i + " ");
            //quebrando linhas
            if (i % 40 == 0) System.out.println("");
        }

    }
}
