public class Diagonal {
    public static void main(String[] args) {

        int tabela [][] = {{1,0,0,0,0}, {0,1,0,0,0}, {0,0,1,0,0}, {0,0,0,1,0}, {0,0,0,0,1}};

        for (int i = 0; i < tabela.length; i++) {
            for (int j = 0; j < tabela[i].length; j++){
                System.out.print(tabela[i][j] + "\t");
            }
            System.out.println("");
        }


    }


}
