import React from 'react';

export default function Footer() {
    return (
        <footer className="site-ft">
            <div className="footer u-constrainer">
                <div className="footer-primary">
                    <a className="footLogo">
                        <svg viewBox="0 0 900 300">
                            <use href="#logo"></use>
                        </svg>
                    </a>
                </div>
                <div className="footer-secondary">
                    <nav className="hList hList_divided u-vr_x3">
                        <a className="navLink navLink_dark" href="#home">Home</a>
                        <a className="navLink navLink_dark" href="#current">Current</a>
                        <a className="navLink navLink_dark" href="#voting">Voting</a>
                        <a className="navLink navLink_dark" href="#sign-up">Sign Up</a>
                    </nav>
                    <small className="finePrint">&copy; The Nerdery | 9555 James Ave S #245, Bloomington, MN
                        55431</small>
                </div>
            </div>
        </footer>
    )
}