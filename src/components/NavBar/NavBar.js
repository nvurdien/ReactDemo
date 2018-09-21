import React from 'react';

const NavBar = ({searchChange}) => {
        return (
            <nav className="uk-navbar-container" uk-navbar="" uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
                <div className="nav-overlay uk-navbar-left">
                    <ul className="uk-navbar-nav uk-nav-default" uk-scrollspy-nav="closest: li; scroll: true">
                        <li><a href="#cards">Cards</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="nav-overlay uk-navbar-right">

                    <a className="uk-navbar-toggle" uk-search-icon=""
    uk-toggle="target: .nav-overlay; animation: uk-animation-fade" dangerouslySetInnerHTML={{__html: ""}} href="#search"/>

                </div>

                <div className="nav-overlay uk-navbar-left uk-flex-1" hidden>

                    <div className="uk-navbar-item uk-width-expand">
                        <form className="uk-search uk-search-navbar uk-width-1-1">
                            <input className="uk-search-input" onChange={searchChange} type="search" placeholder="Search..." autoFocus='' />
                        </form>
                    </div>

                    <a className="uk-navbar-toggle" uk-close=""
    uk-toggle="target: .nav-overlay; animation: uk-animation-fade" dangerouslySetInnerHTML={{__html: ""}} href="#search"/>

                </div>
            </nav>
        )};

export default NavBar;
