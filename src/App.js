
import './App.css';
import Clients from './sections/clients/Clients'
import Services from './sections/services/Services'
import Contact from './sections/contactus/Contact';


function App() {
  return (
    <div className="App">
      <Services />
      <Clients />
      <Contact />
    </div>
  );
}

export default App;
