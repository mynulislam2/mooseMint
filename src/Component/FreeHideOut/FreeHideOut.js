import { FaArrowRight } from 'react-icons/fa';
import Count from '../Counter/Count';
import './FreshHireOut.css';
const FreeHideOut = () => {
    const MintCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    return (
        <div className='FreshHideOutBg relative'>

            <div>
                <h1 className="lg:text-6xl md:text-5xl title font-bold text-white">Claim Your Free Hideout!</h1>
                <p className='lg:text-lg sm:text-sm Freehidepara mt-5'>
                    ALL MOOSE SOCIETY HOLDERS ARE ELIGIBLE TO CLAIM ONE FREE HIDEOUT! <br />

                    Mint Price: .005 ETH + Gas Mint Max: NO LIMIIT
                </p>
                <div className='flex items-center gap-x-3 mt-5'>
                    <a className='dashboard flex items-center lg:px-2 sm:px-1 lg:w-56 sm:w-48 py-2 gap-x-3 justify-center lg:text-lg sm:text-sm'>Claim Your Free Hideout <FaArrowRight />
                    </a>
                    <div class="form-control py-2 w-28 text-center">

                        <select class="select  select-bordered FreeHideOutPick">
                            <option disabled selected>Pick one</option>
                            {MintCount.map((d) => <option>{d}</option>)}
                        </select>
                    </div>
                </div>

                <div>
                    <Count Count1={1250} Count2={1250} Count3={50}></Count>
                </div>
            </div>

        </div>
    );
};

export default FreeHideOut;