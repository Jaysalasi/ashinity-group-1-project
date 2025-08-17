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
          <div className="grid  grid-cols-1 md:grid-cols-5 gap-4">
            <div className='grid content-start col-span-2 grid-cols-5 grid-rows-2 gap-4 justify-items-stretch'>
              <img src={image.img36} alt='36' className='col-span-1 place-self-stretch' />
              <img src={image.img38} alt='38' className='col-span-4 self-end' />
              <img src={image.img37} alt='37' className='col-span-2' />
              <img src={image.img39} alt='39' className='col-span-3' />
            </div>
            <div className='hidden md:grid place-content-center'>
              <img src={image.img40} alt='40' />
            </div>
            <div className='hidden sm:grid content-start col-span-2 grid-cols-6 grid-rows-2 gap-4 justify-items-stretch'>
              <img src={image.img43} alt='43' className='col-span-3 self-end' />
              <img src={image.img45} alt='45' className='col-span-3 place-self-end' />
              <img src={image.img41} alt='41' className='col-span-2' />
              <img src={image.img44} alt='44' className='col-span-3' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FurnitureComponent
