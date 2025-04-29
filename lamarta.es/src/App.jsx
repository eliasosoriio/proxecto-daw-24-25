import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/general/Header";
import Footer from "./components/general/Footer";
import Menu from "./components/general/Menu";
import Inicio from "./components/inicio/Inicio";
import Conocenos from "./components/conocenos/Conocenos";
import Carta from "./components/carta/Carta";
import Blog from "./components/blog/Blog";

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
