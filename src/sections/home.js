import React from 'react';

export default function Home() {
    return (
        <div className="site-bd-section" id="home">
            <div className="heroBanner">
                <div className="heroBanner-content u-constrainer">
                    <div className="heroBanner-content-hd">
                        <h1 className="hdg hdg_1">Nerdery Snack Food System</h1>
                    </div>
                    <div className="heroBanner-content-bd">
                        <p className="copy">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className="heroBanner-content-ft">
                        <button className="btn" onClick={() => {window.location.href = "#voting"}}>Vote Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}