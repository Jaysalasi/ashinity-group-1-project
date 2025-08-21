/*import React from "react";*/
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";
import image6 from "../assets/images/image6.png";
import image7 from "../assets/images/image7.png";
import image8 from "../assets/images/image8.png";
import overlay1 from "../assets/images/overlay1.png";

const OurProducts = () => {
  return (
    <div className="  p-2 my-4 mx-2 bg-white">
      <h1 className="title">Our Products</h1>
      <div className="my-grid-layout ">
        <div className=" relative-image ">
          <img src={image1} alt="image2" className="main-image" />
          <div className="discount-display">-30%</div>
          <div className="">
            <p className="text-gray-800 text-2xl">
              <strong>Syltherine</strong>
            </p>

            <p className="description-product">
              <small>Stylish cafe chair</small>
            </p>
            <div className="flex justify-around">
              <p className="text-cost-actual">
                <strong>Rp 2.500.000</strong>
              </p>
              <p className="text-cost-reduce">Rp 3.500.000</p>
            </div>
          </div>
        </div>
        <div className=" relative-image ">
          <img src={image2} alt="image2" className="main-image" />
          <div className="discount-display">-30%</div>
          <img
            className="absolute inset-0"
            src={overlay1}
            alt="overlay image"
          />
          <div className=" ">
            <p className="text-gray-800 text-2xl">
              <strong>Leviosa</strong>
            </p>

            <p className="description-product">
              <small>Stylish cafe chair</small>
            </p>
            <div className="flex justify-around">
              <p className="text-cost-actual">
                <strong>Rp 2.500.000</strong>
              </p>
              <p className="text-cost-reduce">Rp 3.500.000</p>
            </div>
          </div>
        </div>
        <div className="relative-image ">
          <img src={image3} alt="image3" className="main-image" />
          <div className="discount-display">-50%</div>
          <div className="">
            <p className="text-gray-800 text-2xl">
              <strong>Lolito</strong>
            </p>

            <p className="description-product">
              <small>Luxury big sofa</small>
            </p>
            <div className="flex justify-around">
              <p className="text-cost-actual">
                <strong>Rp 7.000.000</strong>
              </p>
              <p className="text-cost-reduce">Rp 14.000.000</p>
            </div>
          </div>
        </div>
        <div className=" relative-image ">
          <img src={image4} alt="image4" className="main-image" />
          <div className="discount-display bg-green-600">New</div>
          <div className="">
            <p className="text-gray-800 text-2xl">
              <strong>Respira</strong>
            </p>

            <p className="description-product">
              <small>Outdoor bar table and stool</small>
            </p>
            <div className="flex justify-around">
              <p className="text-cost-actual">
                <strong>Rp 500.000</strong>
              </p>
            </div>
          </div>
        </div>
        <div className=" relative-image ">
          <img src={image5} alt="image5" className="main-image" />
          {/* <div className="discount-display">-30%</div> */}
          <div className="">
            <p className="text-gray-800 text-2xl">
              <strong>Grifo</strong>
            </p>

            <p className="description-product">
              <small>Night lamp</small>
            </p>
            <div className="flex justify-around">
              <p className="text-cost-actual">
                <strong>1.500.000</strong>
              </p>
            </div>
          </div>
        </div>
        <div className=" relative-image ">
          <img src={image6} alt="image6" className="main-image" />
          <div className="discount-display  bg-green-600">New</div>
          <div className="">
            <p className="text-gray-800 text-2xl">
              <strong>Muggo</strong>
            </p>

            <p className="description-product">
              <small>Small mug</small>
            </p>
            <div className="flex justify-around">
              <p className="text-cost-actual">
                <strong>Rp 150.000</strong>
              </p>
            </div>
          </div>
        </div>
        <div className=" relative-image ">
          <img src={image7} alt="image7" className="main-image" />
          <div className="discount-display">-50%</div>
          <div className="">
            <p className="text-gray-800 text-2xl">
              <strong>Pingky</strong>
            </p>

            <p className="description-product">
              <small>Cute bed set</small>
            </p>
            <div className="flex justify-around">
              <p className="text-cost-actual">
                <strong>Rp 7.000.000</strong>
              </p>
              <p className="text-cost-reduce">Rp 14.000.000</p>
            </div>
          </div>
        </div>
        <div className=" relative-image ">
          <img src={image8} alt="image8" className="main-image" />
          <div className="discount-display  bg-green-600">New</div>
          <div className="">
            <p className="text-gray-800 text-2xl">
              <strong>Potty</strong>
            </p>

            <p className="description-product">
              <small>Minimalist flower pot</small>
            </p>
            <div className="flex justify-around">
              <p className="text-cost-actual">
                <strong>Rp 500.000</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-0 flex justify-center items-center mt-4 ">
        <button className=" border-[#B88E2F] border-2 bg-white text-[#B88E2F] text-xs px-8 pt-2 text-center font-semibold ">
          SHOW MORE
        </button>
      </div>
    </div>
  );
};

export default OurProducts;
