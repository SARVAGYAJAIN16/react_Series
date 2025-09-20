/*
// 4 
// we can design mainContainer
function customRender(reactElement, container){
    // phela dom element lu (par phela dom element create karta tha)
    const domElement = document.createElement(reactElement.type)
      // injecting inner html
      domElement.innerHTML = reactElement.children
         // setting attributes
         domElement.setAttribute('href', reactElement.props.href)  // (kya set karna ha , aur kaha sa)
         // setting another element
         domElement.setAttribute('target',reactElement.props.target)
   
     // that container (you provide above(ju aap na root sa select kiya ha) uska andar add kar du)
        container.appendChild(domElement)
          
        // but for so many attributes it will time consuming so we use loop.

}
*/

//5 
//  with loop we are using.
  function customRender(reactElement, container){
     const domElement =  document.createElement(reactElement.type)
     domElement.innerHTML = reactElement.children
     // now using loop 
     for(const prop in reactElement.props){
        if(prop ==+ 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
     }
     container.appendChild(domElement)
}


//3 
// End of the day ju aap na html return kiya ha wo react ku kaisa deekta ha. or after complie how react will see.
// react ju  bhi element ha na uska tree bana ki try karta ha.
const reactElement = {
    type: 'a' ,  // or p (para) or div etc. 
    props: {    // props ek object hota ha. in which we are add properties.
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}


//1 
// grabbing the root by DOM (which we made in index.html (file) by its id)
const mainContainer = document.querySelector('#root')

//2
// Now we have to render. (is reactElemnt ku add kar de in root ka andar.)
// ( kya inject karu, kaha pa inject karu.)
customRender(reactElement, mainContainer)
