package com.br.aluno;

import java.util.Scanner;

public class Banco {
    public static void main(String[] args) {

        Scanner info = new Scanner(System.in);
        System.out.println("==== Banco Next ====");
        Boolean logica = true;

        do {

            System.out.println("1 - Conta corrente ");
            System.out.println("2 - Conta poupança");
            System.out.println("3 - Conta estudante");
            int opcao = info.nextInt();


            switch (opcao) {
                case 1:
                    System.out.println("Você selecionou a Conta Corrente, Você está no Banco Next");
                    break;

                case 2:
                    System.out.println("Você selecionou a Conta Poupança, Você está no Banco Next");
                    break;

                case 3:
                    System.out.println("Você selecionou a Conta Estudante, Você está no Banco Next");
                    break;

                default:
                    System.out.println("Insira um número de 1 a 3.");

            }

            System.out.println("Deseja refazer a operação e escolher outra conta, sim ou não ?");
            String letra = info.nextLine();

            if (letra == "s" || letra == "S") {
                logica = true;
            } else {
                logica = false;
            }

        }
        while (logica == true);

    }
}
