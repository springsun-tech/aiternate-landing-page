"use client"
import Link from "next/link";
import Image from "next/image";


const title = {
    title: "High-Quality Tech Solutions",
    subtitle: "As Accessible as Water for Every Business",
    description: "Led by veterans from Silicon Vally tech giants and driven by cutting-edge AI technology, we are your reliable IT partner delivering elite software solutions to equip every business with Silicon Valley-grade technology, tailored efficiently to meet unique demands."
};

export function Hero() {

    return (
        <section className="relative h-full bg-cover bg-center pb-8 pt-16" style={{ backgroundImage: "url(" + "https://hkaift.com/wp-content/uploads/2023/03/iStock-11609956481-2048x1152.jpg" + ")" }}>
            {/* <!-- Gradient Overlay --> */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-sky-800 to-blue-700 opacity-75"></div>

            {/* <!-- Hero Content --> */}
            <div className="container relative z-5 mx-auto flex flex-col items-center justify-center px-2 h-screen">
                <div className="animate-fade-in-down mb-6 text-center text-white" style={{ marginTop: '-50px' }}> {/* Adjust this value as needed */}
                    <h1 className="mb-4 text-5xl font-bold md:text-7xl">{title.title}</h1>
                    <p className="mb-6 font-bold text-5xl">
                        {title.subtitle}
                    </p>
                    <p className="mb-6 pt-10 text-xl w-2/3 mx-auto">
                        {title.description}
                    </p>
                    <div className="flex justify-center items-center">
                    </div>

                </div>

                {/* <!-- Product Screenshot --> */}
                <div className="mt-8 w-full rounded-lg md:w-2/3 shadow-lg">
                </div>
            </div>
        </section>
    )
}