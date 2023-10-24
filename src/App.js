
import './App.css';
import Head from './Components/Head.js';
import Cards from './Components/Card.js';
import Forms from './Components/Forms.js';
import Carusel from './Components/Carousel.js';
import Breadcrumbs from './Components/Breadcrumbs.js';
import Clock from './Components/Clockwork';
import {Container} from 'react-bootstrap';


function App() {
  return (
    <Container>
      <header className='my-5'>
        <Head/>
      </header>
      <body>
        <Breadcrumbs/>
        <Carusel/>
        <Cards/>
        <Forms/>
        <script src="./clockscript.js"></script>
      </body>
      <footer className='my-5'>
        <p class="text-center">© WebSite 2023/<Clock/></p>
      </footer>
    </Container>
  );
}

export default App;
