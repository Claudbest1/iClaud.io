import React from 'react'
import './about.css'
import ME from '../../assets/me-about (2).jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt=""/>
          </div>

      </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Expeience</h5>
              <small>3+ Years Working.</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>300+ Completed Projects</small>
            </article>

          

          </div>
            <p>
              I am your go to person when it comes to Web development, graphic design and UI/UX design. My inclination to quality and attention to details singles me out from the endless list of creatives around the world.
            </p>
            
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About