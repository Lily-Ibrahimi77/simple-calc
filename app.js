function operation(choice) {
    var firstNumber = document.getElementById("num1").value *1;
    var secondNumber = document.getElementById("num2").value *1;
    var finalResult;
    // switch hjälper att ha några knäppar och ha en funtion för varje utan att skriva olika funktioner. 
    switch(choice){
      case 1:
        finalResult = firstNumber + secondNumber;
        break;
        case 2:
        finalResult = firstNumber - secondNumber;
        break;
        case 3:
        finalResult = firstNumber * secondNumber;
        break;
        case 4:
        finalResult = firstNumber / secondNumber;
        break;
    }
    // här har jag olika färger om resultatet blir negativ eller positiv med if else
    
    if(finalResult <0 ){
      var negativ = document.getElementById("result");
    negativ.style.backgroundColor = "red";
   
    } else{
        var positiv = document.getElementById("result");
        positiv.style.backgroundColor = "green";

    }
   
    document.getElementById("result").value = finalResult;
  }