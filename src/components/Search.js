import React, { useState } from "react"

const Search = ({ setSearch }) => {
  const [input, setInput] = useState("")

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(input)
    setInput("")
  }
  return (
    <div className='search'>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          placeholder='search images by keyword'
          onFocus={(e) => e.target.placeholder=""}
          onBlur={(e) => e.target.placeholder = "search images by keyword"}
          value={input}
          onChange={handleChange}
        >
        </input>
        <button type='submit' aria-label='search images'>
          <i className='fas fa-search'></i>
        </button>
      </form>
    </div>
  )
}

export default Search