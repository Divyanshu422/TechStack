/*
    * There are 2 loops:
        * For-in loop: it is used to iterate over the object. to get the value of the object respective to the key => we need to use the bracket notation. it is applicatle to the  enumerable properties

        * for-of loop: used to iterate over the array, string (iterable). it is not applicable to the object
*/

// ----------*************---------***********--------------
    let cube = {
        length: 10,
        breadth: 20,
        height: 30
    }

    for(const key in cube){
        // console.log(key);   
        //console.log(cube[key]); 
    }

    /*
        output: length
                10
                breadth
                20
                height
                30
    */

// ----------*************---------***********--------------

/*
    * we can not use the for-of loop on the object. But there is a hack -> we can extract the keys of the object and make the array.
    * the we can use the for-of loop.
    
    * How to extract -> Using Object.keys(Object_Name) or Object.enteries(Object_name) 

*/

let cube1 = {
    length: 10,
    breadth: 20,
    height: 30
}

for(const key of Object.keys(cube)){
    //console.log(key);   
    // console.log(cube[key]); 
}

/*
    length
    10
    breadth
    20
    height
    30
*/
// ----------*************---------***********--------------

let cube2 = {
    length: 10,
    breadth: 20,
    height: 30
}

for(const key of Object.entries(cube)){
    console.log(key);   
}
/*
    [ 'length', 10 ]
    [ 'breadth', 20 ]
    [ 'height', 30 ]
*/