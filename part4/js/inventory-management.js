/*eslint-env browser*/
function displayMenu() {
    window.console.log("Welcome to the Inventory Management Application");
    window.console.log("");
    window.console.log("Command Menu");
    window.console.log("view : View all products in the Inventory");
    window.console.log("update : Update a product's quantity");
    window.console.log("exit : Exit program");
    window.console.log("");
}

function display(inventory) {
    inventory.sort();
    inventory.forEach(function (product) {
        window.console.log(product[0] + " "+ product[1]+ " ("+ product[2]+ ") $"+ product[3]);
    })
}

function update(inventory) {
    var f = false;
    var prodNumber = parseInt(window.prompt("Enter the SKU number to be updated"),10);
    var quantity = parseInt(window.prompt("Enter the new quantity to be changed"),10);
    if(isNaN(prodNumber) || isNaN(quantity)) {
        window.console.log("Please enter valid Product Number or Quantity");
    }
    else {
        inventory.forEach(function (product) {
            if(product[0] === prodNumber){
                f= true;
                product[2]= quantity;
                window.console.log("Product "+ product[0]+ " was updated to new quantity : "+ product[2]);
            }
        })
        if(!f){
            window.console.log("Given product does not exist in the Inventory!");
        }
    }
}



function main(){
    var command;
    var inventory = [[4824, "Shirt", 10, 15.99],
                    [6343, "Jeans", 22, 39.99],
                    [3223, "Socks", 36, 9.99],
                    [2233, "Hats", 12, 14.99],
                    [9382, "Jacket", 5, 49.99]];
    displayMenu();
    while (true) {
        command = window.prompt("Enter the command to be performed");
        if (command !== null) {
            if (command === "view") {
                display(inventory);
            } 
            else if (command === "update") {
                update(inventory);
            }
            else if (command === "exit") {
                break;
            }
            else {
                window.alert("Not a valid command!");
            }
        } 
        else {
            break;
        }
    }
    window.console.log("Program ended.");
}

main();