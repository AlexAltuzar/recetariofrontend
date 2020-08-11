import React, { Component } from 'react';
class Navbar extends Component {

    constructor(props) {
        super(props)
        this.btnBurger = React.createRef();
        this.openMenu = this.openMenu.bind(this);
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top justify-content-between">
                <ul className="nav navbar-nav">
                    <div className="menu-btn" ref={this.btnBurger} onClick={this.openMenu}>
                        <div className="menu-btn__burger"></div>
                    </div>
                    <li className="nav-item active">
                        <a className="navbar-brand" href="http://localhost:3000/">HOME</a>
                    </li>
                </ul>
            </nav>
        );
    }

    openMenu() {
        const menuBtn = this.btnBurger.current;
        menuBtn.classList.toggle("open");
        const burgerMenu = this.props.refTM.current;
        burgerMenu.classList.toggle("open");
    }
}

export default Navbar;