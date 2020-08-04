 //Hide notify section
    document.getElementById("wrong-pin").style.display="none";

    document.getElementById("match-pin").style.display="none";

 //generate button
     const btn = document.getElementById("generateBtn");
     btn.addEventListener("click", function(){
     const randomNumber =  getRandomNumber(1000, 9999);
     const input = document.getElementById("input");
     input.value = randomNumber;
  
  })


  // function of random number for generate button
    function getRandomNumber (start, range){
        let getRandom = Math.floor((Math.random() * range) + start);
        while(getRandom>range){
            getRandom = Math.floor((Math.random() * range) + start);
        }
        return getRandom;
    } 


 //function of backspace button
    function backSpace(){
        var calculatorInput = document.getElementById('calResult').value;
        var backSpace = calculatorInput.slice(0, calculatorInput.length - 1);
        document.getElementById('calResult').value = backSpace;
        }
        
// function of clear button
 function clearBtn(){
    document.getElementById('calResult').value = "";
  
 }
   

 // function of submit button
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", function(){
        var inputValue = document.getElementById("input").value;
        var calculatorValue = document.getElementById("calResult").value;
       
        if(inputValue == calculatorValue){
        
            document.getElementById("match-pin").style.display="block";
        }
        else{
            document.getElementById("wrong-pin").style.display="block";
        }
    })

 