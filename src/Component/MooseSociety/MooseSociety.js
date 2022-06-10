
const MooseSociety = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200 px-24">
                <div class=" flex justify-center max-w-7xl gap-4 p-4 flex-col lg:flex-row-reverse">
                    <div className="bg-color rounded-lg pt-12 px-20 pb-60">
                        <div>
                            <h1 class="text-4xl font-bold text-center text-white">This Is Where The NFTs That Have Not Been Staked Yet Will Show Up.</h1>
                        </div>
                        <div>
                            <p class="py-6 text-center">They will be able to click on them and send them over to the left side and then choose to stake the pair.</p>
                        </div>
                        <div className="text-center">
                            <h5 className="text-white">Tommy Burton</h5>
                            <p>Founder NiFTy</p>
                        </div>
                    </div>
                    <div className=" w-3/4">

                        <div>
                            <h5 className="text-white text-bold">Moose Society Staking</h5>
                            <h1 class="text-7xl font-bold text-white">Send Them Off!</h1></div>
                        <div>
                            <p class="py-6">This is where you choose 2 moose to send off for 90 days! Once they return, you will be able to claim a Free Mini Moose! Choose 2 from the list to send them off!</p>
                        </div>
                        <div className="flex">
                            <img className="w-1/2" src="https://moosesocietynft.io/wp-content/uploads/elementor/thumbs/Brown-pm0wqykqc15sxxrgma49b9qoe7cjlrhhsc3yrv709k.png" alt="" />
                            <img className="w-1/2" src="https://moosesocietynft.io/wp-content/uploads/elementor/thumbs/Zombie-pm0wttyz7t3cf1l9uit7xjndql6x4gvyujvdkaxp94.png" alt="" />
                        </div>
                        <div className=" mt-2 flex justify-center">
                            <a className="uppercase dashboard px-8 py-5">stake</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MooseSociety;