import './App.css';
import Header from "./Main/header/Header";
import Home from "./Main/home/Home";
import About from "./Main/about/About";
import Services from "./Main/services/Services";
import Portfolio from './Main/portfolio/Portfolio';
import Contact from "./Main/contact/Contact";
import Footer from './Main/footer/Footer';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;