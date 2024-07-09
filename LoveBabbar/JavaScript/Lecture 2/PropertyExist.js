
/*
    * Problem statement:
        * Given a object and we need to find whether an key is present there or not
        * `in` operator is used 
        *  the o/p of `in` operator is true or false 
*/

    let rectangle = {
        length: 10,
        breadth: 20
    }

    // Checking whether the height exist in the rectangle or not using `in` operator

    if('height' in rectangle){
        console.log('height is present')
    }
    else{
        console.log('Not Present')
    }

    /*
        * Result: Not Present

    */