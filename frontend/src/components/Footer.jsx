import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <footer className='bg-[#0A0A0A] text-[#f5f1eb] mt-20'>

            {/* ================= FOOTER MAIN ================= */}

            <div className='px-6 md:px-10 lg:px-16 py-14'>

                <div className='
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-[2.5fr_1fr_1fr_1.5fr]
                    gap-10
                    lg:gap-16
                '>

                    {/* ================= ABOUT ================= */}

                    <div>

                        {/* Logo */}
                        <img
                            className='w-44 mb-6'
                            src={assets.logo}
                            alt='Salar Jung Museum'
                        />

                        <p className='
                            max-w-lg
                            text-[#999999]
                            text-sm
                            leading-7
                        '>
                            Discover the rich heritage of India and the world
                            through an extraordinary collection of art,
                            sculptures, manuscripts, textiles and historical
                            treasures at Salar Jung Museum.
                        </p>

                        {/* Museum Location */}
                        <div className='mt-6'>

                            <p className='text-[#C49A6C] text-sm font-medium'>
                                VISIT US
                            </p>

                            <p className='text-[#999999] text-sm mt-2 leading-6'>
                                Salar Jung Museum
                                <br />
                                Hyderabad, Telangana, India
                            </p>

                        </div>

                    </div>


                    {/* ================= EXPLORE ================= */}

                    <div>

                        <h3 className='
                            text-[#f5f1eb]
                            text-lg
                            font-medium
                            mb-6
                        '>
                            EXPLORE
                        </h3>

                        <ul className='flex flex-col gap-4 text-sm text-[#999999]'>

                            <li>
                                <Link
                                    to='/'
                                    className='hover:text-[#C49A6C] transition-colors'
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to='/stories'
                                    className='hover:text-[#C49A6C] transition-colors'
                                >
                                    Top Stories
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to='/artworks'
                                    className='hover:text-[#C49A6C] transition-colors'
                                >
                                    Featured Artworks
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to='/create-trail'
                                    className='hover:text-[#C49A6C] transition-colors'
                                >
                                    Create Your Trail
                                </Link>
                            </li>

                        </ul>

                    </div>


                    {/* ================= INFORMATION ================= */}

                    <div>

                        <h3 className='
                            text-[#f5f1eb]
                            text-lg
                            font-medium
                            mb-6
                        '>
                            INFORMATION
                        </h3>

                        <ul className='flex flex-col gap-4 text-sm text-[#999999]'>

                            <li>
                                <Link
                                    to='/about'
                                    className='hover:text-[#C49A6C] transition-colors'
                                >
                                    About the Museum
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to='/visit'
                                    className='hover:text-[#C49A6C] transition-colors'
                                >
                                    Plan Your Visit
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to='/contact'
                                    className='hover:text-[#C49A6C] transition-colors'
                                >
                                    Contact Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to='/privacy'
                                    className='hover:text-[#C49A6C] transition-colors'
                                >
                                    Privacy Policy
                                </Link>
                            </li>

                        </ul>

                    </div>


                    {/* ================= CONTACT ================= */}

                    <div>

                        <h3 className='
                            text-[#f5f1eb]
                            text-lg
                            font-medium
                            mb-6
                        '>
                            GET IN TOUCH
                        </h3>

                        <div className='flex flex-col gap-4 text-sm text-[#999999]'>

                            <p>
                                +91 40 2452 3211
                            </p>

                            <p>
                                info@salarjungmuseum.in
                            </p>

                            <p className='leading-6'>
                                Open Tuesday – Sunday
                                <br />
                                10:00 AM – 5:00 PM
                            </p>

                        </div>

                    </div>

                </div>


                {/* ================= DIVIDER ================= */}

                <div className='border-t border-[#2f2924] mt-12 pt-6'>

                    <div className='
                        flex
                        flex-col
                        md:flex-row
                        justify-between
                        items-center
                        gap-4
                    '>

                        <p className='text-xs text-[#777777]'>
                            ©TCS Research and Innovation. All rights reserved.
                        </p>

                        <div className='flex gap-6 text-xs text-[#777777]'>

                            <Link
                                to='/privacy'
                                className='hover:text-[#C49A6C] transition-colors'
                            >
                                Privacy
                            </Link>

                            <Link
                                to='/terms'
                                className='hover:text-[#C49A6C] transition-colors'
                            >
                                Terms
                            </Link>

                            <Link
                                to='/contact'
                                className='hover:text-[#C49A6C] transition-colors'
                            >
                                Contact
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer