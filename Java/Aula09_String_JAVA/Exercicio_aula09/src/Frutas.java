import java.util.Scanner;

public class Frutas {
    public static void main(String[] args) {

        Scanner info = new Scanner(System.in);

        String[] todos = new String[5];
        //Pergunta ao Usuário
        for (int i = 0; i < todos.length; i++) {
            System.out.println("Digite uma fruta " + (i + 1) + ":");
            todos[i] = info.next();
        }
        System.out.println("");
        //Verificação se está vazio
        for (int i = 0; i < todos.length; i++) {
            System.out.println("Há Strings vazias? " + todos[i].isEmpty());

        }
        System.out.println("");
        //Tamanho da String
        for (int i = 0; i < todos.length; i++) {
            System.out.println("Tamanho de String: " + todos[i].length());

            if (todos[i].length() < 3) {
                System.out.println("Tamanho da String Inválida");
            }
        }
        System.out.println("");
        //Comparação de String
        for (int i = 0; i < todos.length; i++) {
            System.out.println("Compração de Strings  " + todos[i].compareTo(todos[2]));
        }
        System.out.println("");
        //ToUpperCase
        for (int i = 0; i < todos.length; i++) {
            System.out.println("Compração em ToUpperCase \n " + todos[i] + " == " + todos[i].toUpperCase());
        }
        System.out.println("");
        //Método Trim
        for (int i = 0; i < todos.length; i++) {
            System.out.println("Eliminando os caracteres em branco" + todos[i].trim());
        }
        System.out.println("");
        // Replace
        for (int i = 0; i < todos.length; i++) {
            System.out.println("Alterando o conteúdo, tudo minúsculo: " + todos[i].replace(todos[i], todos[i].toLowerCase()));
        }
        System.out.println("");
        //Lista Completa
        for (int i = 0; i < todos.length; i++) {
            System.out.println(todos[i]);
        }
    }
}
