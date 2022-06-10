import React from 'react';
import { FaRegGem } from "react-icons/fa";
import Count from '../Counter/Count';
import Header from '../Header/Header';
import Slide from 'react-reveal/Slide';

const Hero = () => {
    const MintCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div className='bg'>
            <Header></Header>
            <hr className='border-custom' />
            <div class="hero  min-h-screen  lg:px-28 sm:px-0 text-white">
                <div class="flex justify-center max-w-7xl gap-4 p-4 flex-col md:flex-row-reverse">
                    <Slide bottom>

                        <div className='moose-Card'>
                            <img src="https://moosesocietynft.io/wp-content/uploads/elementor/thumbs/website-graphics2-pm0u2ukuay0ypbwhoxxh6w6p0ww87janzqbqpa26rs.png" class=" lg:max-w-sm   rounded-lg shadow-2xl moose-image" />
                        </div>
                    </Slide>
                    <div>
                        <div >
                            <h1 class="text-7xl font-bold ">
                                Mint A Moose!

                            </h1>
                            <div className='h-8 w-28 bg-warning  particle'></div>

                        </div>

                        <p class="py-6 pr-10">Ready to join the herd and start your journey? Minting one gets you access to the private discord. Minting 2 gets you started on your path to a Free Mini Moose! Yup, Free! Just stake them for 90 days to earn an adorable Mini Moose to add to your collection!</p>
                        <div className='flex items-center gap-x-4  '>
                            <button class="dashboard px-8 py-4 lg:w-52 sm:w-40 h-14 flex items-center justify-center gap-x-2">Mint-A-Moose   <FaRegGem /></button>
                            <div class="form-control py-1  moose-count">

                                <select class="FreeHideOutPick select-bordered">
                                    <option disabled selected>Pick one</option>
                                    {MintCount.map((d) => <option>{d}</option>)}
                                </select>
                            </div>
                        </div>
                        <div>
                            <Count Count1={5000} Count2={200} Count3={15}></Count>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Hero;