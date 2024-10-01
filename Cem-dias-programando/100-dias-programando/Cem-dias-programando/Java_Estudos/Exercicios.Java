// Source code is decompiled from a .class file using FernFlower decompiler.
import java.util.Scanner;

public class Main {
   public Main() {
   }

   public static void main(String[] args) {
      Scanner entrada = new Scanner(System.in);
      System.out.println("Digite seu peso:");
      float peso = entrada.nextFloat();
      System.out.println("Entre com sua altura");
      float altura = entrada.nextFloat();
      float imc = peso / (altura * altura);
      System.out.println("O imc \u00e9 " + imc);
      String classificacao = "";
      if ((double)imc > 18.5) {
         classificacao = "magreza";
      } else if ((double)imc > 24.9) {
         classificacao = "normal";
      } else if ((double)imc > 29.9) {
         classificacao = "sobre peso";
      } else if ((double)imc > 39.9) {
         classificacao = "obesidade";
      } else {
         classificacao = "Obesidade grave";
      }

      System.out.println("Sua classifica\u00e7\u00e3o \u00e9 " + classificacao);
   }
}