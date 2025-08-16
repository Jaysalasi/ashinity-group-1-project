import image from '../assets/img/img'

const FurnitureComponent = () => {
  return (
    <>
      <section className="py-12 text-gray-700">
        <div className="text-center mb-8">
          <p className="text-xl text-gray-500">Share your setup with</p>
          <h1 className="text-4xl font-bold text-gray-800">#FuniroFurniture</h1>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {Object.values(image).map((imgSrc, i) => (
              <div key={i} className="overflow-hidden">
                <img
                  src={imgSrc as string}
                  alt={`Funiro furniture setup ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default FurnitureComponent
