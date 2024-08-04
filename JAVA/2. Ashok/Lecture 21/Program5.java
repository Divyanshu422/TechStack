/*
 * Find the Unique element in the array
 */

public class Program5 {

    public static void main(String[] args) {
        int[] arr = { 2, 4, 2, 19, 5, 4 };

        for (int i = 0; i < arr.length; i++) {
            int count = 0;
            for (int j = 0; j < arr.length; j++) {
                if (arr[i] == arr[j] && i != j) {
                    count++;
                }
            }

            if (count == 0) {
                System.out.println("The element " + arr[i] + " is unique");
            }
        }
    }
}