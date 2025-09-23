// rfce we write (so we get snippet).
import React from 'react'

//2
// Now putting props in function.
// function Card(props) {   // here coming from App.jsx (file) after // 4 
 //  console.log("props",props)  // no need of this after //4
     // 4
                     // improve readibilty by giving default value.in btnText
     function Card({username, btnText = "Stuff again"}) { // handling username and btnText  // 5
     
      // console.log(props.username); // so props.username we have not write (when doing destructuring {})
      console.log(username); 
      // for writing shortcut we can directly do destructure by writing username in function Card
      // after edit code down (in html file) we see our name in second card.

 //2
  /* In console  Output we get 4 times  props -> Object

  single,  props->Object (look like if we open it)
      props 
         Object
           -> [[Prototype]]: Object

    // now writing code inside (App.jsx) file, there in <Card /> (indide this we are writing code) 
  */
 
    
 
 // 4 using variable username (that we made above)
  // 1
  return (
    
    <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
      <img
        src="https://picsum.photos/301"
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide"> {username} </h2>   {/* //  4  using username here instead of Lorem */}
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            tempora ipsum soluta amet corporis accusantium aliquid consectetur
            eaque!
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-purple-800 text-red-500"
        >
         {/* {btnText || "Stuff Again"} */}   {/* giving default value(Stuff Again) but its readbility is not good (for others) */}     {/*  5 */}
          {/* To improve readibilty use this value in function only above */}
           {btnText}
        </button>
      </div>
    </div> 
  )
}

export default Card
