/*
    * we need to create a function which calculate the frequency of occurance of the
    * number in the code.
*/

    const letterFrequency = (letters) => {
        // Creating the object which will store the key and value
        // Key means the letter and value means the frequency
        let frequency = {};
        for (const letter of letters){
            if(letter in frequency){
                frequency[letter] += 1;
            }
            else{
                frequency[letter] = 1;
            }
        }
        return {frequency}
    }

    console.log(letterFrequency('hahha'));