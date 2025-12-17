import React from 'react'
import Image from "next/image";

const Herosctn = () => {
  return (
       <section className="bg-black py-10">
      {/* main content */}
      <div className="max-w-120px h-full mx-auto bg-white rounded-2xl px-20 py-40">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">

          {/* LEFT SIDE */}
          <div>
            <h1 className="text-48px leading-1.1 font-bold text-black">
              Custom skin <br />
              for your card
            </h1>

            <p className="mt-6 text-16px text-gray-600 max-w-md">
              Get your card skin with the two packs we have.
              Premium vinyl material with long-lasting colors.
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
          </div>
          
          
            
            

        </div>
      </div>
    </section>
  );
}
    
export default Herosctn



