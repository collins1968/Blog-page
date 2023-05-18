import './header.css'
import logo from './images/logo.jpg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='MainHeader'>
            <div className='Titlebar'>
            <img src={logo} alt='logo' />
            <h1 className='logotitle'>My Tech Blog</h1>
            </div>
            <div className='navbar'>
           <Link to={'/Blog-page'}><h2>home</h2></Link>
           <Link to={'/Blog-page/#'}><h2>about</h2></Link>
           <Link to={'/Blog-page/#'}><h2>contact</h2></Link>
            </div>
            
           
       
            
        </div>
    )

}

export default Header