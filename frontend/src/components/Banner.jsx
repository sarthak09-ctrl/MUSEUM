import React from 'react'
import { useNavigate } from 'react-router-dom'
import trails from '../assets/trails.png'

// personal experience
const Banner = () => {

    const navigate = useNavigate()

    return (
        <div
            className='
                relative
                w-full

                h-[210px]
                sm:h-[260px]
                md:h-[400px]
                lg:h-[450px]

                overflow-hidden
                bg-cover
                bg-center
            '
            style={{ backgroundImage: `url(${trails})` }}
        >

            {/* ------- Dark Overlay ------- */}
            <div className='absolute inset-0 bg-black/45'></div>


            {/* ------- Content ------- */}
            <div
                className='
                    relative
                    z-10
                    h-full
                    flex
                    flex-col
                    justify-center

                    px-4
                    sm:px-6
                    md:px-12
                    lg:px-20
                '
            >

                {/* Small Heading */}
                <p
                    className='
                        text-[#c49a6c]

                        text-[8px]
                        sm:text-[10px]
                        md:text-sm

                        uppercase
                        tracking-[0.12em]
                        sm:tracking-wider

                        mb-1
                        sm:mb-2
                        md:mb-3
                    '
                >
                    Personalised Experience
                </p>


                {/* Main Heading */}
                <h1
                    className='
                        text-white
                        font-serif

                        text-2xl
                        sm:text-3xl
                        md:text-4xl
                        lg:text-5xl

                        font-semibold
                        leading-tight

                        max-w-[260px]
                        sm:max-w-md
                        md:max-w-xl
                    '
                >
                    Create Your Own Trail
                </h1>


                {/* Button */}
                <button
                    onClick={() => {
                        navigate('/create-trail')
                        scrollTo(0, 0)
                    }}
                    className='
                        bg-[#b98255]
                        text-white

                        text-[9px]
                        sm:text-xs
                        md:text-sm
                        lg:text-base

                        px-4
                        sm:px-5
                        md:px-7
                        lg:px-8

                        py-2
                        sm:py-2.5
                        md:py-3
                        lg:py-4

                        mt-3
                        sm:mt-4
                        md:mt-6

                        w-fit

                        hover:bg-[#a66d42]
                        transition-all
                        duration-300
                    '
                >
                    Start Building
                </button>

            </div>

        </div>
    )
}

export default Banner