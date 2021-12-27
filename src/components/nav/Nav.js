import React from 'react'
import './Nav.css'
const Nav = () => {
    return (
        <div className='main-nav'>
            <div className='nav-left'>
                <img className='logo' src="/images/My project.png" alt="" />
            </div>
            <div className='nav-center'>
                <div className='search-box'>
                    <img src="/images/search.png" alt="" />
                    <input type="text" placeholder='Search' />
                </div>
            </div>

            <div className='nav-right'>

                <div className='nav-user'>
                    <img src="/images/profile-pic.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Nav
