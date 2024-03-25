import {useState} from "react";

export default function ParentOne(){
    const [data, setData] = useState();

    const parentToChild = (childData) =>{
        setData(childData)
    }

return(
    <>
    
   </>
)
}