import { useEffect, useState } from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {list} from "./MyEmployee"
import { Register } from "./NewEmployeeForm"

export const HomePage=()=>
{
    const[tmparray,setTmparry]=useState([])
    const[createView,setCreateView]=useState(false)

    const result=()=>
    {
        setTmparry(list)
    }
    useEffect(()=>
    {
        result()
    })


return(
    <>
    <div className="Container mt-5">
        {(createView)?
        <>
        <Register/>
        <button className="btn btn-outline-seondary" onClick={
            ()=>
            {
                setCreateView(false)
            }
        }>
            Back
        </button>
        </>:
        <>
        <button className="btn btn-outline-success" onClick={
            ()=>
            {
                setCreateView(true)

            }
        }>
            create a new User
        </button>
        <></>
        </>
        }
        
    </div>
    </>

    );
}