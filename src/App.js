import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './components/Navbar';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
// import Section4 from './components/Section4';
import Footer1 from './components/Footer';
import Section01 from './components/Section01';
import Section5 from './components/Section5';
import Crsl from './components/Crsl';
import Example from './components/Section7';
// import Mrq1 from './components/Mrq1';

function App() {
  return (
    <div>
    <Navbar1 />
    <Section01 />
    <Section1 />
    <Section2 />
    <Section5 />
    <Example />
    {/* <Mrq1 /> */}
    <Crsl />
    <Section3 />
    {/* <Section4 /> */}


    <Footer1 />
    </div>
  );
}

export default App;
