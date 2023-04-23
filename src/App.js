import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Layout from './components/Layout'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/portfolio" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/portfolio/about" element={<About />} />
          <Route path="/portfolio/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/contact" element={<Contact />} />
          <Route path="/portfolio/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
