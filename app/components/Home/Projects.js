import React from 'react'
import "../styles/Home/Projects.css"
const Projects = () => {
  return (
    <section className='Projects__Main'>
        <h5>Our projects</h5>
        <h6>What we've been working on</h6>
        <section className='Projects'>
        <section className='Project'>
        <img src='/assets/Solution.jpg' alt='SVG' />
        <h1 className='hover-text'>Hovered Text</h1>
        </section>
        <section className='Project'>
        <img src='/assets/Solution.jpg' alt='SVG' />
        <h1 className='hover-text'>Hovered Text</h1>
        </section>
        <section className='Project'>
        <img src='/assets/Solution.jpg' alt='SVG' />
        <h1 className='hover-text'>Hovered Text</h1>
        </section>
        </section>
    </section>
  )
}

export default Projects