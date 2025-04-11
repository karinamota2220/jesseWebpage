import React from 'react'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import ME from '../images/Capture.JPG';  // Adjust the path if necessary

const About = () => {
  return (
    <section id="about" className="pt-20 px-6">
      <h5 className="text-center text-light">Get To Know</h5>
      <h2 className="text-center text-3xl font-bold mb-10">About Me</h2>

      <div className="grid grid-cols-[35%_50%] gap-[15%] max-[1024px]:grid-cols-1 max-[1024px]:gap-0">
        {/* Image Section */}
        <div className="w-full aspect-square rounded-2xl bg-gradient-to-tr from-transparent via-primary to-transparent grid place-items-center max-[1024px]:w-1/2 max-[1024px]:my-8 max-[600px]:w-[65%] max-[600px]:mb-12 mx-auto">
          <div className="rounded-xl overflow-hidden rotate-[10deg] transition-all hover:rotate-0">
            <img src={ME} alt="About" className="object-cover w-full h-full" />
          </div>
        </div>

        {/* Content Section */}
        <div className="about__content">
          <div className="grid grid-cols-3 gap-6 max-[600px]:grid-cols-2 max-[600px]:gap-4">
            <article className="bg-bg-variant border border-transparent rounded-xl p-8 text-center transition-all hover:bg-transparent hover:border-primary-variant cursor-default">
              <FaAward className="text-primary text-[1.4rem] mb-4 mx-auto" />
              <h5 className="text-[0.95rem] font-semibold">Experience</h5>
              <small className="text-[0.7rem] text-light block">2+ Years Working</small>
            </article>

            <article className="bg-bg-variant border border-transparent rounded-xl p-8 text-center transition-all hover:bg-transparent hover:border-primary-variant cursor-default">
              <FiUsers className="text-primary text-[1.4rem] mb-4 mx-auto" />
              <h5 className="text-[0.95rem] font-semibold">Clients</h5>
              <small className="text-[0.7rem] text-light block">50+ Worldwide</small>
            </article>

            <article className="bg-bg-variant border border-transparent rounded-xl p-8 text-center transition-all hover:bg-transparent hover:border-primary-variant cursor-default">
              <VscFolderLibrary className="text-primary text-[1.4rem] mb-4 mx-auto" />
              <h5 className="text-[0.95rem] font-semibold">Projects</h5>
              <small className="text-[0.7rem] text-light block">20+ Completed</small>
            </article>
          </div>

          <p className="my-8 mb-[2.6rem] text-light max-[1024px]:my-4 max-[1024px]:mb-6 max-[600px]:my-6 text-center">
          Hey there ! I’m Jesse—a freelance photographer based in Southern California! Sharing and documenting love stories is my greatest joy, and through photography, am I able to give someone part of that love. Everything from your small business pop up to your dream wedding day, I want to help you tell your story, exactly how you wrote it. Please reach out about anything, anytime!
          </p>

          <a href="#contact" className="inline-block bg-primary text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition">
            Let’s Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
