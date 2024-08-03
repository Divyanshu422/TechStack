/*
 * Printing the arrays element:
 *              1. use the for loop
 *              2. use the Arrays class in which toString method is overridden: Arrays is the class in the Util package
 *              3. For each loop
 */

import java.util.Arrays;

class Program1 {
    public static void main(String[] args) {

        int[] arr = { 2, 5, 10, 50, 40 };
        System.out.println(Arrays.toString(arr)); // [2, 5, 10, 50, 40]

        for (int data : arr) {
            System.out.print(data + " "); // 2 5 10 50 40
        }

    }
}