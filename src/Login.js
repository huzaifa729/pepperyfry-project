import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className="Login-page">

            <div className="form">
                <div className="modal">
                    <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_IMG_12Oct.jpg" alt="any" />
                </div>

                <div className="dan">
                    <div class="jiop">
                        <input type="name" required />
                        <label>Name</label>
                        <span></span>
                    </div>


                    <div class="jiop">
                        <input type="mobile-number" required />
                        <label>Mobile Number</label>
                        <span></span>
                    </div>


                    <div class="jiop">
                        <input type="email" required />
                        <label>Email ID</label>
                        <span></span>
                    </div>

                    <div class="jiop">
                        <input type="password" required />
                        <label>Password</label>
                        <span></span>
                    </div>

                    <div className="botn">
                        <a href="/"><button className="btnse">Register</button></a>
                    </div>


                    <div className="idea">
                        <span className="mean">By registering you agree to our
                            <a className="class" href="/">Terms & Condition</a>
                        </span>
                    </div>


                    <div className="dubs">
                        <a href="/"><button className="buttonse">Existing User? Log in</button></a>
                    </div>

                    <div className="fini">
                        <span className="op">OR Continue with</span>

                        <span className="cont">
                            <a href="/">
                                <img src="https://ii1.pepperfry.com/images/social_login_fb_2x.png" alt="no" /></a></span>

                        <span className="cont">
                            <a href="/">
                                <img src="https://ii1.pepperfry.com/images/social_login_google_2x.png" alt="no" /></a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
