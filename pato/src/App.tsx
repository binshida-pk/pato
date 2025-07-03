// import { Route, Routes } from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import Mainbody from "./Components/Mainbody";
// import Text from "./Components/Text";
// import CardItem from "./Components/CardItem";
// import Footer from "./Components/Footer";
// import Navigate from "./Components/Navigate";
// import Menu from "./Components/Menu";
// import Reservation from "./Components/Reservation";
// import About from "./Components/About";
// import Gallery from "./Components/Gallery";
// import Contactus from "./Components/Contactus";

// function App() {
//   return (
//     <Routes>
//       <Route
//         path="/home"
//         element={
//           <>
//             <Navbar />
//             <Home />
//             <Text />
//             <CardItem />
//             <Footer />
//           </>
//         }
//       />
//       <Route
//         path="/menu"
//         element={
//           <>
//             <Navbar />
//             <Navigate />
//             <Menu />
//             <Footer />
//           </>
//         }
//       />

//       <Route
//         path="/reservation"
//         element={
//           <>
//             <Navbar />
//             <Reservation />
//           </>
//         }
//       />

//       <Route
//         path="/gallery"
//         element={
//           <>
//             <Navbar />
//             <Gallery />
//           </>
//         }
//       />

//       <Route
//         path="/about"
//         element={
//           <>
//             <Navbar />
//             <About />
//           </>
//         }
//       />
//       <Route
//         path="/contactus"
//         element={
//           <>
//             <Navbar />
//             <Contactus />
//           </>
//         }
//       />
//     </Routes>
//   );
// }

// export default App;
import { Navigate, Route, Routes } from "react-router-dom";
import CustomRoute from "./Components/Index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin/home" replace />} />
      <Route path="/admin/*" element={<CustomRoute />} />
    </Routes>
  );
}

export default App;
