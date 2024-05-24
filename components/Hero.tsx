import React from 'react'

const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-5 py-12 md:flex-col md:py-24 lg:flex-row">
      <img
        className="mb-10 w-5/6 object-cover object-center md:w-3/6 lg:w-4/6"
        alt="hero"
        src="/static/images/hero/hero.png"
      />
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-700 dark:text-gray-200 sm:text-4xl sm:leading-10 md:text-4xl lg:text-6xl">
          Hello, welcome to my blog!
        </h1>
      </div>
    </div>
  )
}

export default Hero
