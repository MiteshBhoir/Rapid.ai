import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Hero = () => {

    const navigate = useNavigate()

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen px-6 sm:px-16 xl:px-32 bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat overflow-hidden">

            {/* Blur Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 opacity-30 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400 opacity-30 blur-[120px] rounded-full"></div>

            {/* Badge */}
            <div className="px-4 py-1 mb-6 text-sm border rounded-full bg-white/70 backdrop-blur-md border-gray-200 shadow-sm">
                🚀 5+ AI tools in one platform
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold text-center leading-tight max-w-4xl">
                Create amazing content <br />
                with <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                    AI tools
                </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-gray-600 text-center max-w-xl">
                Transform your content creation with powerful AI tools.
                Generate blogs, images, social media posts and more in seconds.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">

                <button
                    onClick={() => navigate('/ai')}
                    className="px-8 py-3 text-white rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 active:scale-95 transition shadow-lg"
                >
                    Start Creating
                </button>

                <button
                    className="px-8 py-3 bg-white border border-gray-300 rounded-xl hover:scale-105 active:scale-95 transition"
                >
                    ▶ Watch Demo
                </button>

            </div>

            {/* Users */}
            <div className="flex items-center gap-3 mt-8 text-gray-600">
                <img src={assets.user_group} alt="" className="h-8"/>
                Trusted by <span className="font-semibold">10,000+</span> creators
            </div>

             

        </div>
    )
}

export default Hero