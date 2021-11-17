import {useContext} from "react";
import {CountContext} from "../context/Count";

function Counter(){
  const {count, setCount} = useContext(CountContext);
  return(
    <>
      <p>Count: {count}</p>
      <br/>
      <button onClick={()=> setCount(count+1)}>Increment</button>
      <button onClick={()=> setCount(count-1)}>Decrement</button>
    </>
  )
}

export default Counter;