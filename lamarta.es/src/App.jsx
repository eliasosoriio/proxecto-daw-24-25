import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Inicio from "./components/Inicio";
import Conocenos from "./components/Conocenos";
import Carta from "./components/Carta";
import Blog from "./components/Blog";

function App() {
   return (
      <BrowserRouter>
         <Header />
         <Menu />
         <main className="contenedor d-flex-col">
            <Routes>
               <Route path="/" element={<Inicio />}></Route>
               <Route path="/blog" element={<Blog />}></Route>
               <Route path="/conocenos" element={<Conocenos />}></Route>
               <Route path="/carta" element={<Carta />}></Route>
            </Routes>
         </main>
         <Footer />
      </BrowserRouter>
   );
}

export default App;
