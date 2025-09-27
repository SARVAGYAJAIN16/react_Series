/* making a project password genertor 
  -> first we want length (bysliding we are increment or decrement) and length is updating and displaying so to 
     track length we need useState 
  -> Now making checkbox (of Numbers and Characters)

  -> Now we have input field and there will be option for copy text. Now es input field ma bhi tu data araha hoga (ju generate kar raha ha password) 
     tu usha bhi tu state ma rakna hoga.  tu isha hum bol raha ha password


     // tailwind.
     -> w-full : width full
     -> max-w-md : max width medium size.
     -> mx-auto: margin auto
     -> shadow-md: shadow medium.
     -> rounded-lg: rounded large
     -> px-4: padding x axis pa 4
     
  */

import { useState , useCallback , useEffect, useRef} from 'react'


function App() {
  const [length, setLength] = useState(8) // giving default value of password genertor is 8.
  const [numberAllowed, setNumberAllowed] = useState(false) // this we made for Numbers.(on tick it will set true( so that we get numbers in password generator))
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  
 // 3 use of useRef hook
  const passwordRef = useRef(null) // null is a default value.means abhi koi reference nahi ha.
// To give reference we write ref = {passwordRef} in input(html code) now you have a reference

/*
  This we have made passwordGenerator but the problem is passwordGenerator tu aap bana loga but it has to call in Numbers and Characters also (to generate password)
  So, there is any way to optimize this. So we have a hook useCallback.
  -> useCallback: is a react hook that lets you cache a function definition between re-renders.
     means mera pass ek function ha usha memory(cache) ma rakh lu. agar ma vapis sa run karu tu ju phela jitna bhi part use hua ha usha use kar lu.aur ju nahi hu pa raha wo nahi hupa raha.

     how we can use useCallback ?
     -> useCallback(fn , dependencies) // dependencies passes in format of array.
       ex:  useCallback(fn , [])
     // on Number, Character we are selecting so this is a dependencies(iska change hota he function run hona chaiya)
      syntax: 
        import {useCallback} from 'react'


     */
 //  const passwordGenerator = () => {}
     const passwordGenerator = useCallback(() => { // with the help of useCallback (memory or cache ma rakh liya gaya ha.)
        let pass = "" // empty hu  .... isma modify hota jayega.
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
         if(numberAllowed) str += "0123456789"
         if(charAllowed) str += "!@#$%^&*-_+=[]{}~`"

         // so kitna baar loop chalega it depend on length.
           for(let i=1; i <=length; i++){
              // now making our password.
               let char = Math.floor(Math.random() * str.length + 1) // + 1 because 0 nahi aya. // yaha pa koi array ki index value ayi ha random(character nahi aya ha).
                   // so string ma sa charater chaiya tu so, 
                   pass += str.charAt(char) // charAt() ma konsa character use karna ha tu so, ju abhi aya ha upper sa so char
                      // this pass we made so putting value in setPassword.
                  }

                  setPassword(pass)

     }, [length , numberAllowed, charAllowed, setPassword]) // we understand later about setPassword(it is also a dependency)

// 3  
  const copyPasswordToClipboard = useCallback(() => {
    //  how we copy to clipboard ...
    /* NOTE:-
     because of we are working in core react so directly we are writing window.(if same thing you do in next.js so waha pa hoti)
     ha server side rendering means sara code execute hota ha server pa. server pa aap ka pass window object nahi hota ha.
    */
   // To see a user friendly effect (like on copy we see what is get copy(that password will be selected)) for this we are using passwordRef
     passwordRef.current?.select() // ? using hu sakta ha ki current value zero hu.So optinally we will select. // optimize 1 (more optimize we can do).
     // optimize 2 we are telling range also..
     // passwordRef.current?.setSelectionRange(0,3) // so only 3 value will be selected and copy
      passwordRef.current?.setSelectionRange(0,100)
     window.navigator.clipboard.writeText(password)  // we get value of copy on clicking(copy button) but we can do more optimize(above line) 
    
  }, [password] )




// 2 now calling here password generator. (due to error we cannot work like that)
// passwordGenerator();   // but error is coming (react limit the number of render to prevent an infinite loop)

/* react kab kon si chiz render hogi ya apan control nahi karta ha.
   then, 
    what will be the correct way to call passwordGenerator.
    1 ->  way is make button and do click and  do call.
    2 -> way is  using a hook (useEffect) 

    useEffect: is a react hook that lets you synchronize component with an external system. (later we study in detail)
    -> no need to store in any variable.
    ->  useEffect(() => {}, []) // it have many thing but mainly 2 is function , dependency array.

*/

  useEffect(() => {
    passwordGenerator()

  }, [length, numberAllowed, charAllowed, passwordGenerator, setPassword]) // agar length distrub kar de tu phir sa run kar dunga(apna aap). similary for numberAllowed , charAllowed, passwordGenerator.
  // setPassword use or not here (no difference is there) but setPassword is responsible for memoziation, usku optimize kar ta ha,uska cache ma rakhta ha.
  
  /* 
     useCallback vs useEffect hooks
   ->  In useCallback and its dependency array ju ha isko kabhi bhi useEffect ka array sa compare mat karna.
       in useCallback we give jispa aap ki dependency ha , aur possibile run hoga(kaisa bhi aap ush method ku optimize kar lo, so ush method ku hum yaha pa de raha ha.)
       agar method dubara run hota ha tu insa kuch bhi change hota ha tu inha optimize karo.(so yaha hum optimize kar raha ha)... usha optimize karo our goal is usha cache ma rako par run nahi karo.
       run karna ka goal useEffect sa achieve hu raha ha.

    -> In useEffect we are saying agar kuch bhi change hu tu vapis sa run kar du. 
  */ 

 // Now  3 challenge is that on clicking copy button (our text should be get copy to clipboard)
 /* so, (copy button) we made in html, 
      <input
          type = "text"
          value = {password}
          className = "outline-none w-full py-1 px-3 bg-white"
          placeholder ="Password"
          readOnly />
     
    <button
      className = 'outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
      >Copy</button>

  input ek alag entity ha aur button ek alag entity ha . tu inka aapas ma koi link nahi ha.
  So for this we have another hook  is useRef hook.
    useRef:- kisi bhe chiz ka koi reference lene hota ha, so useRef hook we use.
    ->  To use useRef  we need to store in variable.
    
 */ 

  return (
   <>
       {/* <h1 className='text-4xl text-center text-white'> Password generator</h1> */}
      <div className ='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'> 
          <h1 className = 'text-white text-center my-3'>Password generator</h1>
          <div className = 'flex shadow rounded-lg overflow-hidden mb-4'>
           {/* using react here */}
             <input
               type = "text"
               value = {password}
               className = "outline-none w-full py-1 px-3 bg-white"
               placeholder ="Password"
               readOnly   // here any one cannot write anything.
              // 3 adding reference
               ref = {passwordRef}   // but jab button pa click karunga tu kuch hona bhi tu chaiya. so putting onClick in button
             />

             {/* Adding button */}
             <button
             onClick = {copyPasswordToClipboard}
             className = 'outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
             >Copy</button>

      </div>

         <div className = 'flex text-sm gap-x-2'>
            <div className = 'flex items-center gap-x-1'>
                <input 
                type="range"
                min = {6}     // we have to give both max amd min (otherwise it will not run.)
                max = {100}
                value = {length}
                className = 'cursor-pointer'
                onChange = {(e) => {setLength(e.target.value)}} // e is event
                ></input>
                <label>Length: {length} </label>
            </div>
               <div className = "flex items-center gap-x-1">
               <input
               type= "checkbox"
               defaultChecked = {numberAllowed}
               id="numberInput"
               onChange={() => {
                   setNumberAllowed((prev) => !prev);  // previous value ju bhi ha usha reverse kar du.
               }}
               ></input>
               {/* input ka label */}
                <label htmlfor="numberInput">Numbers</label>
               </div>
               <div className = "flex items-center gap-x-1">
                  <input
                    type="checkbox"
                    defaultChecked = {charAllowed}
                    id="characterInput"
                    onChange = {() => {
                      setCharAllowed((prev) => !prev)
                    }} 
                  ></input>
                  <label
                  htmlFor="characterInput"> Characters 
                  </label>
                    {/*  2  Now we want that jaisa he ya page load hu(abhi koi button nahi jisha ki ma password ku fill kara saku) so, something we want ju ush method ku call kar de */}
               </div>

         </div>
      
  </div>    
 </>   
  )
}


export default App
