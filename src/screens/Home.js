import React from 'react'
import './Home.css'
import LeftsideBar from '../components/LeftsideBar/LeftsideBar'
import MainFeed from '../components/MainFeed/MainFeed'
import Nav from '../components/nav/Nav'
import RightsideBar from '../components/RightsideBar/RightsideBar'

const Home = () => {
    return (
        <div>
            <Nav />
            <div className='container'>
                <LeftsideBar />
                <MainFeed />
                <RightsideBar />
            </div>
        </div>
    )
}

export default Home
