import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router';

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
    const URL = 'https://practice-portfolio713.herokuapp.com/';

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route exact path='/' element={ <Home /> }></Route>
                <Route path='/projects' element={ <Projects URL={URL}/> }></Route>
                <Route path='/about-me' element={ <AboutMe URL={URL}/> }></Route>
                <Route path='/contact' element={ <Contact /> }></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;