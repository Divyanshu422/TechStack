

/* 
    * Creating a variable for the total variable. 
*/
const totalApple = 10;

//* Selecting the element => Basket1
const firstBasket = document.querySelector('.basket-1 span')
//* Selecting the element => Basket2
const secondBasket = document.querySelector('.basket-2 span')


/* 
    * considering the count in the 2nd basket is 0. then the count of the 
    * apples in the firstBasket = total apple - 2nd basket apples
*/
let secondBasketAppleCount = 0;
let firstBasketAppleCount = totalApple - secondBasketAppleCount;

//*  Assinging the above value of the apple to the UI
firstBasket.innerHTML = firstBasketAppleCount;
secondBasket.innerHTML = secondBasketAppleCount;

//* Selecting the 2 button
const rightArrow = document.querySelector('.right-arrow'); 
const leftArrow = document.querySelector('.left-arrow');

//*  Applying the eventListener to the right arrow button
rightArrow.addEventListener('click', ()=>{
    
    // applying the validation: such that when value become 0 we cant shift the apple count
    if(firstBasketAppleCount > 0){
        firstBasketAppleCount--;
        firstBasket.innerHTML = firstBasketAppleCount ;
        secondBasketAppleCount++;
        secondBasket.innerHTML = secondBasketAppleCount;
    }
});

//*  Applying the eventListener to the right arrow button
leftArrow.addEventListener('click', ()=>{

    // applying the validation: such that when value become 0 we cant shift the apple count
    if(secondBasketAppleCount > 0){
        firstBasketAppleCount++;
        firstBasket.innerHTML = firstBasketAppleCount ;
        secondBasketAppleCount--;
        secondBasket.innerHTML = secondBasketAppleCount;
    }
});