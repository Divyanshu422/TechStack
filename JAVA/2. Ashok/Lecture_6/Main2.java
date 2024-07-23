/*
 *  Program to determine if a number is even or odd
 */

            import java.io.BufferedReader;
            import java.io.InputStreamReader;

            class Program3 {
                public static void main(String[] args) throws Exception {
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

                    // Check if the number is even or odd using the modulus operator
                    if (number % 2 == 0) {
                        // If the number is divisible by 2 with no remainder, it is even
                        System.out.println("Number is even");
                    } else {
                        // If there is a remainder, the number is odd
                        System.out.println("Number is odd");
                    }
                }
            }


