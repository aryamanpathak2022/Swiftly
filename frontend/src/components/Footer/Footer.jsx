import React from "react";
import mail from "../../assets/message_icon.png";

const Footer = () => {
    return (
        <>
        <div className="bg-blue-500 h-96 flex">
            <div className="mt-20 ml-20 text-4xl">
                <div className="flex">
                    <img src={mail} className="mr-5"></img>
               <h1> Sign up to our newsletter</h1>
               </div>
               <input className="mt-10"/>

            </div>
            <div className="ml-80">
                    <div className="flex flex-col mt-20">
                        <h1 className="text-4xl">Contact us</h1>

                    </div>
                    <div>

                    </div>
            </div>
           
        </div>
        </>
    );
    }
export default Footer;