import React from 'react'

const Nav = () => {
  return (
    <div>
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

    </div>
 
    
  )
}

export default Nav
