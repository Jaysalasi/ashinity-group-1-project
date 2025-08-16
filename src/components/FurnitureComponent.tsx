import image from '../assets/img/img'

// declare const image: { [key: string]: string };
// export default image;
const FurnitureComponent = () => {
  return (
    <>
      <section className="py-12 text-gray-700">
        <div className="text-center mb-8">
          <p className="text-xl text-gray-500">Share your setup with</p>
          <h1 className="text-4xl font-bold text-gray-800">#FuniroFurniture</h1>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:grid-rows-2">
            <div>
              <img src={image.img36} alt='36' />
            </div>
            <div>
              <img src={image.img38} alt='38' />
            </div>
            <div className='row-span-2 flex justify-center items-center'>
              <img src={image.img40} alt='40' />
            </div>
            <div>
              <img src={image.img43} alt='43' />
            </div>
            <div>
              <img src={image.img45} alt='45' />
            </div>
            <div>
              <img src={image.img37} alt='37' />
            </div>
            <div>
              <img src={image.img39} alt='39' />
            </div>
            <div>
              <img src={image.img41} alt='41' />
            </div>
            <div>
              <img src={image.img44} alt='44' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FurnitureComponent
