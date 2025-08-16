import React from 'react'

export default function Services(){
  return (
    <section className="features">
      <div className="features-grid">
        <div className="feature">
          <svg viewBox="0 0 24 24" className="icon-line" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="4" width="18" height="6" rx="1"/>
            <rect x="3" y="14" width="18" height="6" rx="1"/>
            <circle cx="7" cy="7" r="1" fill="currentColor"/>
            <circle cx="7" cy="17" r="1" fill="currentColor"/>
          </svg>
          <h3 className="h3">Collect</h3>
          <p className="p">I gather data using Python, SQL, and Airbyte from APIs, cloud sources, and databases.</p>
        </div>
        <div className="feature">
          <svg viewBox="0 0 24 24" className="icon-line" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="7" y="7" width="10" height="10" rx="2"/>
            <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4"/>
          </svg>
          <h3 className="h3">Process</h3>
          <p className="p">I build automated, scalable ETL pipelines using dbt, Snowflake, and cloud tools like AWS and Azure.</p>
        </div>
        <div className="feature">
          <svg viewBox="0 0 24 24" className="icon-line" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M3 3v18h18"/>
            <path d="M6 16l4-6 4 3 5-7"/>
          </svg>
          <h3 className="h3">Visualize</h3>
          <p className="p">I design dashboards in Power BI, Tableau, and Python to visualize trends, forecasts, and ML outputs.</p>
        </div>
      </div>
    </section>
  )
}