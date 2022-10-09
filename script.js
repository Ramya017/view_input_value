const input = document.querySelector("input");

const h1 = document.querySelector('h1');

input.addEventListener('change', function(e){
    console.log("fjdkfj"); //clicking away triggers this
})

input.addEventListener('input', function(e){
    // console.log("INPUT EVENT"); //evry time you write something in the input this is 
    // triggered, it does not matter if you press shift, or arrow keys


   h1.innerText = input.value;
    // console.log(e);


})