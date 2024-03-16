import React from 'react';
import Logo from '../assets/Logo.png';
import Hat from '../assets/Witch_Hat.png';
import './NavLogo.css'

function NavLogo() {
    return (
        <>
            <nav>
                <div className='container-logo'>
                    <div className='img-logo'>
                        <img className='Logo' src={Logo} alt="" />
                    </div>
                    <h2>Sorting Hat</h2>
                    <img className='Hat' src={Hat} alt="" />
                </div>
            </nav>
        </>
    )
}

export default NavLogo;
