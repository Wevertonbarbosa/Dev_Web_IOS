import java.util.Scanner;

public class Maiores10 {
    public static void main(String[] args) {


        int sequencia[][] = new int[4][4];
        Scanner info = new Scanner(System.in);
        int conta = 0;

        //Condição para percorrer o array e Perguntar para o Usuário
        for (int i = 0; i < sequencia.length; i++) {
            for (int j = 0; j < sequencia[i].length; j++) {
                System.out.println("Digite um número para a posição [" + i + "][" + j + "]: ");
                sequencia[i][j] = info.nextInt();
            }

        }

        //Tabela da sequencia digitada
        for (int i = 0; i < sequencia.length; i++) {
            for (int j = 0; j < sequencia[i].length; j++) {
                System.out.print(sequencia[i][j] + "\t");// Print segue na linha reta...
            }
            System.out.println("");//Println pula a linha/quebra a linha

        }


        //Condição maiores do que 10.
        for (int i = 0; i < sequencia.length; i++) {
            for (int j = 0; j < sequencia[i].length; j++) {
                if (sequencia[i][j] > 10) {
                    conta++;
                }
            }
        }
        System.out.println("Quantidade de Números maiores do que 10 são: " + conta);

        info.close();
    }
}
