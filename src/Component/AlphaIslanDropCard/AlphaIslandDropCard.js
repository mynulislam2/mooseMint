import './AlphaIslandDropCard.css';
const AlphaIslandDropCard = () => {
    const card = [
        {
            image: "https://i.ibb.co/TtNcx92/card2.webp",
            idToken: '#01 - #33'
        },
        {
            image: "https://i.ibb.co/0BCfQpF/card3.webp",
            idToken: '#34 - #66'
        },
        {
            image: "https://i.ibb.co/g4Zx5rW/card3.webp",
            idToken: '#67 - #100'
        }
    ]


    return (
        <div className='bg-AlphaCard  lg:px-24 sm:px-0 py-40 '>
            <div className='flex justify-center pt-20 pb-16'>
                <div className='sm:w-full lg:w-2/4 text-white mt-10'>
                    <h6 className='text-xl text-center font-semibold'>Moose Society Alpha Island Club</h6>
                    <h2 className='text-7xl text-center font-bol mb-5'>The Island Drops</h2>
                    <p className='text-center text-xl d'>
                        We will be releasing 3 drops. Each drop will be released 30 days apart from each other. There are no rarity to these as each one holds the same return. The color of your NFT will be a designated role for you in the Alpha Discord.
                    </p>

                </div>
            </div>
            <div className=' grid sm:grid-cols-1 lg:grid-cols-3 sm:gap-x-0 lg:gap-x-16 gap-y-10'>
                {
                    card.map((data) => {
                        return <div class="card w-96 bg-base-100 shadow-xl card-custom">
                            <figure >
                                <img src={data.image} alt="Shoes" class="rounded-xl" />
                            </figure>
                            <div class="text-center bg-token">
                                <p>{data.idToken}</p>
                            </div>
                        </div>
                    })

                }
            </div>
        </div>
    );
};

export default AlphaIslandDropCard;