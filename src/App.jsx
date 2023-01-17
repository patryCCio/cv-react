import { HashRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import "./styles/App.css";
import About from "./pages/about/About";
import Experience from "./pages/experience/Experience";
import Portfolio from "./pages/portfolio/Portfolio";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Outlet />
    </>
  );
};

const App = () => {
  return (
    <HashRouter>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
