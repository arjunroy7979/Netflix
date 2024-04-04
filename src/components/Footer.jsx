import React from 'react'

const Footer = () => {
    return (
        <div className='Footer mt-2'>
            <div className="container text-white">
                <div className="row">
                    <div className="col-12 col-md-12 mb-3 mx-4">
                        <a href="tel:000-800-919-1694" className='text-white'>Questions? Call 000-800-919-1694</a>
                    </div>
                    <div className="col-12 col-md-3">
                        <ul>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Investor Relations</a></li>
                            <li><a href="">Privacy</a></li>
                            <li><a href="">Speed Test</a></li>
                            <li>
                                <select>
                                    <option value="">English</option>
                                    <option value="">Hindi</option>
                                </select>
                            </li>
                            <li><a href="">Netflix India</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-3">
                        <ul>
                            <li><a href="">Help Centre</a></li>
                            <li><a href="">Jobs</a></li>
                            <li><a href="">Cookie Preferences</a></li>
                            <li><a href="">Legal Notices</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-3">
                        <ul>
                            <li><a href="">Account</a></li>
                            <li><a href="">Ways to Watch</a></li>
                            <li><a href="">Corporate Information</a></li>
                            <li><a href="">Only on Netflix</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-3">
                        <ul>
                            <li><a href="">Media Centre</a></li>
                            <li><a href="">Terms of Use</a></li>
                            <li><a href="">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer