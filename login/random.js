function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
   const random = Math.round(Math.random()*10000)
    return random;
}
 document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getPin();
 const displayPinField = document.getElementById('display-pin');
 displayPinField.value =pin;          
 })

 document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-number');
    const previousTypeNumber = typedNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypeNumber.split('');
            digits.pop();
            const remaingDigitals = digits.join('')
            typedNumberField.value = remaingDigitals;
        }
    }
    else{
        
        newTypeNumber =previousTypeNumber + number;
        typedNumberField.value = newTypeNumber
    }
 })

 document.getElementById('verify-pin').addEventListener('click',function(){
    const displayPinField =document.getElementById('display-pin');
    const currentPin = displayPinField.value;
    const typedNumberField = document.getElementById('typed-number');
    const typeNumber = typedNumberField.value;

    typedNumberField.value=''
    displayPinField.value=''
    if(typeNumber === currentPin){
        alert('✅ Pin Matched... Secret door is opening for you')

    }
    else {
        alert('❌ Pin Did not Match, Please try again')
        // displayPinField='';
        typeNumber ='';
       
    }
    window.location.href = 'index-2.html'
   
 })