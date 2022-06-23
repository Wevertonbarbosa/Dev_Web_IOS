public class Contar {
    public static void main(String[] args) {

        //Declaração da variavel contador
        int conta = 100;

        //Aplicando a condição
        while (conta <= 200) {

            System.out.print(conta + " ");
            if (conta % 30 == 0) {
                System.out.println(""); // Apenas aspas representa quebra de linha
            }
            conta ++;
        }
    }
}
