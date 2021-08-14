var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");

var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

function errorHandler(){
    if(Number(initialPrice.value) <= 0 ){
        outputBox.innerText = "The Initial Price of the Stonk cannot be less than or equal to 0."

        outputBox.style.color = "white";
        outputBox.style.backgroundColor = "black"
    }
    else if(Number(stocksQuantity.value) <= 0){
        outputBox.innerText = "The Quantity of stocks cannot be less than or equal to 0"

        outputBox.style.color = "white";
        outputBox.style.backgroundColor = "black"
    }
    else if(Number(currentPrice.value) <= 0 ){
        outputBox.innerText = "The Current Price of the Stonk cannot be less than or equal to 0."

        outputBox.style.color = "white";
        outputBox.style.backgroundColor = "black"
    }
    else{
        console.log("Why you doing this??");
    }
}


function submitHandler(){
    var ip = Number(initialPrice.value).toFixed(2);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value).toFixed(2);


    calculateProfitAndLoss(ip, qty, curr);
}


function calculateProfitAndLoss(initial, quantity, current){
    if( initial > current){
        
        var loss = (initial - current)*quantity;
        var lossPercentage = Number((loss / initial)*100);

        outputBox.innerText = "loss is: -" + loss + " and loss Percentage: " + lossPercentage + "%";

        outputBox.style.color = "white";
        outputBox.style.backgroundColor = "red"
    }
    else if(current > initial){

        var profit = (current - initial)*quantity;
        var profitPercentage = (profit / initial)*100;

        outputBox.innerText = "Profit is: " + profit + " and Profit Percentage: " + profitPercentage + "%";

        outputBox.style.color = "white";
        outputBox.style.backgroundColor = "#90ee90";

    }
    else{
        outputBox.innerText = "It's all good...for now.";
        
        outputBox.style.color = "white";
        outputBox.style.backgroundColor = "blue"
    }
    errorHandler();
}


submitBtn.addEventListener("click", submitHandler);