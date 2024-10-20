
import "./App.css";
import Header from "./Components/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Footer from "../src/Components/Shared/Footer/Footer";
import FooterHome from "./Components/Shared/Footer/HomeFooter/FooterHome.jsx";
function App() {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/";

  return (
    <>
      <Header />
      <Outlet />
      {isHomeRoute ? <FooterHome /> : <Footer/>}
    </>
  );
}

export default App;