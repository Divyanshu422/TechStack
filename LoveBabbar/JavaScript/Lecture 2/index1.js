/*
    * Lecture 2: Object
        * Every object has a property and behaviour. Object contains key-value pair.
        * Property is denoted by varible and behaviour using the method 
        
        * Objects are mutable - they are addressed by reference, not by value

        * Object in JavaScript is created using  
                    1. Object-literals. { }
                    2. Using the new keyword: new Object()
                    3. Using an Object constructor
*/
// -----------**********-----------**********-----------**********-----------    

        //* creating the rectangle object
        const rectangle = {
            // Adding the properties to the object
            length: 5,
            width: 10,
            // Adding the behaviour to the object -> via method
            draw: function(){
                console.log('drawing the rectangle');
            }
        }

        //* Calling the behaviour of object using the dot operator
                //  rectangle.draw;     // [Function: draw]
                // rectangle.draw(); // drawing the rectangle
        

// -----------**********-----------**********-----------**********-----------       

/*
        * Object creation in the javaScript using 
                1. Factory function
                2. constructor function 

        * Factory function: 
*/

        function createReactangle(len, width) {
                // Directly returning the object inside the function
            return {
                length: len,
                width: width,
                
                draw: function(){
                    console.log('drawing the rectangle');
                    console.log(this.length)
                }
            };
            // return rectangle;
        }


        //  Dynamically creating the object
        const rectangle1 = createReactangle(15, 10);
        // console.log(rectangle1.length);         // 15
        // console.log(rectangle1.width);          // 10
        // rectangle1.draw();                      // drawing the rectangle
                                                // 15


// -----------**********-----------**********-----------**********-----------  

/*
        * Constructor function:
            * To create a constructor function in JavaScript, you can define a function that uses the this keyword to initialize properties.
            * The this keyword in JavaScript refers to the object that is currently executing the code. 
            * we use pascal notation in constructor function
*/
        function Rectangle(length, breadth){
            this.length = length; 
            this.breadth = breadth;
            this.draw = function() {
                console.log('drawing the rectangle');
                console.log(this.length);
            };
        }
        
        // Usage:
        const myRectangle = new Rectangle(5, 10);
        // myRectangle.draw(); // Output: drawing the rectangle
        //console.log(myRectangle.constructor);       // [Function: Rectangle]
        // console.log(Rectangle.constructor);         // [Function: Function]
        
// -----------**********-----------**********-----------**********-----------  

/*
        * Dynamic nature of object
            * JavaScript objects are dynamic in nature, meaning their properties and methods can be 
            * added, modified, or deleted at runtime. 
*/
            const car = {
                make: "Toyota",
                model: "Camry",
                year: 2020
            };
            // deleting the property
            delete car.year;
            // console.log(car); // { make: "Toyota", model: "Camry" }

        
            // adding the property and modifying 
            car.gate = 4;       //! For adding we have used equal to not the colon (:)
            car.model = 'Toyata';
            // console.log(car);       // { make: 'Toyota', model: 'Toyata', gate: 4 }

// -----------**********-----------**********-----------**********-----------  
/*
    * Constructor Property in JavaScript
        * In javaScript every function is an object and each object has an constructor
*/
        
            // function square(side){
            //     this.side = side;
            // }

            // console.log(square.constructor);


// -----------**********-----------**********-----------**********-----------  
/*
        * Reference type and Prmitive type
            * In the primitive type => value is copied 
            * In reference type, address is passed
*/
            let a = 10;
            let b = a;  // value of a is copied to memeory location at b. Hence both a and b are separate entity.
            a++;
            // console.log(a); // 11
            // console.log(b); // 10
            
            
            let obj = {
                value : 10,
            }
            let b1 = obj;   // the address is passed not the value

            // Modifying the value and adding the property
            obj.value = 20;
            obj.age = 10;

            // console.log(obj);   // { value: 20, age: 10 }
            // console.log(b1);   // { value: 20, age: 10 }

    //*  In reference type the address is passed not the value is copied. hence both obj and b1 points to the same object
    //* Primitive are copied by their value whereas reference are copied by their address

// -----------**********-----------**********-----------**********-----------  
/*
    * QUESTION ON THE PRIMITIVE TYPE
*/

        let a1 = 10;

        const increment = (a1) =>{
            a1 = a1 + 1;
        }
        increment(a1);
        // console.log(a1);        // o/p is 10 not the 11 as in the primitive type value is copied. hence a1 in the function is not same as the a1 variable declared outside


/*
    * QUESTION ON THE Reference TYPE
*/
        let a2 = {
            value: 10
        }
        function incrementObj(a2){
            a2.value += 1;
        }

        incrementObj (a2);
        // console.log(a2);    // { value: 11 } => Pass by reference

// -----------**********-----------**********-----------**********-----------  