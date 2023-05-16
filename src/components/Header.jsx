import './header.css'
import logo from './images/logo.jpg'

const Header = () => {
    return (
        <header className='MainHeader'>
            <img src={logo} alt='logo' />
            <h1>My Tech Blog</h1>
        </header>
    )

}

export default Header