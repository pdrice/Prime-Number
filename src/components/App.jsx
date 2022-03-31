import React, {useState} from 'react'

function App() {
    

    const [input, setInput]= useState("")

    // this handles the number input
    function handleNumInput(event){
        // This stores the inputed value
        const newValue = event.target.value

        // This turns the inputed value into an interger
        const numNewValue = parseInt(newValue)

        // This saves the properties of the inputed value which is linked to the const input
        setInput(numNewValue);
    }
    
    // this handles the submit button
    function handleIsPrimeSubmit(){

        // helps selects the button ready for changes in html section
        const btnClick = document.querySelector("button");

        // helps selects the h4 tag ready for changes in html section
        const primeNumText = document.querySelector("h4");

        // helps selects the h5 ready for changes in html section
        const number = document.querySelector("h5");
       
        // Once the button submit button is clicked

            // to intialize the inner text and make sure its an integer for the if statement
            number.innerText = input;
            
            if ((input) === 1){
                primeNumText.innerText = " is not a prime number"

            }else if((input) === 2){
                primeNumText.innerText = " is a prime number"

            } else if((input) > 1){
                
                // this will loop through the number and execute the math modulo problem 
                for (let i =2; i < input; i++){
                    if(number.innerText % i === 0){
                        primeNumText.innerText=" is not a prime number";
                        break;
                    }else {primeNumText.innerText=" is a prime number"; 
                    break;}
                }
            //  this is for the negeative number if inputed  
            }else{primeNumText.innerText=" is not a prime number"}

           
        

        console.log(input);
        console.log(btnClick);
        console.log(primeNumText);
    }

    return (

    <div className='input'>
    <div className='head'>
    <h6>
        Interview Question 1
    </h6>
    </div>
        <div className='heading'>
        <h1>Prime Number</h1>

        <h5></h5>
        <h4>Type in any number to see if the number is a prime number.</h4>
        </div>
        <br/>
        <input onChange={handleNumInput} type="number" value={input}></input>
        <br/>
        <br/>
        <button onClick={handleIsPrimeSubmit} type="submit">Submit</button>
    </div>
  )
}

export default App