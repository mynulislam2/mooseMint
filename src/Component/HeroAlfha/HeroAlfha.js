import { FaArrowRight } from "react-icons/fa";
import { Slide } from "react-reveal";
import Count from "../Counter/Count";
import Header from "../Header/Header";
import HeroAlfhaImg from './images/alfhahero.png';
const HeroAlfha = () => {
    return (
        <div className='bg'>
            <Header></Header>
            <hr className='border-custom' />
            <div class="hero  min-h-screen  lg:px-28 sm:px-0 text-white">
                <div class="flex justify-center max-w-8xl gap-x-10 p-4 flex-col md:flex-row-reverse mt-10">
                    <Slide bottom>

                        <div className='moose-Card'>
                            <img src={HeroAlfhaImg} class=" lg:max-w-sm   rounded-lg shadow-2xl moose-image" />
                        </div>
                    </Slide>
                    <div className="sm:w-full lg:w-3/5">
                        <div >
                            <h1 class="text-7xl font-bold ">
                                Society Alpha Island Club

                            </h1>
                            <div className='h-8 w-28 bg-warning  particle'></div>

                        </div>

                        <p class="py-6 pr-10 text-lg">
                            The Society Alpha Island Club Was Created To Give Smaller Investors Access to Bigger Projects Through Fractional Ownership of a Portfolio of NFTs/Crypto/ICO's & IRL Investments.
                        </p>
                        <div className='flex items-center gap-x-4  '>
                            <button class="dashboard px-8 py-4 lg:w-52 sm:w-40 h-14 flex items-center justify-center gap-x-2">Explore Now   <FaArrowRight /></button>
                            <button className='lg:w-36 sm:w-36 border-gray-400 rounded-md h-14 border text-gray-400'>Learn More</button>
                        </div>
                        <div>
                            <Count Count1={100} Count2={1} Count3={105}></Count>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeroAlfha;