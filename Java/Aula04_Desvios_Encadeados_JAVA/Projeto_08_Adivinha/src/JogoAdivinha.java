import java.util.Scanner; // Import necessário para utilizar a classe

public class JogoAdivinha {
    public static void main(String[] args) {

        // Intância do objeto (buffer) utilizando a classe Scanner
        Scanner entrada = new Scanner(System.in);
        int palpite;
        //Pergunta para o Usuario
        System.out.println("Digite seu palpite:");
        palpite = entrada.nextInt();
        
        //condição do palpite
        if (palpite == 15) {
            System.out.println("Você acertou!!!");
        } else {
            if (palpite < 15) {
                System.out.println("Seu palpite está abaixo !!!");
            } else {
                System.out.println("Seu palpite está acima.");
            }
        }
        entrada.close();
    } // fim do método main

} // Fim da Classe JogoAdivinha
