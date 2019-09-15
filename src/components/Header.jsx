import React, { Component } from 'react'

class Header extends Component {

render() {
    return (
        <div>
        <nav className = "navv">
            <div className="logoo">
                <h3>prepanation</h3>
            </div>
            <ul className="navv-links">
                <li>
                    <a href="#">Courses</a>
                </li>
                <li>
                    <a href="#">Membership</a>
                </li>
                <li>
                    <a href="#">Sign up</a>
                </li>
            </ul>
        </nav>
        </div>
    )
}
}

export default Header