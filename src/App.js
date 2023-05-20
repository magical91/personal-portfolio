import './App.css';
import NavBar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Projects from './components/Projects';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  // const [activeLink, setActiveLink] = useState('home');

  

  return (
    <div className="App">
      <NavBar />
     
      <Banner />
      <About />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
