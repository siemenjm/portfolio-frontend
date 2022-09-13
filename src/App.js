import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
    const URL = 'https://practice-portfolio713.herokuapp.com/';

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route exact path='/' element={ <Home /> }></Route>
                <Route path='/projects' element={ <Projects URL={URL}/> }></Route>
                <Route path='/about' element={ <About URL={URL}/> }></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;