import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import inProcess from '../pages/inProcess'

// book visit
const BookAppointment = () => {

    const navigate = useNavigate()

    return (
        <div className='
            my-8
            sm:my-10
            md:my-16
            px-4
            sm:px-5
            md:px-10
        '>

            {/* ================= MAIN BANNER ================= */}

            <div
                className='
                    relative
                    w-full

                    min-h-[330px]
                    sm:min-h-[400px]
                    md:min-h-[550px]

                    rounded-xl
                    sm:rounded-2xl

                    overflow-hidden
                    bg-cover
                    bg-center

                    flex
                    items-center
                '
                style={{
                    backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3xjqBZ9i95M1FHX5bQ74tPDS-_dQtFpxjpFzYD5H-uQ&s=10)`
                }}
            >

                {/* ================= DARK OVERLAY ================= */}

                <div className='absolute inset-0 bg-black/55'></div>


                {/* ================= CONTENT ================= */}

                <div className='
                    relative
                    z-10

                    px-5
                    sm:px-8
                    md:px-16
                    lg:px-20

                    py-8
                    sm:py-10
                    md:py-12

                    max-w-3xl
                '>

                    {/* Small Heading */}

                    <p className='
                        text-[#C49A6C]

                        text-[10px]
                        sm:text-xs
                        md:text-base

                        uppercase
                        tracking-[0.15em]
                        sm:tracking-[0.2em]

                        mb-2
                        sm:mb-3
                        md:mb-4
                    '>
                        Plan Your Visit
                    </p>


                    {/* Main Heading */}

                    <h1 className='
                        font-serif

                        text-3xl
                        sm:text-4xl
                        md:text-6xl

                        font-semibold
                        leading-tight

                        text-[#f5f1eb]

                        max-w-[280px]
                        sm:max-w-xl
                        md:max-w-3xl
                    '>
                        Book Your Museum Visit
                    </h1>


                    {/* Description */}

                    <p className='
                        mt-3
                        sm:mt-4
                        md:mt-5

                        text-[#d0d0d0]

                        text-xs
                        sm:text-sm
                        md:text-lg

                        leading-relaxed

                        max-w-[280px]
                        sm:max-w-lg
                        md:max-w-xl
                    '>
                        Plan your visit to the Salar Jung Museum and
                        explore its remarkable collection of art,
                        sculptures, manuscripts and historical treasures.
                    </p>


                    {/* Button */}

                    <button
                        onClick={() => navigate("/in-process")}
                        className='
                            mt-5
                            sm:mt-6
                            md:mt-8

                            bg-[#B98255]
                            text-white

                            px-5
                            sm:px-6
                            md:px-8

                            py-2.5
                            sm:py-3
                            md:py-4

                            rounded-sm

                            text-xs
                            sm:text-sm
                            md:text-base

                            font-medium

                            hover:bg-[#A66D42]
                            hover:scale-105

                            transition-all
                            duration-300
                        '
                    >
                        Book My Visit
                    </button>

                </div>

            </div>

        </div>
    )
}

export default BookAppointment