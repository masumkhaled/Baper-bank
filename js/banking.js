// input value return function 
function inputAmount(inputId){
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const inputValue = parseFloat(inputText);

    input.value = '';
    return inputValue;
}
// Update total Function
function updateTotal(totalId, inputValue){
    const totalElement = document.getElementById(totalId);
    const totalText = totalElement.innerText;
    const totalAmount = parseFloat(totalText);

    const inTotal = totalAmount + inputValue;

    totalElement.innerText = inTotal;
}

function getCurrentBalance(){
    const balanceElement = document.getElementById("balance-total");
    const balanceText = balanceElement.innerText;
    const balanceAmount = parseFloat(balanceText);
    return balanceAmount;
}
// Update Balance Function
function updateBalance(inputValue, isAdd){
    const balanceElement = document.getElementById("balance-total");
    /* const balanceText = balanceElement.innerText;
    const balanceAmount = parseFloat(balanceText); */
    const balanceAmount = getCurrentBalance();
    if(isAdd == true){
        balanceElement.innerText = balanceAmount + inputValue;
    }else {
        balanceElement.innerText = balanceAmount - inputValue;
    }

}

document.getElementById('deposit-button').addEventListener('click', function(){
    const inputValue = inputAmount('deposit-input');
    
    // Update Deposit Total 
    if(inputValue > 0){
        updateTotal('deposit-total', inputValue);
        updateBalance(inputValue, true);
    }
})
document.getElementById('withdraw-button').addEventListener('click', function(){
    const inputValue = inputAmount('withdraw-input');
    const currentBalance = getCurrentBalance();
    // Update Withdraw Total 
    if(inputValue > 0 && inputValue <= currentBalance){
        updateTotal('withdraw-total', inputValue);
        updateBalance(inputValue, false);
    }
})