import React from 'react'

const values = [
  { title: 'Action-Oriented', body: 'I focus on taking steps that lead to results, always looking for ways to move the needle while staying agile and responsive to change.' },
  { title: 'User-Focused Innovator', body: 'I create with the end-user in mind, ensuring the products I build not only meet their needs but exceed their expectations in a meaningful way.' },
  { title: 'Driven to Achieve', body: 'I set high standards and work diligently toward accomplishing them, tracking progress through measurable results while staying motivated by the bigger goal.' },
  { title: 'Multitasking Expert', body: 'I excel in managing multiple priorities simultaneously, maintaining focus and efficiency even when juggling competing tasks or shifting deadlines.' },
  { title: 'Informed and Swift Decision Maker', body: 'I make decisions quickly and confidently, using available information to guide my choices while keeping the long-term impact in mind.' },
  { title: 'Visionary Thinker', body: 'I embrace challenges and uncertainties, contributing innovative ideas to the product development process with a strong focus on future possibilities.' },
]

export default function Values(){
  return (
    <section>
      <div className="section-head">
        <div className="head-row">
          <span className="title">Skills</span>
          <span className="more underline">More</span>
        </div>
        <p className="subtitle">What I Bring to the Table</p>
      </div>

      <div className="skill-grid">
        {values.map((v, i) => (
          <article className="skill-card" key={i}>
            <h3 className="h3 blue">{v.title}</h3>
            <p className="p">{v.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
