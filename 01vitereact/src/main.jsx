import React from 'react'
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// In App.jsx(file) ma App ek function ha. tu kya ma function yahi declare kar sakta hu. let try
  function  MyApp(){ // So After writing code MyApp is also function like App so does we can write here, so it work.
    return(
      // writing jsx
        <div>
          <h1>Custom App</h1>
        </div>
    )
  }
/* So after running MyApp function we have seen syntax of reactElement(in customReact folder -> customreact.js(file))
 
Aap tu esa likh raha hu tu isha convert karna ka kaam hota bundler ka hota ha.(below)
 // Syntax-1
 <div>       
 <h1>Custom App</h1>
 </div>
------------------------
        convert into like this by bundler.
 // Syntax -2
 type: 'a' ,   
    props: {   
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}      

-> Html wala syntax easy ha compare to this above (syntax-2) but react ku html samaj nahi ata ha.so that why we say JSX(html is mixed with js) 
  So, syntax-1 ki parsing hoti ha aur isha convert kiya jata ha tree ma into syntax-2

*/

//   const reactElement = {
//     type: 'a' ,
//     props: {   
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

/* Now we are doing that we know at the end it parse like in syntax -2 it will convert so directly we can use reactElement in render.
let try what happen. ? we are trying to reduce one step (of parsing) so what happen that we write reactElement (in render section)


// in render we have written.
 <ReactElement />  //  Run but nothing happen (blank screen)

*/

const ReactElement = {
     type: 'a' ,
    props: {   
        href: 'https://google.com',
         target: '_blank'
     },
     children: 'Click me to visit google'
 }

 const anotherElement = (
    <a href = "https://google.com" target='_blank'>Visit google </a>
    
)
  // App.jsx(file) and see here
  const anotherUser = "sarvagya react series"

// Understanding how we write ReactElement syntax correctly so that it will run.

 const reactElement2  = React.createElement(
    // first parameter is expected is  tag.(any tag)
     'a',
    //  Second parameter is expected is object (it add all properties)
    {href: 'https://google.com', target: '_blank'},
    
    // third parameter is expected is direct text.
    'click me to  visit google',

    // injecting variable..
      anotherUser
  )





ReactDOM.createRoot(document.getElementById('root')).render(
 
  

  //  <App />      
  //    <MyApp/>    {/* So it works, so this also will convert like above so in end of day it is function only so we can write like  MyApp() but dont do it beacuse it is not optimize.*/}
  //   <reactElement/>   {/* Run but nothing happen(blank screen) we have study that in capital(first letter we should we write. lets try...) */}
 //   <ReactElement />   {/*  Run but nothing happen (blank screen)*/}
    
 //  {/* we are accessing object so object does not access like this (in js ) */}
  
 //   ReactElement   {/*  Nothing happen (blank screen) in console we go now and see that there is error */}
 /*
      To solve this  whatever we have written (means reactElement is a custom react)  
      here .render is a method here (doing by react) so there should be a syntax (that is followed by react. of writing object) so 
      now making new element here ex: anotherElement 
 */
  
  //    anotherElement    // here it works ( we see link in the screen).

  // so reactElement is not working because its syntax is not correct. ( key : value) name is not correct.

 //  reactElement2  // so now it also work.
 //-------------------------------
 // now back to our old code 
//  <App/>
//------------------------

// after injecting variable in reactElement2
  reactElement2  // so it works anotherUser data also seen here
)
