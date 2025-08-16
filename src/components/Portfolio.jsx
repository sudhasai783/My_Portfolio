import React from 'react';
import "../portfolio.css";
// Option A: use URLs for now (easy to test)
// Option B: import local images from /src/assets (uncomment and use those)
// import sqlLibImg from './assets/sql-lib.png'
// import sqlChallengeImg from './assets/sql-challenge.png'
// import resumeMatcherImg from './assets/resume-matcher.png'

const items = [
  {
    title: 'Amazon Prime Titles — Power BI Visualization',
    desc:
      'End-to-end Power BI build: Power Query transforms, star schema, 12 DAX measures, 6 visuals, 4 slicers, 2 drill-through pages,analyzing titles, Movies vs TV mix, and YoY growth.',
    img: 'project_1.jpeg', // or sqlLibImg
    href: 'https://app.powerbi.com/groups/me/reports/0b33b7a6-4a9b-4aaa-99eb-abc30da5f439/700de9736a259c823083?experience=power-bi',
  },
  {
    title: 'British Airways Reviews — Tableau',
    desc:
      'Interactive Tableau dashboard of British Airways reviews with sentiment & satisfaction KPIs, route/cabin filters, and drill-downs for data-driven decisions.',
    img: 'project_2.jpeg', // or sqlChallengeImg
    href: 'https://public.tableau.com/app/profile/sai.sudha.pidugu/viz/Book1_17241304280340/Dashboard1',
  },
  {
    title: 'Disney+ Catalog EDA — Python',
    desc:
      'Cleaned Disney+ catalog (null/dupe removal) and built 6 visuals—ratings mix, duration vs rating, top countries/genres, release-year distribution, and titles per year ,to reveal content trends.',
    img: 'project_3.png', // or resumeMatcherImg
    href: 'https://github.com/sudhasai783/Disney-plus-EDA-using-python',
  },
]

export default function Portfolio(){

  return (
    <section id="portfolio">
      <div className="section-head portfolio-head">
        <h2 className="section-title orange">Portfolio</h2>
        <p className="subtitle">A sample of my work</p>
      </div>

      <div className="grid">
        {items.map((it, i) => (
          <a
            className="card"
            key={i}
            href={it.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${it.title}`}
          >
            <div className="thumb">
              <img src={`${import.meta.env.BASE_URL}${it.img}`} alt={`${it.title} preview`} loading="lazy" />
            </div>
            <h3 className="title">{it.title}</h3>
            <p className="desc">{it.desc}</p>
            <span className="cta">View project →</span>
          </a>
        ))}
      </div>
    </section>
  )
}
