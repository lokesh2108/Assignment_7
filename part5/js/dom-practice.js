/*eslint-env browser*/

//STEP 1
function displayTheMessage() {
    window.alert("I have been clicked");
}


function main() {
    //STEP 2
    var buttonElement_1 = document.getElementById("unique_Button_1");
    buttonElement_1.onclick = function () {
        window.alert("I have been clicked");
    }

    //STEP 3
    var buttonElement_2 = document.getElementById("unique_Button_2");
    function userFunction() {
        window.alert("I have been clicked");
    }
    buttonElement_2.addEventListener("click", userFunction);

    //STEP 4
    var buttonElement_3 = document.getElementById("unique_Button_3");
    buttonElement_3.addEventListener("click", function() {
        window.alert("I have been clicked");
    });

    //STEP 5
    buttonElement_3.addEventListener("click", function() {
        window.alert("I have been clicked");
    });
}
window.addEventListener("load", main);