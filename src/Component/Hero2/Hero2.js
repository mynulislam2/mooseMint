import { FaArrowRight } from 'react-icons/fa';
import { Slide } from 'react-reveal';
import Header from '../Header/Header';

const Hero2 = () => {
    return (
        <div className='bg'>
            <Header></Header>
            <hr className='border-custom' />
            <h1 className='text-8xl font-medium text-white px-12'>Staking</h1>

            <div class="hero  min-h-screen  lg:px-28 sm:px-0 text-white">
                <div class="flex justify-center max-w-7xl gap-4 p-4 flex-col md:flex-row-reverse">
                    <Slide bottom>

                        <div className='moose-Card'>
                            <img src="https://moosesocietynft.io/wp-content/uploads/2022/06/Untitled-design.png" class=" lg:max-w-sm   rounded-lg shadow-2xl moose-image" />
                        </div>
                    </Slide>
                    <div>
                        <div >
                            <h1 class="text-8xl font-bold ">
                            Moose Society Side Quests

                            </h1>
                            <div className='h-8 w-28 bg-warning  particle'></div>

                        </div>

                        <p class="py-6 pr-10 text-lg">Staking (which we call side quests) is when you send off any 2 moose for 90 days and they return with a rescued Mini Moose! This is what you will use during the rest of the project!</p>
                        <div className='flex items-center gap-x-4  '>
                            <button class="dashboard px-8 py-4 lg:w-52 sm:w-40 h-14 flex items-center justify-center gap-x-2">Explore Now   <FaArrowRight /></button>
                            <button className='lg:w-36 sm:w-36 border-gray-400 rounded-md h-14 border text-gray-400'>Learn More</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero2;