import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { v4 } from "uuid"

export default function Add({setData}){

    const [alert, setAlert] = useState('')

    const [users, setUsers] = useState([])

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [city, setCity] = useState('')

    const list = useNavigate()

    useEffect(() => {
        if (name && age && city){
            setAlert('')
        }
        else{
            setAlert('you have to valid all information !')
        }
    }, [name, age, city])

    const submit = (e) => {
        e.preventDefault()

        if (name && age && city){
            let newUser = {
                id : v4() ,
                name : name ,
                age : age ,
                city : city
            }

            setUsers(prev => [...prev, newUser])
            setName('')
            setAge('')
            setCity('')
            setData(prev => [...prev, newUser])
        }
        else{
            e.preventDefault()
        }
    }
    return (
        <div className="p-5 border border-5 border-dark m-5">
            <div className={alert ? 'alert alert-danger' : '' }>{alert}</div>
            <button onClick={()=> list('/list')} className="btn btn-primary mb-3">display user list</button>
            <form >
                    <label htmlFor="name">Name : </label>
                    <input value={name} onChange={(e) => setName(e.target.value)} className="form-control w-25" type="text" id="name" placeholder="enter your name" /><br /><br />
                    <label htmlFor="age" >Age : </label>
                    <input value={age} onChange={(e) => setAge(e.target.value)} className="form-control w-25" type="number" id="age" placeholder="enter your age " /><br /><br />
                    <label htmlFor="city">City : </label>
                    <input value={city} onChange={(e) => setCity(e.target.value)} className="form-control w-25" type="text" id="city" placeholder="enter your city" /><br /><br />
                    <button className="btn btn-primary mb-5" onClick={submit}>add</button>
            </form>
        </div>
    )
}
