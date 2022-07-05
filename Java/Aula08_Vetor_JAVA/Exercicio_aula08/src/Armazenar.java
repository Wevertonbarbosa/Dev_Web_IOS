public class Armazenar {
    public static void main(String[] args) {


        int[] number = {10, 5, 8, 9, 3, 5, 2, 6, 12, 14};
        int menor = number.length;
        int maior = number.length;
        double logica = 0;
        double media = 0;

        for (int i = 0; i < number.length; i++) {

            logica += number[i]; // condição da media

            //Condição do menor
            if (number[i] < menor) {
                menor = number[i];
                //Condição do maior
            } else if (number[i] > maior) {
                maior = number[i];
            }
        }
        media = logica / 10;// condição da media

        System.out.println("O menor número do array: " + menor + ", O maior número do array: " + maior + ", a média do array: " + media);
    }
}
