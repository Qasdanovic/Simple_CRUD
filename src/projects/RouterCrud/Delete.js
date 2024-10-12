import { useNavigate } from "react-router-dom"

export default function Delete({DeleteId, Data, setData}){

    let newData = Data.filter(user => user.id !== DeleteId)
    setData(newData)

    let navigate = useNavigate()
    navigate('/list')

    return (
        <>
        
        </>
    )
}