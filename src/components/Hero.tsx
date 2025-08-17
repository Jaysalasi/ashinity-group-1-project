import React from 'react'

const Hero = () => {
  return (
    <section
      id="Home"
      className="relative bg-[url('/Hero.jpg')] bg-cover bg-center bg-no-repeat 
                h-[60vh] sm:h-[70vh] md:h-screen 
                w-full flex items-center pt-28
                before:content-[''] before:absolute before:inset-0  before:z-0"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 h-full px-4 z-10">
        {/* left  side */}
        <div>
          <p>left side</p>
        </div>

        {/* Right side */}

        <div>
          <p>Right side</p>
        </div>
      </div>
    </section>
  )
}

export default Hero