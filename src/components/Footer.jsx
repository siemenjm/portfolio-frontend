import '../styles/App.css';
import siteLogo from './images/site_logo.png';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer>
            <p className="footer-text">Copyright © 2022 Jared Siemen, All Rights Reserved | Designed and Built by <Link to='/' className='inline-link'>Jared Siemen</Link></p>
        </footer>
    );
  }
  
export default Footer;