import './App.css';
import { CustomNavbar } from './Components/CustomNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './Components/Banner';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Project';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';

function App() {

  return (

    <div className='App'>

      <CustomNavbar />

      <Banner/>

      <Skills/>

      <Projects/>

      <Contact/>

      <Footer/>

    </div>
  );
}

export default App;