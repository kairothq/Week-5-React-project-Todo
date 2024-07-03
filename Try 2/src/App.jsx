import { useState } from "react";

function App() {

  const[count, setCount] = useState (0); // defining count as 0 here 

  return(
    <div>
        <CustomButton count={count} setCount={setCount}></CustomButton> 
    </div>
  )
  // here its like in xml defining the values of count and setcount like attributes inside the custom button
  // the custom button is defined as a component underneath
}


// This is a component (reusuable logic )
function CustomButton(props){
  // this props is just a variable like STATE
  function OnClickHandler(){
    props.setCount(props.count +1); // this is rerendering i.e. updating the state with the new value directly 
    //                                 rather than updating value and then putting it in state seprately 
  }

  return <button onClick= {OnClickHandler}>
    Counter {props.count} 
  </button> // this is defining of properties of output
}


export default App
