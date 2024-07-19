/*
 * BufferedReader
 */

import java.io.BufferedReader;
import java.io.InputStreamReader;

class Program {

    public static void main(String[] args) {
        // Reading the data from the keyboard to InputStreamReader
        InputStreamReader isr = new InputStreamReader(System.in);

        // Providing data to the BufferedReader
        BufferedReader br = new BufferedReader(isr);

        /*
         * Using the method -> of bufferedReader to provide the data to the code.
         * readLine() method of BufferedReader throws an IOException, which is a checked
         * exception. Therefore, you must handle this exception either by using a
         * try-catch block or by declaring the main method with a throws IOException.
         */
        try {
            String str = br.readLine();
            System.out.println(str);
        } catch (Exception e) {
            System.out.println("Error");
        }

    }
}