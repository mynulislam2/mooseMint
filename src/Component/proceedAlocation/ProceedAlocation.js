import './ProceedAllocation.css';
const ProceedAlocation = () => {
    const AllocationSelection = [
        {
            percentage: 50,
            description: "50% of the gain on a trade goes right back into the fund, increasing the total buying power of the fund"
        },
        {
            percentage: 35,
            description: "35% of the gain gets distributed out via smart contract to all holders of the Alpha Island Club NFTs on once funds are settled in the fund wallet quarterly"
        },
        {
            percentage: 5,
            description: "We will make a quarterly donation to the Children’s Hospital. We started with the kids in mind, let’s keep it that way!​"
        },
        {
            percentage: 5,
            description: "Someone need to run this fund. This money is for the management team to keep everything up and running.​"
        },
        {
            percentage: 5,
            description: "5% goes to the initiator of the trade proposal that was approved"
        },
        {
            percentage: 50,
            description: "2% Royalties from secondary sales. 60% goes directly back into the fund to keep the pot growing 20% goes into a marketing fund directly for Alpha shares (to incentivize trading on secondary markets 10% goes to Children’s – Lets stick to the overall purpose of the organization from the beginning and keep giving to Children’s 10% goes to management of the Fund"
        },
    ]

    return (
        <div className='bg-proceedAlocation mt-10'>
            <div className="px-20 grid sm:grid-cols-1 lg:grid-cols-2  mt-5">
             <div className=''>
                <div className="text-white">
                    <h6 className="tex-sm">Alpha Island Club</h6>
                    <h1 className="text-7xl">Allocation Of Proceeds</h1>
                    <p className="text-xl">If any particular trade results in a gain, 100% of the cost basic of the trade goes back into the fund for the next investment.</p>
                </div>
            </div>
            <div>

                {
                    AllocationSelection.map((data) => {
                        return <div>
                            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                                <div class="collapse-title text-xl font-medium">
                                    {
                                        data.percentage
                                    } %                               </div>
                                <div class="collapse-content">
                                    <p>{data.description}</p>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
        </div>
        
    );
};

export default ProceedAlocation;