import React from "react"

const User = ({ user }) => {
  return (
    <div className='user-page'>
      <img src={user.profile_image.large} alt={user.username} className='avatar-large'/>
      <p><b>{user.username}</b></p>
      <h2>{user.first_name} {user.last_name}{user.location &&`, ${user.location}`}</h2>
      <p className='highlight'>{user.for_hire ? "Available for hire" : "Not available for hire"}</p>
      <p className='italic'>{user.bio}</p>
      <p>{user.social.instagram}</p>
      <p><a className='btn' href={user.links.html} target='blank'>{user.total_photos} photos on Unsplash</a></p>
    </div>
  )
}

export default User