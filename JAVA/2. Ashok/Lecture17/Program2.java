import java.io.BufferedReader;
import java.io.InputStreamReader;

class Program2 {
    public static void main(String[] args) throws Exception {
        // * Creating the instanceOf BufferedReader */
        InputStreamReader input = new InputStreamReader(System.in);
        BufferedReader reader = new BufferedReader(input);

        // * Entering the value of n
        System.out.println("Please the value of n");
        String inputString = reader.readLine();

        // * Converting to interger
        int n = Integer.parseInt(inputString);

        for (int i = 1; i <= n; i++) {
            // * For space */

            for (int k = 0; k < n - i; k++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}