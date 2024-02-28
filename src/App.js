import './App.css';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Services/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
