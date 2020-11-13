import React, { useEffect, useState } from 'react'

const Home = () => {
  const [cars, setCars] = useState([])

  useEffect(() => {
    fetch('/api/car')
      .then(res => res.json())
      .then(result => console.log(result))
  })

  return (
    <div>Labuka</div>
  )
}

export default Home;