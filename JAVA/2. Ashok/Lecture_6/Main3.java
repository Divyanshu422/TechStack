/*
    * [Prime code]
    * The loop checks divisors up to number / 2. The correct range should be up to the square root of the
    * number because if a number is divisible by any integer greater than its square root, the 
    * corresponding divisor will be less than the square root.
*/

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

class Program4 {
    public static void main(String[] args) throws IOException {
        // Prompt the user to enter a number
        System.out.println("Enter the number");

        // Create an InputStreamReader object to read input from the console
        InputStreamReader str = new InputStreamReader(System.in);
        // Wrap the InputStreamReader with a BufferedReader for efficient reading
        BufferedReader btr = new BufferedReader(str);

        // Read the input from the user as a string
        String data = btr.readLine();
        // Convert the string input to an integer
        int number = Integer.parseInt(data);
        // Check if the number is prime
        if (number == 2)
            System.out.println("The number is prime");
        else {
            for (int i = 2; i < Math.sqrt(number) / 2; i++) {
                if (number % i == 0) {
                    System.out.println("The number entered is not prime");
                    break;
                }
            }
            System.out.println("The number entered is  prime");
        }
    }
}
