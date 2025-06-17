import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ProfilePage from './pages/ProfilePage';
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogPage />} />
        <Route path="/post/:id" element={<BlogPostPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  )
}

export default App
