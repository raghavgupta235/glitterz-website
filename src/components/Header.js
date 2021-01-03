import React from "react";
import NavbarButton from './NavbarButton.js'


const Header = () => {

    const navbarButtons = {
        "About Us" : "#about",
        "Services" : "#services",
        "Portfolio": "#portfolio",
        "Team" : "#team",
        "Contact Us" : "#contact"
    };
    return (
        <>
            <header id="header" className="fixed-top">
                <div className="container-fluid d-flex">

                    <div className="logo mr-auto">
                        <h1 className="text-light"><a href="index.html"><span>Ninestars</span></a></h1>
                    </div>

                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li className="active"><a href="index.html">Home</a></li>
                            {/* console.log(key + " : " + navbarButtons[key]); */}
                            {
                                Object.keys(navbarButtons).map((key,index) => ( 
                                    <NavbarButton name={key} id={navbarButtons[key]} key={index}></NavbarButton>
                                ))
                            }
                            <li className="get-started"><a href="#about">Get Started</a></li>
                        </ul>
                    </nav>

                </div>
            </header>
        </>
    );
}

export default Header;