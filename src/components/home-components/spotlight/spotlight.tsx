import heading from "./images/Heading 6(1).svg";
import heading2 from "./images/Heading 6(2).svg";
import dodge from "./images/Container(8).svg";
import { Link } from "react-router-dom";
import profile from "./images/Vector(1).svg";
import vector from "./images/Vector(2).svg";
import time from "./images/Item.svg";

const Spotlight = () => {
  return (
    <section className="mt-[70px]">
      <div className="my-con">
        <div className="top flex w-[100%] h-[40px] relative">
          <div className="top-left flex items-center w-[880px] absolute left-0">
            <img src={heading} alt="" className="w-[226px] h-[40px] z-10" />
            <div className="border-[2px] border-[#dfdfdf] w-[678px] h-[5px] absolute left-[200px]"></div>
          </div>
          <div className="top-right flex items-center absolute right-[20%]">
            <img src={heading2} alt="" className="w-[148px] h-[40px] z-10" />
            <div className="border-[2px] border-[#dfdfdf] w-[196px] h-[5px] absolute left-[130px]"></div>
          </div>
        </div>
        <div className="bottom flex mt-[38px]">
          <div className="w-[498px]">
            <img src={dodge} alt="" className="w-[100%] h-[300px] mb-6" />
            <Link to={"/"} className="border-[1px] border-[rgba(184,_193,_205,_1)] rounded-[3px] py-[5px] px-[9px] text-[rgba(109,_117,_127,_1)] text-[13px] font-semibold">RACING</Link>
            <h1 className="mt-[7px] w-[429px] text-[28px] font-bold">How To Build A Magazine Layout With CSS Grid Areas</h1>
            <div className="flex gap-1 mt-[18px]">
              <img src={profile} alt="" className="w-[16px] h-[16px]" />
              <h1 className="text-[#bacce1] text-[13px] font-semibold">
                BY ADMIN
              </h1>
              <img src={vector} alt="" className="w-[16px] h-[16px]" />
              <h2 className="text-[#bacce1] text-[13px] font-semibold">
                27 August, 2024
              </h2>
              <img src={time} alt="" className="w-[78px] h-[16px]" />
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
