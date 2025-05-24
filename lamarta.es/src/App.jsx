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
import PanelAfiliado from "./components/club/PanelAfiliado";
import BuscarUsuario from "./components/club/BuscarUsuario";
import AnadirPuntos from "./components/club/AnadirPuntos";
import Perfil from "./components/club/Perfil";
import CanjearRecompensa from "./components/club/CanjearRecompensa";
import AnadirRecompensa from "./components/club/AnadirRecompensa";
import EditarRecompensa from "./components/club/EditarRecompensa";
import BorrarRecompensa from "./components/club/BorrarRecompensa";

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
                  <PrivateRoute rolPermitido="afiliado">
                     <PanelAfiliado />
                  </PrivateRoute>
               } />
               <Route path="/club/usuario" element={
                  <PrivateRoute rolPermitido="admin">
                     <BuscarUsuario />
                  </PrivateRoute>
               } />
               <Route path="/usuario/perfil/:id" element={
                  <PrivateRoute rolPermitido="admin">
                     <Perfil />
                  </PrivateRoute>
               } />
               <Route path="/usuario/anadir/:id" element={
                  <PrivateRoute rolPermitido="admin">
                     <AnadirPuntos />
                  </PrivateRoute>
               } />
               <Route path="/usuario/canjear/:id" element={
                  <PrivateRoute rolPermitido="admin">
                     <CanjearRecompensa />
                  </PrivateRoute>
               } />
               <Route path="/recompensa/anadir/:id" element={
                  <PrivateRoute rolPermitido="admin">
                     <AnadirRecompensa />
                  </PrivateRoute>
               } />
               <Route path="/recompensa/editar/:id" element={
                  <PrivateRoute rolPermitido="admin">
                     <EditarRecompensa />
                  </PrivateRoute>
               } />
               <Route path="/recompensa/borrar/:id" element={
                  <PrivateRoute rolPermitido="admin">
                     <BorrarRecompensa />
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
