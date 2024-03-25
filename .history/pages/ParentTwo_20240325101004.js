import {useState} from "react";

export default function ParentOne(){
    const [data, setData] = useState();

    const parentToChild = () =>{
        setData(childData)
    }

return(
    <>
    
    <ChildOne parentToChild={data}/>
    <button onClick = {()=> parentToChild()}>Parent to Child</button>
    </>
)
}