import React from 'react';

const MooseSociety2 = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200 px-24">
                <div class=" flex justify-center max-w-7xl gap-4 p-4 flex-col lg:flex-row-reverse">
                    <div className=" w-3/4">

                        <div>
                            <h5 className="text-white text-bold">Moose Society Staking</h5>
                            <h1 class="text-7xl font-bold text-white">Bring Them Back!</h1></div>
                        <div>
                            <p class="py-6">You will be able to watch the timer as your moose make their journey! Once complete, the timer will count down and you will be able to un-stake them and claim your Free Mini Moose</p>
                        </div>
                        <div className="flex">
                            <img className="w-1/2" src="https://moosesocietynft.io/wp-content/uploads/elementor/thumbs/Green-pm0wsno8o9hfwlappij0bcbn08zei381oqiiyuof14.png" alt="" />
                            <img className="w-1/2" src="https://moosesocietynft.io/wp-content/uploads/elementor/thumbs/Orange-pm0wt3nhwg3bdyni47fnzqah3ssn4xzhexls4k0q3c.png" alt="" />
                        </div>
                        <div className=" mt-2 flex justify-center">
                            <a className="uppercase dashboard px-8 py-5">stake</a>

                        </div>
                    </div>
                    <div className="bg-color rounded-lg pt-12 px-20 pb-60">
                        <div>
                            <h1 class="text-4xl font-bold text-center text-white">This Is Where The NFTs That Have Been Staked Will Show Up.</h1>
                        </div>
                        <div>
                            <p class="py-6 text-center">They should be able to see the timers on them and how long they have left to unstake.</p>
                        </div>
                        <div className="text-center">
                            <h5 className="text-white">Tommy Burton</h5>
                            <p>Founder NiFTy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MooseSociety2;