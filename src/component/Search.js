import React from 'react'

export default function Search({search,searchRating}) {

  return (
    
        <div className='filter'>
        <input type='text' placeholder='Search by title  ' onChange={(e)=>search(e.target.value)} />
        <button>Filter</button>
        <input type='number' placeholder='Search by rating' onChange={(e)=>searchRating(e.target.value)} />
        <button>Filter</button>

      </div>
  )
}
