/* So we are making bg changer we have so many color buttons on clicking them (the bg will change).
   So colors change hu raha , tu kisi na kisi variable ma store karna hota ha and wo UI ma bhi reflect 
   hu raha ha so we want a state.  (so we will use useState (we have to use in array) )
   
   / NOTE:-
   -> w-full : width full
   -> h-screen:  height screen
   -> duration-200:  using for animation.
   -> bottom-12 : bottom sa 12px upper
   -> flex flex-wrap:  
          flex flex-wrap together means:
        ::- The element is set up as a flexible container.
        ::- Its child elements (flex items) are allowed to wrap onto multiple lines if there isn't enough horizontal space
            to accommodate them all on a single line. 
   -> inset-x-0 : 
       ::-  inset: This is a shorthand CSS property that sets all four top, right, bottom, and left properties simultaneously.
       ::-  -x-: This modifier indicates that the inset property is applied only along the x-axis (horizontally), affecting left and right.
       ::-  0: This value sets the left and right properties to 0px.
   
   -> px-2 : padding from x-axis(horizontally)
   -> gap-3: giving space between buttons
   -> shadow-lg : shadow large.
       
   
   */
import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")  // giving bydefault value olive

  return (
    <div className = "w-full h-screen duration-200"
      // To implement state we are using style and syntax is like style = {{}}
      style = {{backgroundColor: color}}
    >
       {/* making buttons in bottom */}
       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
           {/* these above we have taken position now here inside we will make a bar and will add bottons in it.  */}
               <div className = "flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                  <button      // callback ek function he ha. {() => {}} idar function ka andar ek aur function call kar raha.
                   onClick = {() =>  setColor("red")} // we have a method of setColor so we dont need parentheis we can directly call setColor and pass value in it.(onclick ku function chaiya(ju function sa return araha ha wo nahi chaiya usha function he chaiya) setColor is a function)
                   className = "outline-none px-4 py-1 rounded-full text-white shadow-lg"
                   style = {{backgroundColor: "red" }}
                  >Red </button>

                  <button
                  onClick = {() => setColor("green")}
                   className = "outline-none px-4 py-1 rounded-full text-white shadow-lg"
                   style = {{backgroundColor: "green" }}
                  >green </button>

                  <button
                   onClick = {() => setColor("blue")}
                   className = "outline-none px-4 py-1 rounded-full text-white shadow-lg"
                   style = {{backgroundColor: "blue" }}
                  >blue </button> 
               </div>
       </div>


       </div>
  )
}
/* Points to be noted.
-> The on click method in React expects a function reference.
-> You can't directly pass parameters inside the function, instead, you need to pass it as a 
   reference or use arrow function syntax.

our project is working fine. if we click red so we get red color in background. 
similarly for green, blue. 
-> But on reload the page we get olive color because on  page refresh, it took default
   useState value which is "olive".

*/
export default App
