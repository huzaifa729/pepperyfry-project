import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css'


function Login() {
    const history = useHistory();
  const [name, setName] = useState(''); 
  const [mobilenumber, setMobileNumber] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 

  const signIn = e => {
    e.preventDefault();

    auth
       .signInWithEmailAndPassword(email,password)
        .then((auth)=>{
         
            if(auth){
                history.push('/')
            }
         })
         
         .catch(error => alert(error.message))
  }


  const register = e => {
     e.preventDefault();

     auth
     .createUserWithEmailAndPassword(email,password)
     .then((auth)=>{
         
        if(auth){
            history.push('/')
        }
     })

     .catch(error => alert(error.message))
     
  }

    return (
        <div className="Login-page">

            <div className="form">
                <div className="modal">
                    <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_IMG_12Oct.jpg" alt="any" />
                </div>

                <div className="dan">
                    <div class="jiop">
                        <input type="name" value={name} onChange={e => setName (e.target.value)} required />
                        <label>Name</label>
                        <span></span>
                    </div>


                    <div class="jiop">
                        <input type="mobile-number" value={mobilenumber} onChange={e => setMobileNumber (e.target.value)} required />
                        <label>Mobile-Number</label>
                        <span></span>
                    </div>


                    <div class="jiop">
                        <input type="email" value={email} onChange={e => setEmail (e.target.value)} required />
                        <label>Email ID</label>
                        <span></span>
                    </div>

                    <div class="jiop">
                        <input type="password" value={password} onChange={e => setPassword (e.target.value)} required />
                        <label>Password</label>
                        <span></span>
                    </div>

                    <div className="botn">
                        <button type='submit' onClick={register} className="btnse">Register</button>
                        <button type='submit' onClick={signIn} className="btnse">Sign-In</button>
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
