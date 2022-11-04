import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "../pages/contact";
import Home from "../pages/home";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;