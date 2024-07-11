/*
 * Youtube video:
 * https://www.youtube.com/watch?v=ZLDwskEhIFg&ab_channel=ApnaCollege
 * 
 * StringBuilder:
 * 1. Intro: StringBuilder is a mutable sequence of characters. StringBuilder
 * allows you to modify the content without creating new objects making it more
 * efficient for certain operations that involve frequent modifications to
 * strings.
 */

class Main1 {
    public static void main(String[] args) {

        // Declaring the StringBuilder
        StringBuilder sb = new StringBuilder("Divyanshu");
        System.out.println(sb);

        // char at index 5
        System.out.println(sb.charAt(5)); // n

        // Setting the character at index
        sb.setCharAt(5, 'm');
        System.out.println(sb); // Divyamshu

        // inserting the character at a index
        sb.insert(0, 'T');
        System.out.println(sb); // TDivyamshu

        // Deleting the character at a index
        sb.delete(0, 1); // (Index, length)
        System.out.println(sb); // Divyamshu

        // Appending the String
        sb.append(" Tyagi ");
        System.out.println(sb); // Divyamshu Tyagi

        // Length of stringbuilder
        System.out.println(sb.length()); // 16

        System.out.println();
        System.out.println();
        System.out.println();
        /*
         * Q: reversing the string
         */

        StringBuilder revString = new StringBuilder("Divyanshu");
        // System.out.println(revString.reverse()); // uhsyvniyvD

        // Internal implementation
        for (int i = 0; i < revString.length() / 2; i++) {
            // Front and back index
            int front = i;
            int back = revString.length() - 1 - i;
            // Swapping the characters
            char frontChar = revString.charAt(front);
            char backChar = revString.charAt(back);
            revString.setCharAt(front, backChar);
            revString.setCharAt(back, frontChar);
            // System.out.println(revString);
        }
        System.out.println(revString); // uhsyvniyvD

    }
}