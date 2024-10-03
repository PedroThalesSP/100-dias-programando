// Source code is decompiled from a .class file using FernFlower decompiler.
// import java.util.Scanner;

// public class Main {
//    public Main() {
//    }

//    public static void main(String[] args) {
//       Scanner entrada = new Scanner(System.in);
//       System.out.println("Digite seu peso:");
//       float peso = entrada.nextFloat();
//       System.out.println("Entre com sua altura");
//       float altura = entrada.nextFloat();
//       float imc = peso / (altura * altura);
//       System.out.println("O imc \u00e9 " + imc);
//       String classificacao = "";
//       if ((double)imc > 18.5) {
//          classificacao = "magreza";
//       } else if ((double)imc > 24.9) {
//          classificacao = "normal";
//       } else if ((double)imc > 29.9) {
//          classificacao = "sobre peso";
//       } else if ((double)imc > 39.9) {
//          classificacao = "obesidade";
//       } else {
//          classificacao = "Obesidade grave";
//       }

//       System.out.println("Sua classifica\u00e7\u00e3o \u00e9 " + classificacao);
//    }
// }

import java.net.SocketOption;
import java.util.Scanner;

public class Main {
    public static void calculoIMC (float peso, float altura) {

        double [] pesosIMC = {18.5, 24.9, 29.9, 39.9,90000};
        String [] classificacoesIMC = {"magreza","Normal","Sobrepeso","Obesidade","Obesidade Grave" };

        float imc = peso / (altura * altura);
        System.out.println("O IMC é" + imc);

        int i = 0;
        while (imc > pesosIMC[i]) {i++;}

        System.out.println("A Classificação dele é: " + classificacoesIMC [i]);
    }

    public static void main(String[] args ) {
    Scanner entrada = new Scanner(System.in);
    System.out.println("Entre com o peso em Kg");
    float peso = entrada.nextFloat();
    System.out.println("Entre com a sua altura em Metros");
    float altura =  entrada.nextFloat();
    calculoIMC(peso,altura);


    }
}