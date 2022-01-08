import React from 'react'
import { Link } from 'react-router-dom'

const Image = ({ image }) => {
  function parseISOString(s) {
    var b = s.split(/\D+/);
    const date = new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6])).toUTCString()
    return date
  }
  return (
    <div className='image-page'>
      <figure>
        <img 
          className='image-large'
          src={image.urls.regular}
          alt={image.alt_description} 
        />
        <figcaption>
          Image By: <Link to={`/user/${image.user.id}`}>{image.user.username}</Link> on <a href={image.links.html} target='blank'>Unsplash</a>
        </figcaption>
      </figure>
      <div className='image-details'>
        <div className='user-details'>
          <Link to={`/user/${image.user.id}`}>
            <img src={image.user.profile_image.large} alt={image.user.username} className='avatar-small'/>
          </Link>
          <Link to={`/user/${image.user.id}`}>
            <p>{image.user.username}</p>
          </Link>
        </div>
        <div>
          <p>{parseISOString(image.created_at)}</p>
          <p className='italic'>{image.description}</p>
          <p className='italic'>{image.alt_description}</p>
          <p><b>{image.location.city && `${image.location.city}, ${image.location.country}`}</b></p>
        </div>
        <div className='image-exif'>
          <h2><i className='fas fa-camera'></i> {image.exif.name ? image.exif.name : 'no exif data'}</h2>
          {image.exif.name &&
            <>
              <p>Make: {image.exif.make}</p>
              <p>Model: {image.exif.model}</p>
              <p>Aperture: {image.exif.aperture}</p>
              <p>Exposure time: {image.exif.exposure_time}</p>
              <p>Focal length: {image.exif.focal_length}</p>
              <p>ISO: {image.exif.iso}</p>
            </>
          }
        </div>
        <div>
          <a className='btn' aria-label='download full size image' href={image.links.download} target='blank' download><i className='fas fa-download'></i> Full Size Image</a>
        </div>
      </div>
    </div>
  )
}

export default Image