import React from 'react';
import { motion } from 'framer-motion';
import { 
  HiOutlineUserGroup, 
  HiOutlineHashtag, 
  HiOutlineSun, 
  HiOutlinePhotograph, 
  HiOutlineTrendingUp, 
  HiOutlineLogin 
} from 'react-icons/hi';
import logo from '../assets/logo.png';

const MENUDATA = [
  { name: "AUTHORS", icon: <HiOutlineUserGroup />, slug: "/authors" },
  { name: "TOPICS", icon: <HiOutlineHashtag />, slug: "/topics" },
  { name: "DAILY QUOTES", icon: <HiOutlineSun />, slug: "/daily" },
  { name: "PICTURE QUOTES", icon: <HiOutlinePhotograph />, slug: "/pictures" },
  { name: "TOP QUOTES", icon: <HiOutlineTrendingUp />, slug: "/top" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#1a1c1e] text-gray-300 shadow-2xl border-b border-gray-800">
      
      {/* Left: Logo */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-2 cursor-pointer"
      >
        <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
        <span className="font-bold text-xl tracking-tighter text-white">DAILY<br/>QUOTES</span>
      </motion.div>

      {/* Middle: Navigation Links */}
      <div className="hidden md:flex items-center gap-1">
        {MENUDATA.map((item, index) => (
          <motion.a
            key={index}
            href={item.slug}
            className="relative px-4 py-2 flex flex-col items-center gap-1 group transition-colors hover:text-white"
            whileHover="hover"
          >
            <span className="text-xl group-hover:text-cyan-400 transition-colors">
              {item.icon}
            </span>
            <span className="text-[10px] font-bold tracking-widest">
              {item.name}
            </span>
            
            {/* Animated Underline/Highlight */}
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-500 opacity-0"
              variants={{ hover: { opacity: 1, width: '100%' } }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        ))}
      </div>

      {/* Right: Login Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button className="flex items-center gap-2 px-6 py-2 bg-transparent border border-cyan-500/50 text-cyan-400 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-cyan-500/10 transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)]">
          Login & Register
          <HiOutlineLogin className="text-lg" />
        </button>
      </motion.div>

    </nav>
  );
}