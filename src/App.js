import './App.css';
import NavBar from './components/Navbar';
import Banner from './components/Banner';
import SKills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <SKills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
