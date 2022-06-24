import java.util.Scanner;

public class Media {
    public static void main(String[] args) {

        //Instancia da classe e declaração das variaveis
        Scanner info = new Scanner(System.in);

        double portugues, math, ciencia, filosofia, historia, ingles, fisica, artes;

        //Pergunta ao Usuário
        System.out.println("Nota em Lingua Portuguêsa?");
        portugues = info.nextDouble();

        System.out.println("Nota em Matemática?");
        math = info.nextDouble();

        System.out.println("Nota em Ciência?");
        ciencia = info.nextDouble();

        System.out.println("Nota em filosofia?");
        filosofia = info.nextDouble();

        System.out.println("Nota em Historia?");
        historia = info.nextDouble();

        System.out.println("Nota em inglês?");
        ingles = info.nextDouble();

        System.out.println("Nota em Fisíca?");
        fisica = info.nextDouble();

        System.out.println("Nota em Arte?");
        artes = info.nextDouble();

        double resultado = (portugues + math + ciencia + filosofia + historia + ingles + fisica + artes) / 8;

        if (resultado >= 8) {
            System.out.println("Sua Média é: " + resultado + ", Aprovado.");
        }
        else {
            System.out.println("Sua Média é: " + resultado+ ", Reprovado");
        }

    info.close();
    }
}
