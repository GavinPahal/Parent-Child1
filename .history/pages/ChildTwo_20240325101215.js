

export default function ChildOne({ childParent }) {
const data ="New data"
    return (
        <>

            <button onClick={()=> childParent(data)}></button>
        </>

    )
}