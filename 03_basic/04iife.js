// Immediately Invoked Function Expression(IIFE)

(function chai(){  //named iife
    console.log(`DB connected`);
})();

( (name)=>{
    console.log(`DB connected 2 ${name}`);
    
} )("Ayush");