import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

// Top Stories
const SpecialityMenu = () => {
    return (
        <section
            id="speciality"
            className="
                w-full
                bg-white
                py-6
                sm:py-8
                md:py-14
            "
        >

            {/* ================= HEADER ================= */}
            <div
                className="
                    flex
                    items-center
                    justify-between
                    px-4
                    sm:px-5
                    md:px-10
                    mb-4
                    sm:mb-5
                    md:mb-7
                "
            >

                {/* LEFT: TITLE */}
                <div className="flex items-center gap-2 sm:gap-3">

                    {/* Gold vertical line */}
                    <div
                        className="
                            w-[3px]
                            sm:w-[5px]
                            md:w-[6px]
                            h-7
                            sm:h-9
                            md:h-12
                            bg-[#B58A5A]
                            rounded-sm
                        "
                    />

                    <h2
                        className="
                            font-serif
                            text-xl
                            sm:text-2xl
                            md:text-4xl
                            font-semibold
                            text-[#292929]
                            leading-none
                        "
                    >
                        Top Stories
                    </h2>

                </div>


                {/* RIGHT: SEE ALL */}
                <Link
                    to="/journey"
                    onClick={() => window.scrollTo(0, 0)}
                    className="
                        flex
                        items-center
                        gap-1
                        sm:gap-2
                        text-[#B58A5A]
                        text-[10px]
                        sm:text-xs
                        md:text-base
                        font-medium
                        whitespace-nowrap
                        hover:text-[#936f46]
                        transition-colors
                    "
                >
                    See All

                    <span
                        className="
                            text-sm
                            sm:text-lg
                            md:text-2xl
                            leading-none
                        "
                    >
                        →
                    </span>
                </Link>

            </div>


            {/* ================= STORIES ================= */}
            <div
                className="
                    flex
                    gap-2.5
                    sm:gap-4
                    md:gap-7
                    overflow-x-auto
                    px-4
                    sm:px-5
                    md:px-10
                    pb-2
                    sm:pb-3
                    scrollbar-hide
                    snap-x
                    snap-mandatory
                    overscroll-x-contain
                "
            >

                {specialityData.map((item, index) => (

                    <Link
                        key={index}
                        to={`/stories/${item.speciality}`}
                        onClick={() => window.scrollTo(0, 0)}
                        className="
                            flex-shrink-0
                            w-[145px]
                            sm:w-[175px]
                            md:w-[320px]
                            snap-start
                            group
                            cursor-pointer
                        "
                    >

                        {/* ================= IMAGE ================= */}
                        <div
                            className="
                                w-full
                                aspect-[4/5]
                                overflow-hidden
                                rounded-lg
                                sm:rounded-xl
                                bg-gray-100
                                border
                                border-[#e8e0d6]
                            "
                        >
                            <img
                                src={item.image}
                                alt={item.speciality}
                                className="
                                    w-full
                                    h-full
                                    object-cover
                                    transition-transform
                                    duration-500
                                    group-hover:scale-105
                                "
                            />
                        </div>


                        {/* ================= CATEGORY ================= */}
                        <p
                            className="
                                mt-2
                                sm:mt-3
                                md:mt-4
                                text-[8px]
                                sm:text-[10px]
                                md:text-sm
                                tracking-[0.12em]
                                sm:tracking-[0.16em]
                                text-[#B58A5A]
                                font-medium
                            "
                        >
                            TRAIL
                        </p>


                        {/* ================= TITLE ================= */}
                        <h3
                            className="
                                mt-1
                                sm:mt-1.5
                                md:mt-2
                                font-serif
                                text-[13px]
                                sm:text-base
                                md:text-2xl
                                leading-[1.15]
                                font-semibold
                                text-[#292929]
                                group-hover:text-[#B58A5A]
                                transition-colors
                            "
                        >
                            {item.speciality}
                        </h3>

                    </Link>

                ))}

            </div>

        </section>
    );
};

export default SpecialityMenu;