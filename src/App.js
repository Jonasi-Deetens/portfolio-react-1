import About from "./pages/About";
import Home from "./pages/Home";
import Components from "./pages/Components";
import { Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomeNavigation from "./components/HomeNavigation";
import HomeFooter from "./components/HomeFooter";

function App() {
  let location = useLocation();
  return (
    <div className="App">
            <header>
              {location.pathname === "/" ? <HomeNavigation /> : <Navigation />}
            </header>
            <main>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/components" element={<Components />} />
                </Routes>
            </main>
            <footer>
              {location.pathname === "/" ? <HomeFooter /> : <Footer />}
            </footer>
    </div>
  );
}

export default App;
