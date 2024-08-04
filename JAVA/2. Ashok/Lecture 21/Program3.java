/*
 * Pair sum in array: [3, 5, 1, 6, 2, 7, 9]
 */

class Program3 {
    public static void main(String[] args) {
        int[] arr = { 3, 5, 1, 6, 2, 7, 9 };
        int target = 8;

        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] + arr[j] == target) {
                    System.out.println("Pair found: " + arr[i] + " and " + arr[j]);
                }
            }
        }
    }
}