import React from 'react';
import { GoHome, GoVideo } from 'react-icons/go';
import { SiYoutubeshorts } from 'react-icons/si';
import { MdOutlineSubscriptions, MdOutlineWatchLater, MdOutlineVideoLibrary } from 'react-icons/md';
import { GrHistory } from 'react-icons/gr';
import { BiLike } from 'react-icons/bi';
import Home from '../pages/Home';

function Sidebar() {
    const MainLinks = [
        {
            icon: <GoHome className='text-xl' />,
            name: 'Home'
        },
        {
            icon: <SiYoutubeshorts className='text-xl' />,
            name: 'Shorts'
        },
        {
            icon: <MdOutlineSubscriptions className='text-xl' />,
            name: 'Subscriptions'
        },
    ];
    const OtherLinks = [
        {
            icon: <MdOutlineVideoLibrary className='text-xl' />,
            name: 'your Library'
        },
        {
            icon: <GrHistory className='text-xl'/>,
            name: 'History'
        },
        {
            icon: <GoVideo className='text-xl'/>,
            name: 'Your Videos'
        },
        {
            icon: <MdOutlineWatchLater className='text-xl'/>,
            name: 'WatchLater'
        },
        {
            icon: < BiLike className='text-xl'/>,
            name: 'Liked Videos'
        }
    ];

    return (
        <div className='w-2/12 bg-[#0f0f0f] p-2 pr-5 overflow-auto pb-8 h-screen'>
            <ul className='flex flex-col border-b-2 border-gray-700 '>
                {MainLinks.map((link) => (
                    <li key={link.name} className={`pl-6 py-3 hover:bg-zinc-600 flex items-center ${link.name === 'Home' ? 'bg-slate-500' : ''} rounded-xl`}>
                        <a href='#' className='flex items-center gap-5'>
                            {link.icon}
                            <span className='text-sm tracking-wider'>{link.name}</span>
                        </a>
                    </li>
                ))}
            </ul>

            <div></div>

            <ul className='flex flex-col border-b-1 border-gray-800 '>
                {OtherLinks.map((link) => (
                    <li key={link.name} className={`pl-6 py-3 hover:bg-zinc-600 flex items-center ${link.name === 'Home' ? 'bg-slate-500' : ''} rounded-xl`}>
                        <a href='#' className='flex items-center gap-5'>
                            {link.icon}
                            <span className='text-sm tracking-wider'>{link.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
