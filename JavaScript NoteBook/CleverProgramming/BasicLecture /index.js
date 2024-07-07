/*
    * objects: are a type of variable, quite similar to array but they have key-value pair.
    * object are created using the squigglies bracket.
    * the properties of object can be accessed using the dot and bracket notation
*/

    const person = {
        name: 'leonardo',
        shirt: 'white'
    }

    // console.log(person);    //! { name: 'leonardo', shirt: 'white' }
    // console.log(person.name);   //! leonardo

    //* Using bracket  notation
    // console.log(person['shirt']);       //* white

    // Assign the value to the object:
    person.phoneNumber = '1-22-333-4444';   // Addint the key value to the object
    // console.log(person['phoneNumber'])  //1-22-333-4444




    /*
        Creating a fucntion with 2 param and using the object to store the value
        of param. Using the template literals for accessing the property and log
        the result
    */

        function introduce (name, shirt, assets, liability){
            const person = {
                name : name,
                shirt : shirt,
                assets : assets,
                liability: liability,
                networth: function(){
                    return this.assets - this.liability
                }
            }
            const intro = `Hi, my name is ${person.name} and my shirt color is ${person['shirt']} and my net worth is ${person.networth()}`
            return intro;
        }

        // invoking the function

        console.log(introduce('Divyanshu', 'red', 10000, 5000));



        
        // console.log(introduce('Leonardo', 'white'));