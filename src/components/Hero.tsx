export default function Hero() {

  return (
    <section
      id="Home"
      className="relative bg-[url('/Hero.jpg')] bg-cover bg-center bg-no-repeat 
                h-[60vh] sm:h-[70vh] md:h-screen 
                w-full flex items-center pt-28
                before:content-[''] before:absolute before:inset-0 before:bg-black/20  before:z-0"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-full gap-12  px-8 sm:px-8 z-5">
        {/* left side - empty for design purposes */}
        <div className="md:w-1/2"></div>

        {/* right side - content panel */}
        <div className="md:w-1/2 bg-[#FFF3E3] p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105">
          <p className="text-[#333333] text-sm sm:text-base mb-2">
            New Arrival
          </p>
          <h1 className="text-[#B88E2F] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            Discover Our <br className="hidden sm:block" />
            New Collection
          </h1>
          <p className="text-[#333333] text-sm sm:text-base mb-6 md:mb-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
            repellendus optio non vel ipsa tempora amet eveniet dolores velit
            consectetur.
          </p>
          <button
            className="bg-[#B88E2F] text-white font-semibold py-3 px-6 sm:px-8 text-sm sm:text-base 
                          rounded-md transform transition-all duration-300 hover:scale-110 hover:bg-amber-700 
                          shadow-md hover:shadow-lg"
          >
            BUY NOW
          </button>
        </div>
      </div>
    </section>
  )
}
