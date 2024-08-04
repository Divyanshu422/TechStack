/*
 * 2 dimensional array and printing the data:
 * The Arrays.toString() method in Java is used to convert arrays to their string representation. However, 
 * when applied to a two-dimensional array, it does not provide a meaningful output. Instead, it treats the 
 * two-dimensional array as an array of arrays and calls the toString() method on each inner array, 
 * resulting in a string representation that includes the memory addresses of those arrays rather than their 
 * contents.

 */

import java.util.Arrays;

class Program6 {
    public static void main(String[] args) {
        int[][] arr = new int[3][3];
        arr[0][0] = 10;
        arr[0][1] = 20;
        arr[0][2] = 30;
        arr[1][0] = 40;
        arr[1][1] = 50;
        arr[1][2] = 60;
        arr[2][0] = 70;
        arr[2][1] = 80;
        arr[2][2] = 90;

        System.out.println(Arrays.toString(arr)); // * [[I@7344699f, [I@6b95977, [I@7e9e5f8a] */

        /*
         * Using the for each loop to print the element of the array.
         * the each element in the arr => is the subArray. hence data is
         * present in the subArray
         */
        for (int[] subArray : arr) {
            for (int data : subArray) {
                System.out.print(data + " ");
            }
        }
    }
}