import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.css";
import About from "./pages/about/About";
import Experience from "./pages/experience/Experience";
import Portfolio from "./pages/portfolio/Portfolio";
import Error from "./pages/error/Error";

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
    <Router>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
