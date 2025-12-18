
import React from 'react'

const page = () => {
  return (
    <div>

      {/* Navbar */}
      <div className="flex items-center justify-between bg-white py-2">
       

      
      {/* leftlogo */}
      <div className="text-lg font-semibold text-gray-600">
        CardSkin
      </div>

      {/* centre texts */}
      <nav className="hidden md:flex items-center gap-8 text-sm text-gray-500">
        <a href="#" className="text-gray-600 transition hover:text-amber-200">Home</a>
        <a href="#" className="text-gray-600 transition  hover:text-amber-200">Products</a>
        <a href="#" className="text-gray-600 transition  hover:text-amber-200">Stocks</a>
        <a href="#" className="text-gray-600 transition  hover:text-amber-200">Contact</a>
      </nav>

      {/* getstarted button */}
      <button className="px-5 py-2 text-sm text-gray-600  rounded-full hover:bg-gray-200 transition">
        Get started
      </button>
      </div>



      {/* Herosection */}
      <section className="bg-gray-600 py-4">
      {/* main content */}
      <div className="max-w-8xl h-full mx-auto bg-white  px-20 py-40 -mt-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">

          {/* LEFT SIDE */}
          <div>
            <h1 className="text-48px leading-1.1 font-bold text-black">
              Custom skin <br />
              for your card
            </h1>

            <p className="mt-6 text-16px text-gray-600 max-w-md">
              Upload your photo and get your custom skin for only $10.
              
            </p>

            <button className="mt-8 px-5 py-4 bg-black text-white rounded-full text-sm font-medium">
              Get your card skin
            </button>

            {/* USERS */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-9 h-9 rounded-full bg-gray-300 border-2 border-white" />
                <div className="w-9 h-9 rounded-full bg-gray-300 border-2 border-white" />
                <div className="w-9 h-9 rounded-full bg-gray-300 border-2 border-white" />
      
      
       
              </div>

              <p className="text-sm text-gray-800">
                Loved by <span className="font-semibold text-black">10k+</span>{" "}
                users
              </p>
            
            </div>


          
          <div className="mt-18 w-full max-w-6xl flex flex-col md:flex-row justify-between">

          <p className="text-lg text-gray-800 max-w-xs">
            Get your card skin with the two packs we have.
            
          </p>

          <p className="text-16px text-gray-600 max-w-xs">
            <span className="font-semibold text-black block mb-2">
              Custom Design
            </span>
            You can upload your own design for your card skin.
          </p>

          <p className="text-16px text-gray-600 max-w-xs">
            <span className="font-semibold text-black block mb-2">
              Design Stock
            </span>
            We have hundreds of stock designs for you to choose from.
          </p>

        
        </div>
        </div>
          </div>
          
          </div>




          {/* popular stock card */}
         
    <section className=" flex justify-center bg-white">
      <div className="w-full max-w-5xl bg-gray-800 rounded-3xl px-6 py-12 text-white">

        {/* title popular */}
        <h2 className="text-center text-xl font-semibold tracking-wider">
          POPULAR PRO STOCKS
        </h2>

        <p className="text-center text-sm text-gray-400 mt-2">
          Choose from the best stock designs curated by professionals
        </p>

        {/* search section */}
        <div className="mt-6 flex justify-center">
          <input
            type="text"
            placeholder="Search stocks"
            className="w-full max-w-md bg-gray-600 text-gray-300 text-sm px-5 py-2 rounded-full outline-none placeholder-gray-500"
          />
        </div>

        {/* cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* card1 */}
          <div className="bg-white rounded-2xl p-4 text-black text-center">
            <div className="h-32 rounded-xl bg-gray-300 mb-4"></div>
            <p className="font-medium">Minimal Faces</p>
            <button className="mt-3 text-sm px-4 py-1 border border-gray-300 rounded-full">
              View stock
            </button>
          </div>

          {/* card2 */}
          <div className="bg-white rounded-2xl p-4 text-black text-center">
            <div className="h-32 rounded-xl bg-gray-300 mb-4"></div>
            <p className="font-medium">Modern Shapes</p>
            <button className="mt-3 text-sm px-4 py-1 border border-gray-300 rounded-full">
              View stock
            </button>
          </div>

          {/* card3*/}
          <div className="bg-white rounded-2xl p-4 text-black text-center">
            <div className="h-32 rounded-xl bg-gray-300 mb-4"></div>
            <p className="font-medium">Color Splash</p>
            <button className="mt-3 text-sm px-4 py-1 border border-gray-300 rounded-full">
              View stock
            </button>
          </div>

        </div>

        {/* View All Button */}
        <div className="mt-10 flex justify-center">
          <button className="bg-white text-black px-8 py-2 rounded-full text-sm font-medium cursor-pointer">
            View all
          </button>
        </div>

      </div>
    </section>
          </section>

        </div>
        
        
      )
    }
      



    export default page
