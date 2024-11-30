import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import GalleryPage from "@/pages/GalleryPage";


const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </AnimatePresence>
  )
}

const App = () => {
  return <Router>
    <AnimatedRoutes/>
  </Router>
}

export default App;