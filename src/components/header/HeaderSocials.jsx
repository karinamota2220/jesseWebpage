import React from 'react'
import { FaInstagram } from "react-icons/fa6"
import { AiFillTikTok } from "react-icons/ai"

const HeaderSocials = () => {
  return (
    <div className="flex flex-col items-center gap-[0.9rem] absolute left-0 bottom-[26rem] max-sm:hidden">
      <a href="https://www.instagram.com/arturo.photo8/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-xl hover:text-primary transition-colors duration-300" />
      </a>
      <a href="https://www.tiktok.com/@photoink?_t=8riv6Ah0kKg&_r=1" target="_blank" rel="noopener noreferrer">
        <AiFillTikTok className="text-xl hover:text-primary transition-colors duration-300" />
      </a>
      <div className="w-px h-8 bg-primary"></div>
    </div>
  )
}

export default HeaderSocials
