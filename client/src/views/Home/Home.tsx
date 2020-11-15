import React, { useEffect, useState } from 'react'
import cx from 'classnames'

const Home = () => {
  const [cars, setCars] = useState([])

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + 'car')
      .then(res => res.json())
      .then(result => console.log(result))
  })

  const [toggle, setToggle] = useState<boolean>(false)

  const buttonClasses = cx({
    "bg-blue-500 hover:bg-blue-700": !toggle,
    "bg-red-500 hover:bg-red-500": toggle,
  })
  return (
    <h1 className="text-3xl text-black pb-6">Home</h1>
  )
}

export default Home;