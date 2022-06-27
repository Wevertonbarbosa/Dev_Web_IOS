import java.util.Scanner;

public class Estacoes {
    public static void main(String[] args) {

        Scanner info = new Scanner(System.in);

        System.out.println("Digite um mês e saiba a estação do mês:");
        String mes = info.nextLine();

        switch (mes.toLowerCase()) {
            case "janeiro", "feveiro", "março":
                System.out.println("em " + mes + ", é Verão.");
                break;

            case "abril", "maio", "junho":
                System.out.println("em " + mes + ", é Outono.");
                break;

            case "julho", "agosto", "setembro":
                System.out.println("em " + mes + ", é Inverno.");
                break;

            case "outubro", "novembro", "dezembro":
                System.out.println("em " + mes + ", é Primavera.");
                break;

            default:
                System.out.println("Insira uma informação válida");
                break;
        }

        info.close();

    }


}
