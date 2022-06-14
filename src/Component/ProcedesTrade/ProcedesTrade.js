import purpleneon from './images/purlpleneon.jpg';
import './ProcedesTrade.css';
const ProcedesTrade = () => {
    const procedeCard = [
        {
            percentage: 60,
            description: "Directly back into the fund to keep growing the DAO. We want this to be a long term investment."
        },
        {
            percentage: 20,
            description: "Directly back into the fund to keep growing the DAO. We want this to be a long term investment."
        },
        {
            percentage: 10,
            description: "Directly back into the fund to keep growing the DAO. We want this to be a long term investment."
        },
        {
            percentage: 10,
            description: "Directly back into the fund to keep growing the DAO. We want this to be a long term investment."
        }
    ]


    return (
        <div className='px-20 mt-20'>
            <div className='sm:block lg:flex '>
                <div className=' text-white'>
                    <h6 className='text-sm'>Allocation Of</h6>
                    <h1 className='text-4xl sm:text-4xl lg:text-7xl '>Proceeds From A Trade</h1>
                    
                </div>
                <p className='text-xl text-white lg:h-8 lg:mt-24 sm:mt-5 sm:h-20'>
                    We will take the profits from the fund and allocate them below. Each being paid from the treasury account controlled by the DAO
                </p>
            </div>
            <div className='sm:block lg:flex gap-x-8' >
                <div className="grid sm:grid-cols-1 lg:grid-cols-2 sm:w-full lg:w-3/5 gap-3 bgProceedTrade sm:mt-16 lg:mt-8">
                    {
                        procedeCard.map((data) => {
                            return <div className="bg-trade ">
                                <div>
                                    <b>{data.percentage}</b>
                                    <p className='mt-5'>
                                        {data.description}
                                    </p>
                                </div>

                            </div>
                        })
                    }
                </div>
                <div >
                    <img className='tradeimg w-96 h-96 rounded-xl' src={purpleneon} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ProcedesTrade;