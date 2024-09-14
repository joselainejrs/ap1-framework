import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Aula from "./pages/aulas/aula";
import Descricao from "./pages/aulas/descricao";
import Menu from "./pages/componente/menu/menu";

function AppRoutes(){
    return (

        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}>
            </Route> 
            <Route path="/menu" element={<Menu />}>
            </Route> 
            <Route path="/aula" element={<Aula />}>
            </Route> 
            <Route path="/aula/:id" element={<Descricao />}>
            </Route> 

            
        </Routes>
        </BrowserRouter>

    )
}

 export default AppRoutes;
