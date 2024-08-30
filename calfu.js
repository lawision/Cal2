let display = document.getElementById("result");

//function to display the numbers in the screen
function displaynums(input){

    display.value += input;
}
// Clear function
function clearEve(){
    display.value = "";
}
//Calculate Function
function calculate(){
    
    try{
        //Checking if the value has % on them
        if(display.value.includes('%')){
            //regex is used to search for patter in a text
            var regex = /^(\d+)%(\d+)$/;
            var matches = display.value.match(regex);
            //if the value has % on get the value before the % and after the calculate everything to get the percentage
            if (matches) {

            var beforePercent = matches[1]; // Number before %
            var afterPercent = matches[2];  // Number after %
            display.value = (beforePercent /100) * afterPercent;
            
            }

            
        }
        
    //Get the display and use eval to calculate everything
    display.value = eval(display.value);

        
        
    } 
    //To catch an Error if the input is invalid  
    catch(error){
        display.value = "Error";
    }
}
//Function to delete a single letter in a text
function del(){

   display.value =  display.value.toString().slice(0,-1);




}
