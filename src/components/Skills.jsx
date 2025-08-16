import React, { useState } from 'react'

const SKILL_CARDS = [
  { title: 'Data & Analytics', body: 'SQL, Python (Pandas, NumPy, Matplotlib), Power BI, Tableau, Excel (Pivot Tables, VLOOKUP), EDA, A/B Testing, Hypothesis Testing, Data Cleaning, Feature Engineering' },
  { title: 'Data Engineering', body: 'Airflow, dbt, Snowflake, PostgreSQL, Apache Spark, PySpark, Data Warehousing, ETL Pipelines, Git, Docker' },
  { title: 'Business & Product Analytics', body: 'KPI Development, Dashboard Design, Product Usage Tracking, Funnel Analysis, User Segmentation, Stakeholder Reporting, Experiment Analysis' },
  { title: 'Cloud & DevOps', body: 'AWS (S3, EC2, Lambda), Azure, CI/CD Pipelines, Shell Scripting, GitHub Actions, Cost Optimization, Resource Monitoring' },
  { title: 'Machine Learning & MLOps', body: 'Scikit-learn, XGBoost, Random Forest, Clustering (KMeans, Hierarchical), FastAPI, Flask, Model Deployment, MLOps Concepts, Reproducibility' },
  { title: 'Collaboration & Tools', body: 'Agile/Scrum, JIRA, Confluence, Smartsheet, Notion, Slack, Documentation & Versioning' },
]

const VALUE_CARDS = [
  { title: 'Action-Oriented', body: 'I focus on taking steps that lead to results, always looking for ways to move the needle while staying agile and responsive to change.' },
  { title: 'User-Focused Innovator', body: 'I create with the end-user in mind, ensuring the products I build not only meet their needs but exceed their expectations in a meaningful way.' },
  { title: 'Driven to Achieve', body: 'I set high standards and work diligently toward accomplishing them, tracking progress through measurable results while staying motivated by the bigger goal.' },
  { title: 'Multitasking Expert', body: 'I excel in managing multiple priorities simultaneously, maintaining focus and efficiency even when juggling competing tasks or shifting deadlines.' },
  { title: 'Informed and Swift Decision Maker', body: 'I make decisions quickly and confidently, using available information to guide my choices while keeping the long-term impact in mind.' },
  { title: 'Visionary Thinker', body: 'I embrace challenges and uncertainties, contributing innovative ideas to the product development process with a strong focus on future possibilities.' },
]

export default function Skills(){
  const [tab, setTab] = useState('skills') // 'skills' | 'more'

  return (
    <section id="skills">
      <div className="section-head" role="tablist" aria-label="Skills Tabs">
        <div className="head-row">
          <button className={`tab tab-lg ${tab==='skills' ? 'active' : ''}`} role="tab" aria-selected={tab==='skills'} onClick={()=>setTab('skills')}>Skills</button>
          <button className={`tab tab-md ${tab==='more' ? 'active' : ''}`} role="tab" aria-selected={tab==='more'} onClick={()=>setTab('more')}>More</button>
        </div>
        <p className="subtitle">{tab==='skills' ? "Things I'm good at" : "What I Bring to the Table"}</p>
      </div>

      {tab==='skills' ? (
        <div className="skill-grid">
          {SKILL_CARDS.map((v, i) => (
            <article className="skill-card" key={i}>
              <h3 className="h3 blue">{v.title}</h3>
              <p className="p">{v.body}</p>
            </article>
          ))}
        </div>
      ) : (
        <div className="skill-grid">
          {VALUE_CARDS.map((v, i) => (
            <article className="skill-card" key={i}>
              <h3 className="h3 blue">{v.title}</h3>
              <p className="p">{v.body}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}