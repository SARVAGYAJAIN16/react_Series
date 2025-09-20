import Chai from "./chai"

function App() {
  // modifying code:-
  /* (we are doing that making variable here and want to displaying inside return)
     we notice that inside fragment there are tags not variable.. so how we will use variable here.
     so, we use curly braces inside return and then use variable name. so it works {username} we will treat as a variable. called  evulated expression.

     Interview :-
        {username} isko bol tha ha evalute expression. means here js ka final output evulate hu gaya ha wo lek ta hu.
        if we write like { if(true) username} like that we can write so no ... evulation expression ka matlab ha ki final outcome hoga.

 ->   Now doing that why we cannot write if syntax or like this syntax here ? so moving in main.jsx (file)
      
chai aur sarvagya {username} // ya aap na esa {username} likha ha ya kaha jata ha reactElement2 ma ?..
  const reactElement2  = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google'
) 
// Ans:- in main.jsx (file) we are declaring global  anotherUser
 const anotherUser = "sarvagya react series" ( ya inject karna ha tu kaha karunga) in reactElement2 

   So, it happen that jab aap ka sara tree ban jata ha... tu aap ka variable inject hota ha.
      const reactElement2  = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
     // injecting variable
     anotherUser
     -------------- code end here

     At the end of day ya object ma he convert hu raha ha so like if-else  like this we cannot write. esa thori na hota ha. 
     because ya evulated expression ha.

) 
      
  */
      const username = " learning wonderful thing"
  

  return (    // Remember only one element only you can written. otherwise more you do so you get error.
  //  <Chai/> // it work correct because of single only we are returning.
  //  <h1> xyz</h1> // error is coming
   
   
   <>
   <Chai/>
   <h1> chai aur sarvagya {username}</h1>
   <p> test para </p>
   </>
 )
}

export default App;
