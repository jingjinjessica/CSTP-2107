// Functional componentts 
// import React from 'react';
import './Header.css'; 

const Header = () => {
    return(
        // Symantic HTML ?
        <header>
            <nav className='headerContainer'>
                <ul className='navContainer'>
                    <li className='navItem'>
                        Home
                    </li>

                    <li className='navItem'>
                        About
                    </li>

                    <li className='navItem'>
                        Service
                    </li>
                    
                    <li className='navItem'>
                       Contact
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;