import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <footer className='bg-[#0A0A0A] text-[#f5f1eb] mt-10 sm:mt-14 md:mt-20'>

            {/* ================= FOOTER MAIN ================= */}
            <div className='px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-10 md:py-14'>

                {/* Main Grid Section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2.5fr_1fr_1fr_1.5fr] gap-8 sm:gap-10 lg:gap-16'>

                    {/* ================= COLUMN 1: ABOUT ================= */}
                    <div>
                        <img
                            className='w-32 sm:w-36 md:w-44 mb-4 sm:mb-5 md:mb-6'
                            src={assets.logo}
                            alt='Salar Jung Museum'
                        />

                        <p className='max-w-lg text-[#999999] text-xs sm:text-sm leading-6 sm:leading-7'>
                            Discover the rich heritage of India and the world
                            through an extraordinary collection of art,
                            sculptures, manuscripts, textiles and historical
                            treasures at Salar Jung Museum.
                        </p>

                        {/* Museum Location */}
                        <div className='mt-4 sm:mt-5 md:mt-6'>
                            <p className='text-[#C49A6C] text-xs sm:text-sm font-medium'>
                                VISIT US
                            </p>
                            <p className='text-[#999999] text-xs sm:text-sm mt-1.5 sm:mt-2 leading-5 sm:leading-6'>
                                Salar Jung Museum
                                <br />
                                Hyderabad, Telangana, India
                            </p>
                        </div>
                    </div>

                    {/* ================= COLUMN 2: QUICK LINKS ================= */}
                    <div>
                        <p className='text-[#C49A6C] text-xs sm:text-sm font-medium mb-3 sm:mb-4'>
                            QUICK LINKS
                        </p>
                        <ul className='flex flex-col gap-2 text-xs sm:text-sm text-[#999999]'>
                            <li><Link to='/' className='hover:text-[#C49A6C] transition-colors'>Home</Link></li>
                            <li><Link to='/about' className='hover:text-[#C49A6C] transition-colors'>About Us</Link></li>
                            <li><Link to='/galleries' className='hover:text-[#C49A6C] transition-colors'>Galleries</Link></li>
                            <li><Link to='/tickets' className='hover:text-[#C49A6C] transition-colors'>Buy Tickets</Link></li>
                        </ul>
                    </div>

                    {/* ================= COLUMN 3: TIMINGS ================= */}
                    <div>
                        <p className='text-[#C49A6C] text-xs sm:text-sm font-medium mb-3 sm:mb-4'>
                            VISITING HOURS
                        </p>
                        <p className='text-xs sm:text-sm text-[#999999] leading-6'>
                            10:00 AM - 5:00 PM
                            <br />
                            <span className='text-red-400'>Closed on Fridays</span>
                        </p>
                    </div>

                    {/* ================= COLUMN 4: CONTACT / NEWSLETTER ================= */}
                    <div>
                        <p className='text-[#C49A6C] text-xs sm:text-sm font-medium mb-3 sm:mb-4'>
                            GET IN TOUCH
                        </p>
                        <p className='text-xs sm:text-sm text-[#999999] leading-6'>
                            Email: contact@salarjungmuseum.in
                            <br />
                            Phone: +91 40 2452 1323
                        </p>
                    </div>

                </div> {/* Closing tag for Grid */}

                {/* ================= DIVIDER & BOTTOM BAR ================= */}
                <div className='border-t border-[#2f2924] mt-8 sm:mt-10 md:mt-12 pt-5 sm:pt-6'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4'>

                        <p className='text-[9px] sm:text-xs text-[#777777] text-center md:text-left'>
                            ©TCS Research and Innovation. All rights reserved.
                        </p>

                        <div className='flex gap-4 sm:gap-5 md:gap-6 text-[9px] sm:text-xs text-[#777777]'>
                            <Link to='/privacy' className='hover:text-[#C49A6C] transition-colors'>
                                Privacy
                            </Link>
                            <Link to='/terms' className='hover:text-[#C49A6C] transition-colors'>
                                Terms
                            </Link>
                            <Link to='/contact' className='hover:text-[#C49A6C] transition-colors'>
                                Contact
                            </Link>
                        </div>

                    </div>
                </div>

            </div> {/* Closing tag for Container */}

        </footer>
    )
}

export default Footer