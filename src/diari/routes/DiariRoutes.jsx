import { Navigate, Route, Routes } from "react-router-dom"
import { DiariPage } from "../pages/DiariPage"


export const DiariRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <DiariPage/>}></Route>
        <Route path="/*" element={  <Navigate to="/" /> }></Route>

    </Routes>
  )
}
