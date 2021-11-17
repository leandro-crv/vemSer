import {useContext} from "react";
import {CountContext} from "../context/Count";

function Mirror(){
  const {count} = useContext(CountContext);
  return(
    <>
      <p>Mirror: {count} </p>
    </>
  )
}

export default Mirror;