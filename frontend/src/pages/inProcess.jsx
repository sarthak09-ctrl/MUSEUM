import React from "react";
import { Link } from "react-router-dom";

const InProcess = () => {
    return (
        <div
            className="
                min-h-screen
                bg-[#0f0f0f]
                text-[#f5f1eb]
                flex
                items-center
                justify-center

                px-4
                sm:px-6

                py-8
                sm:py-10
            "
        >

            <div
                className="
                    max-w-2xl
                    w-full
                    text-center
                "
            >

                {/* ================= ICON / ILLUSTRATION ================= */}

                <div
                    className="
                        flex
                        justify-center

                        mb-5
                        sm:mb-6
                        md:mb-8
                    "
                >
                    <div
                        className="
                            w-16
                            h-16
                            sm:w-20
                            sm:h-20
                            md:w-24
                            md:h-24

                            rounded-full

                            border
                            border-[#c49a6c]

                            flex
                            items-center
                            justify-center

                            relative
                        "
                    >

                        <div
                            className="
                                w-8
                                h-8
                                sm:w-10
                                sm:h-10
                                md:w-12
                                md:h-12

                                rounded-full

                                border-[3px]
                                sm:border-4

                                border-[#3a3028]
                                border-t-[#c49a6c]

                                animate-spin
                            "
                        ></div>

                    </div>
                </div>


                {/* ================= SMALL LABEL ================= */}

                <p
                    className="
                        text-[#c49a6c]

                        text-[9px]
                        sm:text-xs
                        md:text-sm

                        tracking-[0.18em]
                        sm:tracking-[0.22em]
                        md:tracking-[0.25em]

                        uppercase

                        mb-2
                        sm:mb-3
                        md:mb-4
                    "
                >
                    Currently in progress
                </p>


                {/* ================= MAIN HEADING ================= */}

                <h1
                    className="
                        font-serif

                        text-3xl
                        sm:text-4xl
                        md:text-6xl

                        font-semibold
                        leading-tight

                        mb-4
                        sm:mb-5
                        md:mb-6

                        px-2
                    "
                >
                    Something Beautiful
                    <br />
                    Is Being Prepared
                </h1>


                {/* ================= DESCRIPTION ================= */}

                <p
                    className="
                        text-[#a8a29e]

                        text-xs
                        sm:text-sm
                        md:text-lg

                        leading-relaxed

                        max-w-[310px]
                        sm:max-w-md
                        md:max-w-xl

                        mx-auto

                        mb-6
                        sm:mb-8
                        md:mb-10
                    "
                >
                    We are currently working on this experience to make your
                    museum journey more meaningful, interactive and memorable.
                </p>


                {/* ================= PROGRESS INDICATOR ================= */}

                <div
                    className="
                        max-w-[300px]
                        sm:max-w-sm
                        md:max-w-md

                        mx-auto

                        mb-6
                        sm:mb-8
                        md:mb-10
                    "
                >

                    <div
                        className="
                            flex
                            justify-between

                            text-[9px]
                            sm:text-xs

                            text-[#8c857d]

                            mb-2
                            sm:mb-3
                        "
                    >
                        <span>Development</span>
                        <span>In Progress</span>
                    </div>


                    <div
                        className="
                            w-full

                            h-1.5
                            sm:h-2

                            bg-[#29231e]

                            rounded-full

                            overflow-hidden
                        "
                    >
                        <div
                            className="
                                h-full
                                w-[65%]

                                bg-[#c49a6c]

                                rounded-full

                                animate-pulse
                            "
                        ></div>
                    </div>

                </div>


                {/* ================= BACK BUTTON ================= */}

                <Link
                    to="/"
                    className="
                        inline-flex
                        items-center
                        justify-center
                        gap-1.5
                        sm:gap-2

                        px-5
                        sm:px-6

                        py-2
                        sm:py-2.5
                        md:py-3

                        rounded-full

                        border
                        border-[#5a4938]

                        text-[#c49a6c]

                        text-xs
                        sm:text-sm

                        hover:bg-[#c49a6c]
                        hover:text-[#111]

                        transition-all
                        duration-300
                    "
                >
                    ← Back to Museum
                </Link>

            </div>
        </div>
    );
};

export default InProcess;