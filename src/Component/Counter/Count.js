import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
const Count = ({Count1,Count2,Count3}) => {
    return (
        <div className='count'>
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {(isVisible) => (
                    <div className='lg:flex sm:block gap-x-5 items-center h-28 text-5xl'>
                        <div className='text-center' style={{ height: 80, color: 'white' }}>
                            <p>{isVisible ? <CountUp end={Count1} /> : null}</p>
                            
                            <p className='uppercase text-sm'>Moose</p>
                        </div>
                    
                        <div className='separator' style={{ height: 80, color: 'white'}}>
                           <p>{isVisible ? <CountUp end={Count2} /> : null}+</p> 
                            <p className='uppercase text-sm'>Traits</p>
                        </div>
                        
                        <div className='text-center' style={{ height: 80, color: 'white' }}>
                            <p>{isVisible ? <CountUp end={Count3} /> : null}</p>
                            
                            <p className='uppercase text-sm'>ultra rare nfts</p>
                        </div>
                    </div>

                )}
            </VisibilitySensor>
        </div>
    );
};

export default Count;