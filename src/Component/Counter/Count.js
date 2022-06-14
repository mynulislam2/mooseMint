import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
const Count = ({ Count1, Count2, Count3 }) => {
    return (
        <div className='count'>
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {(isVisible) => (
                    <div className='lg:flex sm:flex gap-x-5 items-center h-28 text-5xl cutomCount'>
                        <div className=' w-40' style={{ height: 80, color: 'white' }}>
                            <div>
                                <p>{isVisible ? <CountUp end={Count1} /> : null}</p>

                                <p className='uppercase text-sm'>Available</p>
                            </div>
                        </div>

                        <div className='separator w-56 flex justify-center' style={{ height: 80, color: 'white' }}>
                            <div>
                                <p>{isVisible ? <CountUp end={Count2} /> : null}+</p>
                                <p className='uppercase text-sm'>Ownership</p>
                            </div>

                        </div>

                        <div className='text-center w-40' style={{ height: 80, color: 'white' }}>
                            <div>
                                <p>{isVisible ? <CountUp end={Count3} /> : null}</p>

                                <p className='uppercase text-sm'>Auctions</p>
                            </div>
                        </div>
                    </div>

                )}
            </VisibilitySensor>
        </div>
    );
};

export default Count;