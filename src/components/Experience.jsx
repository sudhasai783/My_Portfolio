import React from 'react';

const roles = [
  {
    title: 'Data Intern',
    company: 'Pro Football Focus',
    location: 'Cincinnati,OH',
    period: 'May 2025 — August 2025',
    bullets: [
      'Revamped the careers site with React + JavaScript, integrating WordPress  to streamline job data management and improve candidate UX',
      'Automated onboarding with Python (document checks, scheduling, notifications), cutting manual admin by 40% and reducing errors',
      'Built a centralized onboarding dashboard (status tracking, document completeness, auto-reminders) that improved visibility for HR/hiring managers and reduced follow-ups'
    ],
    stack: ['Python', 'SQL', 'Excel', 'Power BI','React','WordPress']
  },
  {
    title: 'Data Engineer',
    company: 'Bright Mind Enrichment and Schooling',
    location: 'Cincinnati, OH',
    period: 'Dec 2024 — Apr 2025',
    bullets: [
      'Led stakeholder sessions with Product, Ops, Finance; delivered reports that informed 3+ key business decisions',
      'Aligned analytics with business goals; improved reporting accuracy by 15% and sped up decision cycles',
      'Cleansed, transformed, and analyzed 100K+ records using SQL & R; insights guided a $1M+ budget allocation'
    ],
    stack: ['Python', 'Pandas', 'Power BI', 'Excel','SQL']
  },
  {
    title: 'Data Engineer',
    company: 'LTIMindtree',
    location: 'Hyderabad,India',
    period: 'Jun 2022 — Jul 2023',
    bullets: [
      'Built scalable data pipelines with Azure Data Factory and Databricks, automating ingestion from 5+ sources',
      'Performed EDA with Python (pandas), surfacing financial insights that influenced KPI definitions and reporting',
      'Designed and deployed ML models for fraud detection and transaction categorization, improving accuracy by 22%',
      'Wrote high-perf SQL to clean and analyze 100+ GB of financial data, powering dashboards for 4 business units',
      'Built and shipped Power BI dashboards for ICICI Bank’s finance team, reducing reporting turnaround by 35%',
      'Optimized ETL workflows cross-functionally, cutting data latency by 50%'
    ],
    stack: ['Python','Pandas', 'Machine Learning', 'Power BI', 'Excel','SQL','Azure','Data Bricks']
  },
  {
    title: 'Program Analyst Trainee',
    company: 'Cognizant',
    location: 'Hyderabad,India',
    period: 'Jan 2022 — Jun 2022',
    bullets: [
      'Delivered end-to-end features (Java, React, PostgreSQL), wrote unit/integration tests and set up GitHub Actions + Docker, reducing deployment time by 60%.',
      'Instrumented logging; fixed bottlenecks and improved latency by 44%.'
    ],
    stack: ['HTML','CSS', 'Java Script', 'React', 'Python','SQL','Azure']
  },
  // add more…
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-head">
        <h2 className="section-title orange">Experience</h2>
        <p className="subtitle">Roles I’ve worked in</p>
      </div>

      <ol className="timeline">
        {roles.map((r, i) => (
          <li className="exp-item" key={i}>
            <span className="exp-dot" aria-hidden />
            <div className="exp-card">
              <div className="exp-top">
                <div className="exp-title">{r.title}</div>
                <div className="exp-period">{r.period}</div>
              </div>
              <div className="exp-meta">
                <span className="company">{r.company}</span>
                <span className="middot">•</span>
                <span className="location">{r.location}</span>
              </div>
              <ul className="exp-bullets">
                {r.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
              <div className="exp-stack">
                {r.stack.map((t, j) => (
                  <span className="badge" key={j}>{t}</span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
