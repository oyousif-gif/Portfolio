// File: Layout.jsx | Author: Omer Yousif | StudentID: 301093426 | Date: 2025-09-23
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Services from './Services'
import Contact from './Contact'
import Layout from './Layout'

export default function MainRouter() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}