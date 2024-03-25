import {useState} from "react";
import ChildOne from "./ChildOne";

export default function ParentOne(){
    const [data, setData] = useState();

    const parentToChild = () =>{
        setData("This is the data")
    }

return(
    <>
    
    <ChildOne parentToChild={data}/>
    <button onClick = {()=> parentToChild()}>Parent to Child</button>
    </>
)
}