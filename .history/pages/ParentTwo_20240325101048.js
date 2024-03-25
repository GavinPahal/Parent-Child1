import {useState} from "react";

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