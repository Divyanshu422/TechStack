
    /* 
        * the createElement() method of the react create a element with h1 tag.
        * the createElement() consume 3 paramaeter:
        *                   1. Tag_Name
        *                   2. props => means attribute
        *                   3. data or children
    */
        const h2= React.createElement('h2', {className: 'subHeading'}, 'this is react Object');
        //! the h2 created above is simple an object of react not the TAG/Element of the HTML.
        //! when h2 is rendered it is converted into the html code.
        console.log(h2);

    /*
        * To show the above element on the DOM, we need to use the reactDOM Library.
        * React dont have any method to showcase the element on the Browser/DOM.
        * Now to create the root element we need to pass the ID of root tag
    */
        const root = ReactDOM.createRoot(document.getElementById('root'));

    /*
        * After creating the root element now we can render the react element => which
        * in our case is h2
    */
        root.render(h2);


