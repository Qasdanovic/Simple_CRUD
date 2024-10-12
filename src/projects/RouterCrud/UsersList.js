import { useState } from "react"
import { useNavigate } from "react-router-dom"



export default function UsersList({Data, setUpdateId, setDeleteId}){
    let index = useNavigate()


    const Update = (id) => {
        setUpdateId(id)
        index('/update')
    }

    const Delete = (id) =>{
        setDeleteId(id)
        index('/delete')
    }


    return (
        <>
           <div className="p-5 border border-5 border-dark m-5">
            <button className="btn btn-danger mb-4" onClick={()=>index('/')}>return</button>
            {
                Data.length > 0 ?
                <table className="table table-bordered table-hover text-center">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>age</th>
                            <th>city</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Data.map(element =>
                                    <tr>
                                            <td>{element.name}</td>
                                            <td>{element.age}</td>
                                            <td>{element.city}</td>
                                        <td>
                                            <button onClick={() => Update(element.id)} className="btn btn-primary mx-2">update</button>
                                            <button onClick={() => Delete(element.id)} className="btn btn-danger mx-2">delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                    </tbody>
                </table>
                 : 
                <div className="alert alert-primary">there's no users !!!</div>
                }
            </div> 
        </>
    )
}