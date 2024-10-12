import { Route, Routes, BrowserRouter } from "react-router-dom";

import Update from "./projects/RouterCrud/Update";
import Error from "./projects/RouterCrud/Error";
import Add from "./projects/RouterCrud/Add";
import UsersList from "./projects/RouterCrud/UsersList";
import Delete from "./projects/RouterCrud/Delete";
import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  const [Data, setData] = useState([])
  const [updateId, setUpdateId] = useState(null)
  const [DeleteId,setDeleteId] = useState(null)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Add setData={setData} />} path="/" />
        <Route element={<Delete setData={setData} Data={Data} DeleteId={DeleteId} />} path="/delete" />
        <Route element={<UsersList Data={Data} setDeleteId={setDeleteId} setUpdateId={setUpdateId} />} path="/list" />
        <Route element={<Update updateId={updateId} Data={Data} /> } path="/update" />
        <Route element={<Error/>} path="*" />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

