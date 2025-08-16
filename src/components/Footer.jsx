import React from 'react'

export default function Footer(){
  return (
    <footer className="footer">
      <section style={{maxWidth:1100, margin:'0 auto'}}>
        <div>&copy; {new Date().getFullYear()} Sai Sudha</div>
      </section>
    </footer>
  )
}

