let ticketPriceFirst = 0;
let ticketPriceEconomy = 0;       
        
        
function ticketChange(ticket, increase, price){
    const ticketCount = document.getElementById(ticket + 'Input');
    let ticketPrice = document.getElementById(price).innerText;
    let ticketPriceValue = parseInt(ticketPrice.value);
     
    // Checking if the input value has been given true or false.
    if (increase == true){
        ticketCount.value = parseInt(ticketCount.value) + 1;
    }
    if(increase == false && ticketCount.value > 0){
        ticketCount.value = parseInt(ticketCount.value) - 1;
    }
    //Checking whether it is first or Economy class
    if(ticket == 'firstClass'){
        ticketPriceFirst =   ticketCount.value * 150;

    }
    if(ticket == 'economy'){
        ticketPriceEconomy =   ticketCount.value * 100;

    }
        ticketPriceValue = ticketPriceFirst + ticketPriceEconomy;
        document.getElementById(price).innerText = ticketPriceValue;
        setVat(ticketPriceValue);// calling the vat Calculator
        calculateTotal(ticketPriceValue); // Calling the Total Calculator

}


//Here I will set The Value of Vat 
const setVat = (subTotal) => {
    let vat =  document.getElementById("vat-value");
    const value = subTotal * .1;
    vat.innerText = value;
    return value;

}


//Here I will Calculate The Total value.
const calculateTotal = (ticketPriceValue) => {
    const vat = setVat(ticketPriceValue);
    const total = vat + ticketPriceValue;
    const totalValue = document.getElementById("total");
    totalValue.innerText = total; 

}

const bookNow = () => {
    alert("Your Purchase has been confirmed");
}
            
       