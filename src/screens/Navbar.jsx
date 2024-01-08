import React from 'react'
import { } from 'react-icons'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div id='navbar'>
            <div className="container h-100">
                <div className="d-flex justify-content-between align-items-center h-100">
                    <Link to="/" className='nav-link px-0 text-white'><div className="logo">IFS E-LEARNING</div></Link> 
                    <div>Welcome </div>

                    {/* <div class="dropdown">
                        <button class="dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">

                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default Navbar