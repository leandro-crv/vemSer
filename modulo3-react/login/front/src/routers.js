import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Users from "./pages/Users";
import Login from "./pages/Login";

function Routers(){
  return(
    <BrowserRouter >
        <Routes>
          <Route path="/users" element={<Users/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default Routers;