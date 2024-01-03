import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube, FaMicrophone, FaRegBell } from "react-icons/fa";
import { BiVideoPlus } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";

function Navbar() {
    return (
        <div className='flex justify-between items-center flex-wrap bg-[#0f0f0f] px-14 sticky h-14'>
            <div className='flex items-center gap-8 text-2xl text-white'>
                <div><RxHamburgerMenu /></div>
                <div className='flex items-center flex-wrap gap-2 justify-center '><FaYoutube className='text-3xl text-red-600' /><span className='text-xl font-semibold'>YouTube <sup className="text-[10px]">IN</sup> </span></div>
            </div>

            <div className='flex justify-center items-center gap-5'>
                <form>
                    <div className='flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-full'>
                        <div className='flex gap-5 items-center pr-5'>
                            <input type='text' placeholder='Search' className='w-96 bg-zinc-900 focus:outline-none'></input>
                        </div>
                        <button className='flex items-center text-white h-10 w-16 justify-center bg-zinc-800 rounded-r-3xl'>
                            <IoIosSearch className='text-xl' /></button>
                    </div>
                </form>
                <div className='bg-[#3c3c3c] rounded-full w-8 h-8'><FaMicrophone className="text-white mt-2 ml-2" /></div>
            </div>

            <div className='flex justify-center items-center gap-9 '>
                <BiVideoPlus className="text-white text-xl" />
                <FaRegBell className="text-white text-xl" />
                <CgProfile className="text-white text-xl" />

            </div>
        </div>
    )
}

export default Navbar