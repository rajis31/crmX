import React from 'react'
import "./Login.css";

export default function Login() {
    return (
        <div className='container'>
            <h1>login</h1>
            <form>
                <label for="username">username</label>
                <input type="text" name="username" placeholder="Type Your Username"/>
                <label for="password">password</label>
                <input type="text" name="password" placeholder="Type Your Password"/>
            </form>
            <p class="forgot">forgot password?</p>
            <a href="#" className="btn"><button>login</button></a>
            <p className="signup">or sign up using</p>
            
            <div className="social">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-google"></i>
            </div>
                
            <div className="last-content">
                <p>or sign up using</p>
                <p className="uppercase">signup</p>
            </div>        
        </div>

    )
}
