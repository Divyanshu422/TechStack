/*
 *  Number is even or odd
 */

import java.io.BufferedReader;
import java.io.InputStreamReader;

class Program3 {
    public static void main(String[] args) throws Exception {
        System.out.println("Enter the number");
        InputStreamReader str = new InputStreamReader(System.in);
        BufferedReader btr = new BufferedReader(str);

        String data = btr.readLine();
        int number = Integer.parseInt(data);

        if (number % 2 == 0)
            System.out.println("Number is even");
        else
            System.out.println("Number is odd");

    }
}