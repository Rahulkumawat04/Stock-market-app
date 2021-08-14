var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");

var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");


function submitHandler(){
    var ip = Number(initialPrice.value).toFixed(2);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value).toFixed(2);


    calculateProfitAndLoss(ip, qty, curr);
}


function calculateProfitAndLoss(initial, quantity, current){
    if( initial > current){
        
        var loss = (initial - current)*quantity;
        var lossPercentage = (loss / initial)*100;

        outputBox.innerText = "loss is: -" + loss + " and loss Percentage: " + lossPercentage;

        outputBox.style.color = "red";
    }
    else if(current > initial){

        var profit = (current - initial)*quantity;
        var profitPercentage = (profit / initial)*100;

        outputBox.innerText = "Profit is: " + profit + " and Profit Percentage: " + profitPercentage;

        outputBox.style.color = "green";

    }
    else{
        outputBox.innerText = "It's all good...for now.";
        outputBox.style.color = "blue";

    }
}


submitBtn.addEventListener("click", submitHandler);