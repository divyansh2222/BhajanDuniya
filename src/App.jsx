import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { BhajanProvider } from './context/BhajanContext';
import Bhajan from './pages/Bhajan';

function App() {
  return (
    <BhajanProvider>
    <Router>
      <div className="app-container flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-grow">
          {/* Sidebar with fixed width */}
          <Sidebar />

          {/* Main Content */}
          <main className="flex-1 ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bhajan/:id" element={<Bhajan />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
    </BhajanProvider>
  );
}

export default App;
