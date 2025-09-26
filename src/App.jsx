import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/header/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Interior from "./pages/interior/Interior";
import About from "./pages/about/About.jsx";
import Menu from "./pages/menu/Menu.jsx";
import Contacts from "./pages/contacts/Contacts.jsx";
import NotFound from "./pages/NotFound.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import FullMenu from "./pages/menu/fullMenu/FullMenu.jsx";
import MenuDetaile from "./pages/menu/MenuDetaile.jsx";

export default function App() {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navbar />

      <main style={{ flex: 1 }}>
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/interior" element={<Interior />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/full" element={<FullMenu />} />
            <Route path="/menudetail/:id" element={<MenuDetaile />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
}
