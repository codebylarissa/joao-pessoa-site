import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./css/style.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Praias } from "./pages/Praias";
import { PontosTuristicos } from "./pages/PontosTuristicos";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/praias" element={<Praias/>}/>
          <Route path="/pontos-turisticos" element={<PontosTuristicos/>}/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>

    
  );
}

export default App;
