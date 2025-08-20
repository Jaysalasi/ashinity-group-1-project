export default function BrowseRangeComponent() {
  return (
    <section 
      id="Browse-range" 
      className=" flex items-center justify-center min-h-[80vh] py-12 px-4"
    >
      <div className="container mx-auto flex flex-col items-center">
        {/* Heading Section */}
        <div className="text-center mb-12 w-full max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-6xl font-bold text-[#333333] mb-4">
            Browse The Range
          </h1>
          <p className="text-base md:text-lg lg:text-xl  text-[#666666]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Categories Flex Container */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-6 md:gap-8 lg:gap-10 w-full max-w-6xl">
          
          {/* Dining Category */}
          <div className="flex flex-col items-center group cursor-pointer flex-1 min-w-[250px] max-w-md">
            <div className="w-full aspect-square overflow-hidden rounded-lg mb-4">
              <img 
                src="./image 106.png" 
                alt="Dining" 
                className="w-full h-full object-cover transition-transform duration-300 
                         group-hover:scale-105"
              />
            </div>
            <a href="#" className="text-lg md:text-xl font-semibold text-[#333333] group-hover:text-gray-600 
                        transition-colors duration-300">
              Dining
            </a>
          </div>

          {/* Living Category */}
          <div className="flex flex-col items-center group cursor-pointer flex-1 min-w-[250px] max-w-md">
            <div className="w-full aspect-square overflow-hidden rounded-lg mb-4">
              <img 
                src="./Image-living room.png" 
                alt="Living" 
                className="w-full h-full object-cover transition-transform duration-300 
                         group-hover:scale-105"
              />
            </div>
            <a href="#"     className="text-lg md:text-xl font-semibold text-[#333333] group-hover:text-gray-600 
                        transition-colors duration-300">
              Living
            </a>
          </div>

          {/* Bedroom Category */}
          <div className="flex flex-col items-center group cursor-pointer flex-1 min-w-[250px] max-w-md">
            <div className="w-full aspect-square overflow-hidden rounded-lg mb-4">
              <img 
                src="./image 101.png" 
                alt="Bedroom" 
                className="w-full h-full object-cover transition-transform duration-300 
                         group-hover:scale-105"
              />
            </div>
            <a href="#"  className="text-lg md:text-xl font-semibold text-[#333333] group-hover:text-gray-600 
                        transition-colors duration-300">
              Bedroom
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}