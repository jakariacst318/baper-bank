/* 
    1.add event handler with the withdra button
    2.get the  withdra amoumt from the withdra input field
    2-5: also make sure to covert the inpute into a number by using perseFloat
    3. get previous withdraw total
    4. calculet total withdraw amount
    4-5: set total withdraw amount
    5: get the previous balance total
    6: calculate new balance total
    6.5: set the new balance total
    7: clear the input field
*/
// step-1: 
    document.getElementById('btn-withdraw').addEventListener('click',function(){
    // console.log('ber korbo tk');

// step-2.
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat( newWithdrawAmountString);
    // console.log(newWithDrawAmount);

// step-7
    withdrawField.value='';

        if(isNaN(newWithdrawAmount)){
            alert('please provide amount');
            return;
        }

// step-3.
    const withdrawTotalElement =document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal =parseFloat(previousWithdrawTotalString);
    // console.log(previousWithdrawTotal);

// step-5
    const balanceTotalElement =document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // console.log(previousBalanceTotal);


    if(newWithdrawAmount > previousBalanceTotal){
        alert('sorry not amount');
        return;
    }

// step-4.
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // console.l og(currentWithdrawTotal);
    withdrawTotalElement.innerText = currentWithdrawTotal;

// step:6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


})