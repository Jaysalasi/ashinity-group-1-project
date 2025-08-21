/*import React from "react";*/
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";
import image6 from "../assets/images/image6.png";
import image7 from "../assets/images/image7.png";
import image8 from "../assets/images/image8.png";

const OurProducts = () => {
  return (
    <div className="border-2  p-2 my-4 mx-2 bg-white">
      <h1 className="title  text-black font-bold my-4 pb-2">Our Products</h1>
      <div className="my-grid-layout">
        <div className=" relative-image ">
          <img src={image2} alt="image2" className="main-image" />
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
              <small>Outdoor bar table and stoo</small>
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
        <p className="box-border border-orange-300 border-2 bg-white  text-orange-300 px-10 pt-2  font-medium">
          <small>SHOW MORE</small>
        </p>
      </div>
    </div>
  );
};

export default OurProducts;
