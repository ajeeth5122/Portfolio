import React from 'react'
import Header from '../Component/Header'
import CardFrame from '../Frames/CardFrame'
import Aje from '../assets/AJE.png'
import html from '../assets/HTML.png'
import css from '../assets/CSS.png'
import Boots from '../assets/Boots1.png'
import js from '../assets/JS1.png'
import reactL from '../assets/REACT.png'
import Aj2 from '../assets/AJ2.png'

function About() {
  return (
    <>
      <Header />
      <div className='about'>
        <div className='abt'>
          <h1>About</h1>
          <p>Hi there! I'm a passionate and curious frontend developer with a growing love for building clean, user-friendly web interfaces. My journey began with HTML, CSS, and JavaScript, and I've recently been diving into React.js and Flutter to expand my skills across both web and mobile platforms.
            I enjoy turning ideas into interactive experiences — whether it's a simple to-do list app or a job portal UI. I learn best through hands-on projects, clear documentation, and feedback that helps me improve. Every line of code I write is a step forward in mastering the craft.
          </p>

          <h2>What I am Working on</h2>
          <ol>
            <li>- Building responsive React components with state and event handling</li>
            <li>- Exploring Flutter's widget tree and architecture</li>
            <li>- Practicing professional communication through clear documentation and EOD updates</li>
          </ol>

        </div>
        <div className='abtimg'>
          <img src={Aje} alt="" />
        </div>

      </div>
      <div className='about1'>
        <div className='abtimg'>
          <img src={Aj2} alt="" />
        </div>
        <div className='abt-left'>
          <h1>TECH STACK</h1>
          <div className='courses'>

            <div className='Cor-name'>
              <img src={html} width="85px" alt="" />
              <h5>Html</h5>
            </div>
            <div className='Cor-name'>
              <img src={css} width="85px" alt="" />
              <h5>Css</h5>
            </div>
            <div className='Cor-name'>
              <img src={js} width="85px" alt="" />
              <h5>JS</h5>
            </div>
            <div className='Cor-name'>
              <img src={Boots} width="85px" alt="" />
              <h5>Bootstrap</h5>
            </div>
            <div className='Cor-name'>
              <img className='react' src={reactL} width="85px" alt="" />
              <h5>React</h5>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default About