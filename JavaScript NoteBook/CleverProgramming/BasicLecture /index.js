
/*
    * Creating the letter counter: 
    * Short trick: In javaScript there is a method called length => which gives the total 
    * letter in the string. so no need to use this code.
*/

    const howManyLetter = (inputString) => {
            // Using the for..of loop not the for..in loop
            let count = 0; 
            //* console.log(inputString.length); // 26
            for (let letter of inputString){
                count++;
            }
            return {count}; //* by using the bracket we are returning the obhect
    }


    //console.log(howManyLetter('Hi! I am new to JavaScript'))        //! { count: 26 }

    //* Prompting the user for the input
    // const input = prompt('Write the string');
    // console.log(howManyLetter(input));


// ---------**************------------**************---------------****************-----------
    /*
        * Printing the sum of the array element: using for..of loop
    */

    const sumArray = (array) =>{
        let sum = 0;
        for (let element of array){
            sum += element;
        }
        return {sum};
    }

    let array = [10,20,30,40,50,60];
    // console.log(sumArray(array));           //* { sum: 210 }


// ---------**************------------**************---------------****************-----------
    /*
        * Printing the maximum of the array element: using for..of loop
    */

    const maxArray = (array) => {
        let max = array[0];
        for (let element of array){
            if (element > max){
                max = element;
            }
        }
        return {max};
    }

    // console.log(maxArray([10, 7, 88, 90, 14, 55]));     //! { max: 90 }

// --------**************------------**************---------------****************-----------
/*
        * Returing the frequency: for example =>
        *  let the input be 'hahha' 
        * Then it shall return an object  => {'h':3, 'a': 2}
*/
    
        const letterFrequency = (phrase) => {
                // Frequency object
                const frequency = {}
                // Looping the each letter of string 
                for (const letter of phrase){
                    // Checking if the letter is already in the object frequency
                    if (letter in frequency){
                        frequency[letter] = frequency[letter] + 1;
                    }
                    else{
                        // Adding the property-value to the object 
                        frequency[letter] = 1;
                    }
                }

                return {frequency};
        }
        console.log(letterFrequency('hahha'))           //*  { frequency: { h: 3, a: 2 } }