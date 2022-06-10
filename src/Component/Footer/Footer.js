import React from 'react';
import { FaArrowRight, FaDiscord, FaInstagram, FaTwitch, FaTwitter } from "react-icons/fa";
import { Slide, Zoom } from 'react-reveal';
const Footer = () => {
    return (
        <Zoom>
            <div className='lg:px-28 sm:px-5 pt-16'>
                <footer class="footer lg:p-20 sm:p-10  footer-bg  text-base-content">
                    <Slide bottom>
                        <div className='text-white'>
                            <span class=" text-lg text-white">Newsletter</span>
                            <div class="form-control w-96">
                                <h1 className='text-4xl font-bold'>Join Our Newsletter</h1>
                                <p className='text-lg mt-3 '>You never know what you might get from us. We probably won't send you anything to crazy!</p>
                                <div className='flex gap-x-2 mt-5 '>
                                    <input type="text" placeholder="username@site.com" class="input bg-white input-bordered w-full pr-16" />
                                    <a class="dashboard uppercase flex items-center gap-x-1 dashboardbtn">Subscribe<FaArrowRight /></a>
                                </div>
                            </div>
                        </div></Slide>
                    <Slide bottom>                <div>
                        <span><img width={200} src="https://moosesocietynft.io/wp-content/uploads/2022/03/MOOSE-SOCIETY-LOGO-1-1536x216.png" alt="" /></span>
                        <p className=' w-72 text-white text-lg'>Thank you for checking out our site! We would love for you to become part of our herd!</p>
                        <div className='flex gap-x-3'>
                            <a className='text-2xl'><FaTwitter /></a>
                            <a className='text-2xl'><FaInstagram /></a>
                            <a className='text-2xl'><FaDiscord /></a>
                            <a className='text-2xl'><FaTwitch /></a>
                        </div>

                    </div></Slide>
                    <Slide bottom>                <div className='text-white'>
                        <span class="text-lg text-white">Quick Menu</span>
                        <a class="link link-hover ">Home</a>
                        <a class="link link-hover">Terms & Conditions</a>
                        <a class="link link-hover">Contact Us</a>
                        <a class="link link-hover">Story</a>
                    </div></Slide>


                </footer>

                <footer class="footer px-10 py-10 border-t text-base-content border-base-300 ">
                    <div class="items-center grid-flow-col">
                        <p >
                            Copyright © NiFTy | All rights reserved</p>
                    </div>
                    <div class="md:place-self-center md:justify-self-end">
                        <div class="grid grid-flow-col  gap-4 text-warning">
                            <a>Home</a>
                            <a> Mini Moose</a>
                            <a>Utilities</a>
                            <a>Society Rewards</a>
                            <a>Merch</a>
                        </div>
                    </div>
                </footer>
            </div></Zoom>
    );




};

export default Footer;