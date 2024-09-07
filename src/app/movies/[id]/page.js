import React from 'react'

export default function moviePage({ params}) {
    console.log(params);
    const id = params.id
    
  return (
    <div>Movie Page Of {id}</div>
  )
}
