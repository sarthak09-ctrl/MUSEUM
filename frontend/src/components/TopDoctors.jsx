import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import inProcess from '../pages/inProcess'
//book visit
const BookAppointment = () => {

    const navigate = useNavigate()

    return (
        <div className='my-16 px-4 md:px-10'>

            {/* ================= MAIN BANNER ================= */}

            <div
                className='
                    relative
                    w-full
                    min-h-[450px]
                    md:min-h-[550px]
                    rounded-2xl
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
                    px-8
                    sm:px-12
                    md:px-16
                    lg:px-20
                    max-w-3xl
                '>

                    {/* Small Heading */}
                    <p className='
                        text-[#C49A6C]
                        text-sm
                        md:text-base
                        uppercase
                        tracking-[0.2em]
                        mb-4
                    '>
                        Plan Your Visit
                    </p>


                    {/* Main Heading */}
                    <h1 className='
                        font-serif
                        text-4xl
                        sm:text-5xl
                        md:text-6xl
                        font-semibold
                        leading-tight
                        text-[#f5f1eb]
                    '>
                        Book Your Museum Visit
                    </h1>


                    {/* Description */}
                    <p className='
                        mt-5
                        text-[#d0d0d0]
                        text-sm
                        sm:text-base
                        md:text-lg
                        leading-relaxed
                        max-w-xl
                    '>
                        Plan your visit to the Salar Jung Museum and
                        explore its remarkable collection of art,
                        sculptures, manuscripts and historical treasures.
                    </p>


                    {/* Button */}
                    <button
                        onClick={() => navigate("/in-process")}
                        className='
                            mt-8
                            bg-[#B98255]
                            text-white
                            px-8
                            py-4
                            rounded-sm
                            text-sm
                            sm:text-base
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