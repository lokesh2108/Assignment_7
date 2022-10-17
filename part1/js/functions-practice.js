//STEP 1
function halfNumber(number){
    return "Half of " + number + " is " + number/2 + ".";
}
//window.document.write(halfNumber(5));

//STEP 2
function squareNumber(number){
    return "The result of squaring the number " + number + " is " + number*number + ".";
} 
//window.document.write(squareNumber(3));


//STEP 3
function percentOf(number1,number2){
    return number1 + " is " + (number1*100)/ number2 + "% of " + number2 + ".";
}
//window.document.write(percentOf(2,4));


//STEP 4
function findModulus(number1,number2){

    if(parseInt(number1) > parseInt(number2)){
        
        return number1 % number2 + " is the modulus of " + number1 + " and " + number2 + "." ;
    }
    else {
        
        return number2 % number1 + " is the modulus of " + number1 + " and " + number2  + "." ;
    }
        
}
//window.document.write(findModulus(4,10));
 


//STEP 5
function sumNumbers(number){
    var l=0,sum=0;
    while(l<number.length){
        sum = sum + parseInt(number[l]);
        l++;
    }
    return "The total sum is " + sum + "."; 
}

//p=[2,3,4];
//window.document.write(sumNumbers(p));


function main(){
    var choice,number,number1,number2,numArray;
    while(choice !== 6) {
        choice = parseInt(window.prompt("Menu:\n1: Half the given Number\n2: Square the given Number\n3: Percent of a Number\n4: Modulus of the Numbers\n5: Find the sum of Numbers\n6: Exit the program"));
        if(choice === 1) {
            number = window.prompt("Enter the number ");
            window.alert(halfNumber(number));
        }
        else if(choice === 2) {
            number = window.prompt("Enter the number to be squared");
            window.alert(squareNumber(number));
        }
        else if(choice === 3) {
            number1 = window.prompt("Enter first number");
            number2 = window.prompt("Enter second number");
            window.alert(percentOf(number1, number2));
        }
        else if(choice === 4) {
            number1 = window.prompt("Enter first number");
            number2 = window.prompt("Enter second number");
            window.alert(findModulus(number1, number2));
        }
        else if(choice === 5) {
            number = window.prompt("Enter numbers separated by commas");
            numArray = number.split(",");
            window.alert(sumNumbers(numArray));
        }
        else if(choice === 6){
            break;
        }
    }
}

main();

