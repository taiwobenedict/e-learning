import React from 'react'
import { Link } from "react-router-dom"

function Home() {
    return (
        <div id='home'>
            <div className="overlay"></div>
            <div className="container h-100">
                <div className="home-container">
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="home-content">
                            <h1>Information System E-learning:</h1>
                            <p>Welcome to a world where education meets innovation, and learning knows no bounds!</p>
                            <Link to="/auth"><button className='btn btn-primary'>Get Started</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home