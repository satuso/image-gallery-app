import React from "react"

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className='footer'>
      <p>© <a href='https://github.com/satuso' target='blank'>satuso</a> {year}</p>
    </div>
  )
}

export default Footer