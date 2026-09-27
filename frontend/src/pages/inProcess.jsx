import React from "react";
import { Link } from "react-router-dom";

const InProcess = () => {
    return (
        <div className="min-h-screen bg-[#0f0f0f] text-[#f5f1eb] flex items-center justify-center px-6">

            <div className="max-w-2xl w-full text-center">

                {/* Icon / Illustration */}
                <div className="flex justify-center mb-8">
                    <div className="
                        w-24 h-24
                        rounded-full
                        border border-[#c49a6c]
                        flex items-center justify-center
                        relative
                    ">
                        <div className="
                            w-12 h-12
                            rounded-full
                            border-4
                            border-[#3a3028]
                            border-t-[#c49a6c]
                            animate-spin
                        "></div>
                    </div>
                </div>

                {/* Small Label */}
                <p className="
                    text-[#c49a6c]
                    text-sm
                    tracking-[0.25em]
                    uppercase
                    mb-4
                ">
                    Currently in progress
                </p>

                {/* Main Heading */}
                <h1 className="
                    font-serif
                    text-4xl
                    md:text-6xl
                    font-semibold
                    leading-tight
                    mb-6
                ">
                    Something Beautiful
                    <br />
                    Is Being Prepared
                </h1>

                {/* Description */}
                <p className="
                    text-[#a8a29e]
                    text-base
                    md:text-lg
                    leading-relaxed
                    max-w-xl
                    mx-auto
                    mb-10
                ">
                    We are currently working on this experience to make your
                    museum journey more meaningful, interactive and memorable.
                </p>

                {/* Progress Indicator */}
                <div className="max-w-md mx-auto mb-10">

                    <div className="
                        flex
                        justify-between
                        text-xs
                        text-[#8c857d]
                        mb-3
                    ">
                        <span>Development</span>
                        <span>In Progress</span>
                    </div>

                    <div className="
                        w-full
                        h-2
                        bg-[#29231e]
                        rounded-full
                        overflow-hidden
                    ">
                        <div className="
                            h-full
                            w-[65%]
                            bg-[#c49a6c]
                            rounded-full
                            animate-pulse
                        "></div>
                    </div>

                </div>

                {/* Back Button */}
                <Link
                    to="/"
                    className="
                        inline-flex
                        items-center
                        gap-2
                        px-6
                        py-3
                        rounded-full
                        border
                        border-[#5a4938]
                        text-[#c49a6c]
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