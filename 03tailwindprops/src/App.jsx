import { useState } from 'react'
import './App.css'
import Card from './components/Card'

// 2 props in Card.jsx

// 1 

function App() {
  const [count, setCount] = useState(0)

  // 3  trying to access object.
   let myObj = {
    username: "Sarvagya",
    age: 21
   }

   // 4 trying to access array.
    let newArr = [1,2,3]

  /*
    ->  jsx is not a regular html. So rule is that every tag should have its closing tag. 
       ex: <img class = " ----" />
    -> if it is in tailwind so it will always responsive.   
  */

  /* NOTE->
    bg-> background
    p -> padding
    mb -> margin bottom
  */

  /* now we are starting with props.
  ->  props do that it make component re-useable. ex cards.(card ku component ma rakh diya jaya aur usha baar baar use kar liya jaya)
      component behave like html so we have to give in closing tag here .. <Card/>
  */

  return (
    <>
  
        {/* <h1>Tailwind css Test</h1>  */} 
        <h1 className = 'bg-green-400 text-red-400 p-4 rounded-xl mb-5'>Tailwind Test</h1>
     
       {/* 3 */}
       {/*  <Card channel = "Sarvagya aur code" />  */}
       {/*  modifying code (trying to give more parameter) */}
        
        {/* <Card channel = "Sarvagya aur code" someObj = {myObj}  />    */}
        {/* Output we get in console....  we notices that per card it showing props(output) 2 times.
           props 
           {channel: 'Sarvagya aur code'}
                channel: "Sarvagya aur code"
                [[Prototype]]: Object
        
                // modifying code. (output)
                // remember directly you will write array, object code so it will give error.
                  props 
                  {channel: 'Sarvagya aur code', someObj: {…}}
                     channel: "Sarvagya aur code"
                     someObj: {username: 'Sarvagya', age: 21}
                     [[Prototype]]: Object
        */}

        {/* 4  for accessing array*/}
        <Card channel = "Sarvagya aur code" someObj = {newArr}  />
         {/*  Output  we notices that per card it showing props(output) 2 times.
           props 
                  {channel: 'Sarvagya aur code', someObj: {…}}
                     channel: "Sarvagya aur code"
                     someObj: (3) [1, 2, 3]
                     [[Prototype]]: Object
         SO we learn that ek components sa dusra component ma value pass kar sakta ha.
         now going in Card.jsx(file)
         */}

         {/* 4  only now just writing username in Card */}
         <Card username = "Sarvagya aur code" btnText ="My stuff"/>


        <Card username = "Jain"  />  {/* Suppose your team member forget to use btnText here so you can give bydefault value in (html code by writing like {btnText || "Stuff again"}) */}
        {/*  both  cards have same name (but you have to change data)
            So it is done by props */}

      {/*

      {/* this card we have copy from dev.ui 
      <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
      <img
        src="https://picsum.photos/301"
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">Lorem</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            tempora ipsum soluta amet corporis accusantium aliquid consectetur
            eaque!
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
        >
          Read more
        </button>
      </div>
    </div> 
    */}

 {/* now our tailwind story is over now we are starting with props. 
     now doing comment on card code and making new component so that it will return card.
     so making folder(components) inside src
 */}
  
    </>
  )
 }   // ya wala function App wala ka ha.


export default App
