import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export default function MobileHamburger() {
    const [expanded, toggleExpanded] = useState(false);

    return(
        <>
            <div className="mobileHamburger">
                <button
                    onClick={() => {toggleExpanded(true)}}
                    className={`navbar-toggle collapsed mobileLink ${expanded ? 'active' : ''}`}
                >
                    <span className="icon-bar icon-bar1" />
                    <span className="icon-bar icon-bar2" />
                    <span className="icon-bar icon-bar3" />
                </button>
            </div>
            <CSSTransition in={!!expanded} timeout={300} classNames="slide">
                <div className="navbar-search-box exit-done">
                    <div>
                        <ul>
                            <li>
                                <a className="navLink" href="#home">Home</a>
                            </li>
                            <li>
                                <a className="navLink" href="#current">Current</a>
                            </li>
                            <li>
                                <a className="navLink" href="#voting">Voting</a>
                            </li>
                            <li>
                                <a className="navLink" href="#sign-up">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </CSSTransition>
        </>
    )
}