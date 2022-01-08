import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header'
import Gallery from './components/Gallery'
import Image from './components/Image'
import User from './components/User'
import Footer from './components/Footer'

const App = () => {
  const [images, setImages] = useState([])
  const [search, setSearch] = useState('')

  const API_KEY = process.env.REACT_APP_API_KEY

  useEffect(() => {
    axios
    .get(`https://api.unsplash.com/photos/random?count=30&query=${search}&client_id=${API_KEY}`)
      .then(data => {
        setImages(data.data)
      })
      .catch(error => console.log(error))
  }, [API_KEY, search])

  return (
    <>
      <Header setSearch={setSearch} />
      <div className='container'>
        <Routes>
          <Route exact path='*' element={<Gallery images={images}/>} />
          {images.map(image => <Route path={`/image/${image.id}`} element={<Image image={image} />} key={image.id}/>)}
          {images.map(image => <Route path={`/user/${image.user.id}`} element={<User user={image.user}/>} key={image.user.id}/>)}
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App