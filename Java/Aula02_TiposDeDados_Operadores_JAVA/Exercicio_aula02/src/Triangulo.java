import java.util.Scanner;

public class Triangulo {
    public static void main(String[] args) {

        Scanner info = new Scanner(System.in);

        System.out.println("Escolha a altura do seu triângulo:");
        double altura = info.nextDouble();
                                    System.out.println("Escolha a base do seu triângulo:");
        double base = info.nextDouble();

        double calculo = (altura * base) / 2;
        System.out.println("Área do seu triângulo: "+ calculo);
    }
}
