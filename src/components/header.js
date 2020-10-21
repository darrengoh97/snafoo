import React, {useEffect, useState} from 'react';
import { CSSTransition } from 'react-transition-group';

import { disableBodyScroll, enableBodyScroll } from "../utils";

export default function Header() {
    const [expanded, toggleExpanded] = useState(false);

    useEffect(() => {
        if (expanded) {
            disableBodyScroll();
        } else {
            enableBodyScroll();
        }
    }, [expanded])

    return (
        <header className="site-hd">
            <div className="masthead u-constrainer">
                <a className={`logo stickToFront ${expanded ? 'fill-teal' : ''}`}>
                    <svg viewBox="0 0 900 300">
                        <use href="#logo"></use>
                    </svg>
                </a>
                <nav className="hList">
                    <a className="navLink" href="#home">Home</a>
                    <a className="navLink" href="#current">Current</a>
                    <a className="navLink" href="#voting">Voting</a>
                    <a className="navLink" href="#sign-up">Sign Up</a>
                </nav>
                <div className="mobileHamburger stickToFront">
                    <button
                        onClick={() => {toggleExpanded(!expanded)}}
                        className={`navModal-toggle collapsed mobileLink ${expanded ? 'active' : ''}`}
                    >
                        <span className="icon-bar icon-bar1" />
                        <span className="icon-bar icon-bar2" />
                        <span className="icon-bar icon-bar3" />
                    </button>
                </div>
                <CSSTransition in={!!expanded} timeout={300} classNames="slide">
                    <div className="mobileNavModal exit-done" id="testing">
                        <ul className="navList">
                            <li className="navList-item">
                                <a className="navLink_dark strong" href="#home" onClick={() => toggleExpanded(false)}>Home</a>
                            </li>
                            <li className="navList-item">
                                <a className="navLink_dark strong" href="" onClick={() => toggleExpanded(false)}>Schedule</a>
                            </li>
                            <li className="navList-item">
                                <a className="navLink_dark strong" href="" onClick={() => toggleExpanded(false)}>Contact</a>
                            </li>
                            <li className="navList-item">
                                <a className="navLink_dark strong" href="" onClick={() => toggleExpanded(false)}>Sign In</a>
                            </li>
                        </ul>
                    </div>
                </CSSTransition>
            </div>
        </header>
    )
}