// step 1: add event listener to the deposit button
    document.getElementById('btn-deposit').addEventListener('click',function(){
    // console.log('deposit button ')

// step 2: get the deposit ammount drom the deposit input ammount
// 2.1: for inpute field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString =depositField.value;
    newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(newDepositAmount)
        // console.log('click',newDepositAmountString)

    if(isNaN(newDepositAmount)){
        // console.log('1')
        alert('please provide amount');
        return;
    }
    // console.log('2')

// step 3: get the current deposit total
// step 3.1: for non-input(element other than input, textarea) use innerText to get the text
    const depositTotalElement =document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal =parseFloat(previousDepositTotalString);

// step 4: add numburs to set the total deposit
    const currentDepoditTotam = previousDepositTotal + newDepositAmount;
    // console.log(depositTotal)

// 4.1: set the deposit total
    depositTotalElement.innerText =currentDepoditTotam

// step 5: get the balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal =parseFloat(previousBalanceTotalString);


// step 6:calculet current total
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

// 6.1: set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;
    
// step ** clear the deposit field
depositField.value='';

})
