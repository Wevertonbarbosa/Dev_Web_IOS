public class Contador {
    public static void main(String[] args) {

        int contador; // declarando o contador
        contador = 1; // inicializando o contador

        //condição com While
        while (contador <= 100) {
            System.out.print(contador + " ");
            //Condição simples para quebrar a linha de 30 em 30
            if (contador % 30 == 0) System.out.println(""); // Quebra de linha para ver todos os números
            contador++; // mesma coisa que utilizar contador = contador + 1
        }
    } // fim do método main
} // fim da classe Contador

