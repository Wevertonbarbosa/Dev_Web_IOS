public class Somatorio {
    public static void main(String[] args) {
        int contador = 1;
        int acumulador = 0;

        //condição para iniciar a conta do 0 a 100 com um incremento
        while (contador <= 100) {
            //Condiçao para ver se o numero é par ou não
            if (contador % 2 == 0)

                //somatório de todos os numeros pares de 0 a 100 iniciando do 0
                acumulador = acumulador + contador; // adiciona o contador par ao acumulador
            contador++; // incrementa o contador
        }
        System.out.println("A soma dos números pares de 1 a 100 é " + acumulador);
    } // fim do método main
} // fim da classe Somatorio

