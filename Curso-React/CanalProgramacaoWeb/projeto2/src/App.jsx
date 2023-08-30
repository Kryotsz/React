import { BrowserRouter, Routes, Route } from "react-router-dom"

import Titulo from "./Titulo"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Contato from "./pages/Contato"

export default function App() {
  return (
    // <div>
    //   {<Titulo cor="blue" nome="Igor" paragrafo={true}/>}
    //   <Titulo cor="purpple" nome="Rodrigo"/>
    //   <Titulo cor="orangered" nome="Fernando"/>
    //   <Titulo cor="red"/>
    // </div>
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/contato" element={<Contato/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}