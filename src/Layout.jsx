// File: Layout.jsx | Author: Omer Yousif | StudentID: 301093426 | Date: 2025-09-23
import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout({ children }) {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <img src="/logo.png" alt="Logo" />
            <span>My Portfolio</span>
          </div>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="container content">
        {children}
      </main>

      <footer className="site-footer">
        <div className="container">© {new Date().getFullYear()} Omer Yousif</div>
      </footer>
    </>
  )
}