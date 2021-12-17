import React from 'react';
import video from '../components/video/vid.mp4'
import '../App.css'

const Home = () => {
    return (
        
        <div className="main-container" id="home">
            <div className="main-background">
                <video className="video-background" autoPlay loop muted src={video} typeof="video/mp4"></video>
            </div>


            <div className="main-content">
                <h1 className="title">
                    Welcome Home
                </h1>
            </div>
        </div>
        
    )
}

export default Home
