import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar, Footer } from "./components";
import { Home, About, Projects, Contact } from "./pages";

const App = () => {
  return (
    <main className="bg-slate-300/20 min-h-screen">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          {/* Optional: fallback route for unmatched paths */}
          <Route path="*" element={<h1 className="text-center text-2xl mt-10">404 - Page Not Found</h1>} />
        </Routes>

        <Footer />
      </Router>
    </main>
  );
};

export default App;
