import React from 'react'

export default function About(){
  return (
    <section id="about">
      <div className="about-wrap">
        <img className="about-photo" src={`${import.meta.env.BASE_URL}Me.jpeg`} alt="About Me"/>
        <div className="about-panel">
          <h2 className="about-title">About me</h2>
          <p className="about-text">I'm Sudha, a Data Analyst and Engineer, a recent Master’s graduate in Computer Science, and someone who's genuinely passionate about helping organizations make effective use of their data. Over the last few years, I’ve worked across different parts of the data journey, from figuring out what’s worth measuring, to building pipelines, transforming data, and finally telling stories through clean, useful visuals. I care about clarity, not just complexity.</p>
          <p className="about-text">Right now, I’m looking for a full-time role where I can keep solving problems that matter. I’m open to relocating, as long as there’s coffee and Wi-Fi, I’m good.</p>
        </div>
      </div>
    </section>
  )
}