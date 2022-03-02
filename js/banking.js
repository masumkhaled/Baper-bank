document.getElementById('deposit-button').addEventListener('click', function(){
    // Get the amount deposit
    const dipositInput = document.getElementById('deposit-input');
    const depositAmount = dipositInput.value;
    
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const depositAmountParse = parseFloat(depositAmount);
    const depositTotalTextParse = parseFloat(depositTotalText);
    depositTotal.innerText = depositAmountParse + depositTotalTextParse;

    //Update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalTextParse = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalTextParse + depositTotalTextParse ;

    // Empty Deposit input Field 
    dipositInput.value = '';
})