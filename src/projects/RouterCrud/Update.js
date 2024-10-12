import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Update({updateId, Data}){

    let userWanted = Data.find(user => user.id === updateId)

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [city, setCity] = useState('')

    useEffect(() => {
        if (userWanted) {
            setName(userWanted.name)
            setAge(userWanted.age)
            setCity(userWanted.city)
        }
    }, [userWanted])

    

    let annuler = useNavigate()

    const updateUser = () => {
        Data.map(user => {
            if (user.id === updateId){
                user.name = name
                user.age = age
                user.city = city
            }
        })
        annuler('/list')
    }


    return (
        <div className="p-5 border border-5 border-dark m-5">
            <button onClick={()=> annuler('/list')} className="btn btn-danger mb-3">annuler</button>
            <form >
                    <label htmlFor="name">Name : </label>
                    <input onChange={(e) => setName(e.target.value)} value={name} className="form-control w-25" type="text" id="name" placeholder="enter your name" /><br /><br />
                    <label htmlFor="age" >Age : </label>
                    <input onChange={(e) => setAge(e.target.value)} value={age} className="form-control w-25" type="number" id="age" placeholder="enter your age " /><br /><br />
                    <label htmlFor="city">City : </label>
                    <input onChange={(e) => setCity(e.target.value)} value={city} className="form-control w-25" type="text" id="city" placeholder="enter your city" /><br /><br />
                    <button className="btn btn-primary mb-5" onClick={updateUser}>Update</button>
            </form>
        </div>
    )
}