import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='navbar fixed-top navbar-expand-lg'>
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" className="navbar-brand-img" width={150} />
                    </a>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item d-flex ">
                            <a className="nav-link" href="#">
                                <select>
                                    <option value="">English</option>
                                    <option value="">Hindi</option>
                                </select>
                            </a>
                            <a className="nav-link" href="#">
                                <button className='btn btn-sm --btn'>Sign In</button>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar