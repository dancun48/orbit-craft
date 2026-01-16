import React from 'react'
import Hero from './Hero'
import Mission from './Mission'
import Focus from './Focus'
import Customer from './Customer'

const Home = () => {
  return (
    <div>
        <Hero />
        <Mission />
        <div className="pt-10">
                  <Focus />

        </div>
        <Customer />
    </div>
  )
}

export default Home