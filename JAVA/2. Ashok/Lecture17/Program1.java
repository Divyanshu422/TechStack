
/*
 * Assignment 1: Question in the Image file
 */

import java.io.BufferedReader;
import java.io.InputStreamReader;

class Program1 {
    public static void main(String[] args) throws Exception {
        // * Reading the input using the BufferedReader which takes the
        // InputStreamReader
        InputStreamReader input = new InputStreamReader(System.in);
        BufferedReader reader = new BufferedReader(input);
        System.out.println("Enter the BrandName");
        // * Consuming the input as String
        String inputString = reader.readLine();

        switch (inputString) {
            case "Nike":
                System.out.println("Nike -> Just do it");
                break;
            case "addidas":
                System.out.println("addidas -> Impossible is nothing");
                break;
            case "Puma":
                System.out.println("Puma -> Foreever Faster");
                break;
            case "Reebok":
                System.out.println("Reebok -> I am what I am");
                break;
            default:
                System.out.println(" Brand not found");
        }

    }
}