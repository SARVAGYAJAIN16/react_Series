import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10)

  
  
   const addValue = () => {
    // counter = counter + 1
     /* modifying code for interview now they will ask what will happen 
       when you write setCounter 4 times (without run).
     */
    
       
     setCounter(counter + 1)
     setCounter(counter + 1)
     setCounter(counter + 1)
     setCounter(counter + 1)
   }


    
     /* Output 
       // our answer -> may be 10 +1+1+1+1 = 14 (will happen when we click button)


       // Correct answer -> on clicking it is increment by 1 value only (as regular)
        It is happening because of useState it do that jitna bhi update bhajna ha UI ma aur variable ma unku batches ma bhajta ha.
        So esikaliya  fibre aya tha (difficult to understand) un batches ma aur control agaya ha through fibre and happen will that sab ku ek batch
        ma put karaga aur phir forward kar dega.

        So, in code happen that all 4 times setCounter put in single batch and (ek he kaam ku baar baar repeat kar raha ha) it will see same he tu kaam 
        hu raha ha.
        so we get output by increment by 1 only.
     */

    /*
      But we want 10+1+1+1+1 = 14 only so how we will do it ?
      NOTE:- (hidden feature)
        setCounter(counter + 1)
           setCounter ka andar ek callback function milta ha.
        setCounter((prevCounter) => {})    // here prevCounter (any name) is a last updated state of (counter) aur aap na vapis sa wo fetch kar ka bulwayi ha
    
       So , we write like this
       setCounter(prevCounter => prevCounter + 1)

       So, in output we get that value 14.
         
      */
       const addValue2 = () => {
        setCounter(prevCounter => prevCounter + 1)
        setCounter(prevCounter => prevCounter + 1)
        setCounter(prevCounter => prevCounter + 1)
        setCounter(prevCounter => prevCounter + 1) 
    
       } 
    
  const removeValue =  () => {
     setCounter(counter - 1)
  }

  return (
    <>
      <h1> Sarvagya interview testing</h1>
      <button
      onClick = {addValue}
      >Add value {counter}</button>

      <br/>

      <h3> modifying code value</h3>
      <button
      onClick = {addValue2}
      >Update Value {counter}</button>
      
      <br/>

      <button
      onClick = {removeValue}
      >Remove Value {counter}</button>

    </>
  )
}

export default App
