/*
 * 2 dimensional array and printing the data
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

        System.out.println(Arrays.toString(arr));
    }
}