import {useState} from "react";
import ChildTwo from "./ChildTwo"
export default function ParentOne(){
    const [data, setData] = useState();

    const childToParent = (childData) =>{
        setData(childData)
    }

return(
    <>
    {data}
   </>
)
}