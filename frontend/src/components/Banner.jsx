import React from 'react'
import { useNavigate } from 'react-router-dom'
import trails from '../assets/trails.png'
//personal experience
const Banner = () => {

    const navigate = useNavigate()

    return (
        <div
            className='relative w-full h-[360px] sm:h-[400px] md:h-[450px] overflow-hidden bg-cover bg-center'
            style={{ backgroundImage: `url(${trails})` }}
        >

            {/* ------- Dark Overlay ------- */}
            <div className='absolute inset-0 bg-black/45'></div>

            {/* ------- Content ------- */}
            <div className='relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20'>

                {/* Small Heading */}
                <p className='text-[#c49a6c] text-sm sm:text-base uppercase tracking-wider mb-3'>
                    Personalised Experience
                </p>

                {/* Main Heading */}
                <h1 className='text-white font-serif text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight'>
                    Create Your Own Trail
                </h1>

                {/* Button */}
                <button
                    onClick={() => {
                        navigate('/create-trail')
                        scrollTo(0, 0)
                    }}
                    className='bg-[#b98255] text-white text-sm sm:text-base px-8 py-4 mt-6 w-fit hover:bg-[#a66d42] transition-all duration-300'
                >
                    Start Building
                </button>

            </div>

        </div>
    )
}

export default Banner