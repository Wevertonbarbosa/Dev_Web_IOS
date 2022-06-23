public class Decremento {
    public static void main(String[] args) {
        int contador = 100; // Declara e inicializa o contador

        //No incremento o contador é menor e o numero maior
        //No decremento o contador é maior e o numero menor
        while (contador > 0) {
          System.out.print(contador + " ");

          //Uma condição para deixar mais visivel/organizado será contado de 30 em 30 na linha.
          if (contador % 30 == 0) System.out.println(""); // Quebra de linha para ver todos os números
         contador--; // mesma coisa que utilizar contador = contador - 1
          }
         } // fim do método main
 } // fim da classe Decremento

