import {useState} from "react";

export default function ParentOne(){
    const [data, setData] = useState();

    const parentToChild = () =>{
        setData("This is the data")
    }

return(
    <>
    
    <ChildOne parentToChild={data}/>
    
    </>
)
}