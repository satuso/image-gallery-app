import React from "react"
import { Link } from "react-router-dom"

const Gallery = ({ images }) => {
  return (
    <div className='gallery-page'>
      {images.map((image, index) => 
        <Link to={`/image/${image.id}`} key={index}>
          <img 
            className='image-small'
            src={image.urls.regular}
            alt={image.alt_description}
          />
        </Link>
      )}
    </div>
  )
}

export default Gallery