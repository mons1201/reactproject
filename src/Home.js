import { useEffect, useState } from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import {FetchExact, list,remove} from "./MyEmployee"
import { Register } from "./NewEmployeeForm"
import { Reading } from "./read"
import { Update } from "./updates"



export const HomePage=()=>
{
    const[tmparray,setTmparry]=useState([])
    const[createView,setCreateView]=useState(false)
    const[readView,setreadView]=useState(false)
    const[updateView,setUpdateView]=useState(false)
    const[pos,setPos]=useState(0)
    const[obj,setObj]=useState({})

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
        </>
        :
        (readView)?
        <>
        <Reading who={pos}/>
        <button className="btn btn-outline-seondary" onClick={
             ()=>
             {setreadView(false)
             }
         }>
             Back
         </button>
         </>
         :
         (updateView)?
         <>
         <Update who={pos} mention={obj}/>
         <button className="btn btn-outline-seondary" onClick={
              ()=>
              {setUpdateView(false)
              }
          }>
              Back
          </button>
          </>
         
         :
        <>
        <button className="btn btn-outline-success" onClick={
            ()=>
            {
                setCreateView(true)
            }
        }>
            create a new User
        </button>
        
        <div className="row justify-content-center">
            <div className="table-responsive-md">
                <table className="col-lg-8 col-md-10 col-sm-12 table table-striped p-4 shadow rounded">
                    <thead>
                        <tr>
                            <th>EmployeeId</th>
                            <th>EmployeeName</th>
                            <th>EmployeeUsername</th>
                            <th>empPassword</th>
                            <th>empDesignation</th>
                            <th>empExperience</th>
                            <th>empSalary</th>
                            <th>Actions</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                          tmparray.map((ele,ind)=>
                          (
                            <tr>
                                <td>{ele.empId}</td>
                                <td>{ele.empName}</td>
                                <td>{ele.empUsername}</td>
                                <td>{ele.empPassword}</td>
                                <td>{ele.empDesignation}</td>
                                <td>{ele.empExperience}</td>
                                <td>{ele.empSalary}</td>
                                <td>
                                    <button className="btn btn-outline-info" onClick={
                                        ()=>
                                        {
                                            setreadView(true)
                                            setPos(ind)

                                        }
                                        
                                    }>
                                        read
                                        <i class="bi bi-book-fill"></i>
                                    </button>
                                    <button className="btn btn-outline-info" onClick={
                                        ()=>
                                        {
                                            setUpdateView(true)
                                            setPos(ind)
                                            const temp=FetchExact(ele.empName);
                                            //setObj(temp);
                                        }
                                        
                                    }>
                                        Update
                                    </button>
                                    <button className="btn btn-outline-info" onClick={
                                        ()=>
                                        {
                                            setTmparry(remove(ind))

                                        }
                                    }>
                                        Delete

                                    </button>
                                </td>
                            </tr>
                          ))
                        }
                            

                    </tbody>
                </table>
            </div>
        </div>
    </>
    }
        
    </div>
    </>
);
}