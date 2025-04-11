import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header className="m-0 h-[95vh] pt-28 overflow-hidden max-md:h-[68vh] max-sm:h-screen">
      <div className="text-center h-full relative w-[75%] mx-auto max-md:w-[86%] max-sm:w-[90%]">
        <h5>Hello I'm</h5>
        <h1>Jesse</h1>
        <h5 className="text-light text-[rgba(255,255,255,0.6)]">Photographer</h5>

        <CTA />
        <HeaderSocials />

        <a
          href="#contact"
          className="absolute right-[-1.3rem] bottom-[40rem] rotate-90 font-light text-[0.9rem] max-sm:hidden"
        >
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header
