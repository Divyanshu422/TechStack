/*
    * Loops:
*/
        // adding the marks of the student
        const marks = [70, 45, 76, 53, 90, 80];
        let sum  = 0;
        for (const mark of marks){ 
            sum = sum + mark;
        }

        // console.log(`the total mark of the student is ${sum}`)
        // output: the total mark of the student is 414


/*
        Letter counter code:
*/

        const howManyLetter = (sentence) => {
            let count = 0;
            for (const letter in sentence){
                count ++;
            }
            return count;
        } 

        // console.log(howManyLetter('hey, can you go to grocery store with me?'))



        /*
            For-in loop: used to iterate over the enumerable properities of object.
            the For..of loop will throw the error on the object.
        */

            const person = { 
                name: 'Alice', 
                age: 25, 
                city: 'Wonderland' 
            };

            for (let key in person) {
              console.log(key); // logs 'name', 'age', 'city'
              console.log(person[key]); // logs 'Alice', 25, 'Wonderland'
            }

        /*
            Using the for..in loop on the array => not recomended
            it will log the index
        */
            const array = ['apple', 'banana', 'cherry'];

            for (let index in array) {
              console.log(index); // logs '0', '1', '2'
              console.log(array[index]); // logs 'apple', 'banana', 'cherry'
            }