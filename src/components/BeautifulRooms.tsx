import image9 from "../assets/images/image9.png";
import image10 from "../assets/images/image10.png";
import indicator from "../assets/images/indicator.png";

const BeautifulRooms = () => {
  return (
    <div>
      <div className=" flex space-between gap-3 ">
        <div className="ml-8 pl-4 text-center  items-center content-center">
          {/* various room segments */}
          <h1 className="text-left ">
            50+ Beautiful rooms <br /> inspiration
          </h1>
          <p className="text-xs whitespace-nowrap text-left">
            Our designer already made a lot of beautiful <br /> prototype of
            rooms that inspire you
          </p>
          <button className="text-white text-center text-xs bg-[#B88E2F] p-3 px-4 font-semibold  flex justify-start">
            Explore More
          </button>
        </div>
        <div>
          <img className="bedroom-image" src={image9} alt="bedroom" />
        </div>
        <div>
          <img className="bedroom-image" src={image10} alt="kitchen" />
          <img className="" src={indicator} alt="loading" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default BeautifulRooms;
