import React from 'react';

export default function SignUp() {
    return (
        <div className="site-bd-section site-bd-section_gray" id="sign-up">
            <div className="u-constrainer">
                <div className="layoutPanel">
                    <div className="layoutPanel-hd">
                        <div className="layoutPanel-hd-title">
                            <h2 className="hdg hdg_2 mix-hdg_dark">Sign up for Snafoo updates!</h2>
                        </div>
                    </div>
                    <div className="layoutPanel-bd">
                        <div className="grid">
                            <div className="grid-col grid-col_2of3">
                                <form className="inputForm" onSubmit={() => {}} method="post">
                                    <div className="inputForm-item inputForm-item_half">
                                        <label className="u-isVisuallyHidden" htmlFor="form-firstname">Fist Name</label>
                                        <input className="inputForm-text" type="text" name="" placeholder="Fist Name"/>
                                    </div>
                                    <div className="inputForm-item inputForm-item_half">
                                        <label className="u-isVisuallyHidden" htmlFor="form-lastname">Last Name</label>
                                        <input className="inputForm-text" type="text" name="" placeholder="Last Name"/>
                                    </div>
                                    <div className="inputForm-item inputForm-item_half">
                                        <label className="u-isVisuallyHidden" htmlFor="form-email">Email</label>
                                        <input className="inputForm-text" type="text" name="" placeholder="Email"/>
                                    </div>
                                    <div className="inputForm-item inputForm-item_half">
                                        <label className="u-isVisuallyHidden" htmlFor="form-phonenumber">Phone
                                            Number</label>
                                        <input className="inputForm-text" type="text" name=""
                                               placeholder="Phone Number"/>
                                    </div>
                                    <div className="inputForm-item">
                                        <label className="u-isVisuallyHidden" htmlFor="form-message">Message</label>
                                        <textarea className="inputForm-area" placeholder="Message"></textarea>
                                    </div>
                                    <div className="inputForm-item">
                                        <div className="inputForm-item-checkGroup">
                                            <input id="form-employee" className="u-isVisuallyHidden" type="checkbox"/>
                                            <label htmlFor="form-employee">I am a Nerdery employee</label>
                                        </div>
                                        <div className="inputForm-item-checkGroup">
                                            <input id="form-notify" className="u-isVisuallyHidden" type="checkbox"/>
                                            <label htmlFor="form-notify">Notify Me for Special Offers!</label>
                                        </div>
                                    </div>
                                    <div className="inputForm-item">
                                        <input className="btn btn_dark" type="submit" value="Sign Up"/>
                                    </div>
                                </form>
                            </div>
                            <div className="grid-col grid-col_1of3">
                                <div className="media u-vr_x4">
                                    <div className="media-figure">
                                        <svg className="icon">
                                            <use href="#icon-email"></use>
                                        </svg>
                                    </div>
                                    <div className="media-bd">
                                        <span className="assideText">info@nerdery.com</span>
                                    </div>
                                </div>
                                <div className="media u-vr_x4">
                                    <div className="media-figure">
                                        <svg className="icon">
                                            <use href="#icon-fax"></use>
                                        </svg>
                                    </div>
                                    <div className="media-bd">
                                        <span className="assideText">(877) 664.6373</span>
                                    </div>
                                </div>
                                <div className="media u-vr_x4">
                                    <div className="media-figure">
                                        <svg className="icon">
                                            <use href="#icon-locate"></use>
                                        </svg>
                                    </div>
                                    <div className="media-bd">
                                        <span className="assideText">
                                            The Nerdery Snafoo Team
                                            <br/>9555 James Ave. S.
                                            <br/>Bloomington MN, 55431
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}