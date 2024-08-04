/*
 * 2 Pointer approach for solving the pair sum 
 */

import java.util.Arrays;

class Program4 {
    public static void main(String[] args) {
        int[] arr = { 3, 5, 1, 6, 2, 7, 9 };
        int target = 8;

        Arrays.sort(arr);
        int left = 0;
        int right = arr.length - 1;

        while (left < right) {
            if (arr[left] + arr[right] == target) {
                System.out.println("Pair found: " + arr[left] + " and " + arr[right]);
                break;
            } else if (arr[left] + arr[right] < target) {
                left++;
            } else {
                right--;
            }
        }
    }
}