import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/general/Header";
import Footer from "./components/general/Footer";
import Menu from "./components/general/Menu";
import Inicio from "./components/inicio/Inicio";
import Conocenos from "./components/conocenos/Conocenos";
import Carta from "./components/carta/Carta";
import Blog from "./components/blog/Blog";
import Contacto from "./components/contacto/Contacto";
import NotFound from "./components/general/NotFound";
import Login from "./components/club/Login";
import PrivateRoute from "./components/general/PrivateRoute";
import PanelAdmin from "./components/club/PanelAdmin";

function App() {
   return (
      <BrowserRouter>
         <Header />
         <Menu />
         <main id="contenido-principal" className="contenedor d-flex-col" role="main">
         
            <Routes>
               <Route path="/" element={<Inicio />}></Route>
               <Route path="/blog" element={<Blog />}></Route>
               <Route path="/conocenos" element={<Conocenos />}></Route>
               <Route path="/carta" element={<Carta />}></Route>
               <Route path="/contacto" element={<Contacto />}></Route>
               <Route path="/club/login" element={<Login />}></Route>
               
               <Route path="/club/admin" element={
                  <PrivateRoute rolPermitido="admin">
                     <PanelAdmin />
                  </PrivateRoute>
               } />

               <Route path="/club/afiliado" element={
                  <PrivateRoute rolPermitido="usuario">
                     <Carta />
                  </PrivateRoute>
               } />
               <Route path="/*" element={<NotFound />}></Route>
            </Routes>
         </main>
         <Footer />
      </BrowserRouter>
   );
}

export default App;
