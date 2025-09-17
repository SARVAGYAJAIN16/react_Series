// This we are making component.
// Rules you have to follow otherwise it will show error
/*
     because of vite we are using so it have some rules so,
     1-> always file name is in .jsx 
     2-> always whatever function name you make so make first letter to be capital.
     3-> only one element only you can written. otherwise more you do so you get error.(in App.jsx)
          but to solve this er can wrap inside <div>...</div> also or <>...</> (same thing). so then 
          it will work. In react <> </> this is called fragment. fragment he return kar du.
     */
function Chai(){
    return(
        <h3>Chai is ready for sarvagya</h3>
    )
}

export default Chai    // sending this to App.jsx and also we can send in main.jsx also