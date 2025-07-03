import Menu from "./Menu";
import { Route, Routes } from "react-router-dom";
import Reservation from "./Reservation";
import Gallery from "./Gallery";
import Contactus from "./Contactus";
import Home from "./Home";
import Mainbody from "./Mainbody";
import About from "./About";
function CustomRoute() {
  return (
    <Routes>
      <Route element={<Mainbody />}>
        <Route path="home" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="reservation" element={<Reservation />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contactus" element={<Contactus />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default CustomRoute;
