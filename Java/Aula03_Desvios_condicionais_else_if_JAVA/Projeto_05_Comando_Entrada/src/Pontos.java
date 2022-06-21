import java.util.Scanner;

public class Pontos {
    public static void main(String[] args) {

        //Declara as Variáveis
        int jogador;
        Scanner infoPontos = new Scanner(System.in);

        //Primeira Pergunta
        System.out.println("Digite sua Pontuação ");
        jogador = infoPontos.nextInt();

        //Condição
        if (jogador >= 1000){
            System.out.println("Você passou para próxima fase!");
        }

        infoPontos.close();

    }
}
