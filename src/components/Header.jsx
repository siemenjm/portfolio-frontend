import siteLogo from './images/site_logo.png';
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <header>
            <Link to='/'>
                <img src={siteLogo} alt="" className="site-logo" />
            </Link>
            <nav>
                <Link to='/'>
                    <button className='nav-link'>Home</button>
                </Link>
                <Link to='/about-me'>
                    <button className='nav-link'>About me</button>
                </Link>
                <Link to='/projects'>
                    <button className='nav-link'>Projects</button>
                </Link>
                <Link to='/contact'>
                    <button className='nav-link accent-link'>Contact</button>
                </Link>
            </nav>
        </header>
    );
  }
  
export default Header;