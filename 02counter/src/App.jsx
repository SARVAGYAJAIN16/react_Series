import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // 2 
  // Using useState() hook ... here default value we can give anything.let give 15, you can give 10 also (anything).
  /* NOTES:-
    What we get from useState ? 
    -> So we get two thing in array format. like
        const[] =  useState(15)
       So '0' index pa value milti ha variable.  usually we say it counter. (any name use can use)
       So '1' index pa value milti ha wo function hota ha.   usually we say it setCounter.
   
    -> setCounter is a function which is responsible for updating first variable(means counter).
        In counter variable (here default value will be 15)   
       
  
  */
 //  const[counter, setCounter] =  useState(15)  // give error on running beacause it is updating value and we declare as a const. 
     let [counter, setCounter] =  useState(15)
 
    const addValue = () =>{
      counter = counter + 1
      setCounter(counter)
        // we try to run, so onclicking Add value (button) we get error. so to solve do 'let' instead of 'const'. 
        // after that it run (all are changing(full dom is analysis that kaha kaha vo value ha ju muja update karni ha. state change hu gayi ha. state aur UI ka sync we are doing) to 16 as (we increment)).
    }


   // 3 
   /* This is our function
       const addValue = () =>{
        console.log("clicked", counter);
        counter = counter + 1
        setCounter(counter)
    -> Kya ya function, ya 'counter' (down) esa access kar sakta ha.
      let [counter, setCounter] =  useState(15)
       now in return we are modiying code of remove value (button) adding onClick 
   */

    const removeValue = () => {
      setCounter(counter - 1)
    }


  /*
  //1
 // let counter = 15  //  NOTE:- ya ek variable ha ju update hoga par.ya khabhi bhi UI ma propogate nahi hoga.
  const addValue = () =>{
  //  console.log("clicked", Math.random()); // In console on click we are seeing that random value is coming like 0.4--,0.23--- etc(but initally counter value is 15 and it is not incrementing.)
     console.log("clicked", counter); // here on clicking Add value now value are getting increment from 15. so it works.
     counter = counter + 1 
  }
  */  

  /*
   So above this problem is coming because of UI updation. React is saying UI ka andar ma kab kya chiz update hogi, ya aap nahi decide kar sakta hu. ya ma 
   decide karunga(means react).
   So, react is do react in variable ka updation ma.(so when koi bhi variable update hota ha tu har jagah wo update karti ha.)

  */
  return (
    <>
      <h1>Sarvagya aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick = {addValue}
      >Add value {counter}</button>
      <br/>
      <button
        //modifing code...for // 3
       onClick = {removeValue}
      >Remove value {counter}</button>

      {/* now adding counter variable in so many places.in above and below here */}
     
      <p> footer: {counter} </p>
    {/* So ek variable kitni sari jagah par ha (yahi major problem thi react ki)
        yahi problem solve karna  ka liya react na kaha ki aap variable update karo lekin jab UI ma update hoga so react will control.
        so react gaves a special way or method that is called hooks( through that hooks only data will update.)
      NOTE -> UI updation ku react control karta ha. 
         Now using hooks(there are of many types acc to need) ->
          1:  useState ->  It is responsible to change(change means propogate kiya jata ha UI ka andar(dom ka andar)) the state.
      */}
    </>
  )
}

export default App
