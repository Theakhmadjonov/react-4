import heading from "./images/Heading 6(1).svg";
import heading2 from "./images/Heading 6(2).svg";
import dodge from "./images/Container(8).svg";
import { Link } from "react-router-dom";
import profile from "./images/Vector(1).svg";
import vector from "./images/Vector(2).svg";
import time from "./images/Item.svg";
import eagle from "./images/Link(1).svg";
import plane from "./images/Link(2).svg";
import killer from "./images/Link(3).svg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import arrow from "./images/Button → SVG.svg";
import "./spotlight.css";
import "../../../index.css";

const Spotlight = () => {
  return (
    <section className="mt-[70px]">
      <div className="my-con flex relative">
        <div className="top flex w-[100%]">
          <div className="top-left flex items-center w-[880px] absolute left-0">
            <img src={heading} alt="" className="w-[226px] h-[40px] z-10" />
            <div className="border-[2px] border-[#dfdfdf] w-[678px] h-[5px] absolute left-[200px]"></div>
          </div>

          <div className="mt-[70px] flex">
            <div className="w-[498px]">
              <img src={dodge} alt="" className="w-[100%] h-[300px] mb-6" />
              <Link
                to={"/"}
                className="border-[1px] border-[rgba(184,_193,_205,_1)] rounded-[3px] py-[5px] px-[9px] text-[rgba(109,_117,_127,_1)] text-[13px] font-semibold"
              >
                RACING
              </Link>
              <h1 className="mt-[7px] w-[429px] text-[28px] font-bold text-[rgba(24,_51,_84,_1)]">
                How To Build A Magazine Layout With CSS Grid Areas
              </h1>
              <div className="flex gap-1 mt-[18px]">
                <img src={profile} alt="" className="w-[16px] h-[16px]" />
                <h1 className="text-[#bacce1] text-[13px] font-semibold">
                  BY ADMIN
                </h1>
                <img
                  src={vector}
                  alt=""
                  className="w-[16px] h-[16px] ml-[15px]"
                />
                <h2 className="text-[#bacce1] text-[13px] font-semibold">
                  27 August, 2024
                </h2>
                <img
                  src={time}
                  alt=""
                  className="w-[78px] h-[16px] ml-[15px]"
                />
              </div>
            </div>
            <div className="ml-[30px]">
              <div className="flex w-[362px] gap-[20px]">
                <div className="mt-[19px] w-[193px]">
                  <Link
                    to={"/"}
                    className="border-[1px] border-[rgba(184,_193,_205,_1)] rounded-[3px] py-[5px] px-[9px] text-[rgba(109,_117,_127,_1)] text-[13px] font-semibold"
                  >
                    ACTION
                  </Link>
                  <h1 className="mt-[8px] w-[193px] text-[20px] font-bold text-[rgba(24,_51,_84,_1)]">
                    Fortnite Ratings are Skyrocketing
                  </h1>
                  <div className="flex items-center mt-[14px]">
                    <img src={vector} alt="" className="w-[16px] h-[16px]" />
                    <h2 className="text-[#bacce1] text-[13px] font-semibold ml-[5px]">
                      27 August, 2024
                    </h2>
                  </div>
                </div>
                <div className="w-[140px] mt-[10px]">
                  <img
                    src={eagle}
                    alt=""
                    className="w-[100%] h-[140px] rounded-[6px]"
                  />
                </div>
              </div>
              <div className="flex w-[362px] gap-[20px] mt-[20px]">
                <div className="mt-[19px] w-[193px]">
                  <Link
                    to={"/"}
                    className="border-[1px] border-[rgba(184,_193,_205,_1)] rounded-[3px] py-[5px] px-[9px] text-[rgba(109,_117,_127,_1)] text-[13px] font-semibold"
                  >
                    FIGHTER
                  </Link>
                  <h1 className="mt-[8px] w-[200px] text-[20px] font-bold text-[rgba(24,_51,_84,_1)]">
                    Everything You Need To Know About
                  </h1>
                  <div className="flex items-center mt-[14px]">
                    <img src={vector} alt="" className="w-[16px] h-[16px]" />
                    <h2 className="text-[#bacce1] text-[13px] font-semibold ml-[5px]">
                      27 August, 2024
                    </h2>
                  </div>
                </div>
                <div className="w-[140px] mt-[10px]">
                  <img
                    src={plane}
                    alt=""
                    className="w-[100%] h-[140px] rounded-[6px]"
                  />
                </div>
              </div>
              <div className="flex w-[362px] gap-[20px] mt-[20px]">
                <div className="mt-[19px] w-[193px]">
                  <Link
                    to={"/"}
                    className="border-[1px] border-[rgba(184,_193,_205,_1)] rounded-[3px] py-[5px] px-[9px] text-[rgba(109,_117,_127,_1)] text-[13px] font-semibold"
                  >
                    GAMING
                  </Link>
                  <h1 className="mt-[8px] w-[196px] text-[20px] font-bold text-[rgba(24,_51,_84,_1)]">
                    We Can`t Wait to Try This Gaming Area
                  </h1>
                  <div className="flex items-center mt-[14px]">
                    <img src={vector} alt="" className="w-[16px] h-[16px]" />
                    <h2 className="text-[#bacce1] text-[13px] font-semibold ml-[5px]">
                      27 August, 2024
                    </h2>
                  </div>
                </div>
                <div className="w-[140px] mt-[10px]">
                  <img
                    src={killer}
                    alt=""
                    className="w-[100%] h-[140px] rounded-[6px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom flex">
          <div className="top-right flex items-center absolute right-[14%]">
            <img src={heading2} alt="" className="w-[148px] h-[40px] z-10" />
            <div className="border-[2px] border-[#dfdfdf] w-[196px] h-[5px] absolute left-[130px]"></div>
          </div>
          <div className="mt-[70px]">
            <div className="max-w-[330px] flex gap-1">
              <div className="w-[162px] flex items-center justify-center bg-[rgba(232,_241,_241,_1)] py-[9px] px-[8px] gap-[10px] rounded-[4px]">
                <button className="text-[18px]">
                  <FaFacebookF />
                </button>
                <h1 className="text-[rgba(24,_51,_84,_1)] w-[66px] h-[24px] text-[14px] font-[500] pt-[4px]">
                  Facebook
                </h1>
              </div>
              <div className="w-[162px] flex items-center justify-center bg-[rgba(232,_241,_241,_1)] py-[9px] px-[8px] gap-[10px] rounded-[4px]">
                <button className="text-[18px]">
                  <FaTwitter />
                </button>
                <h1 className="text-[rgba(24,_51,_84,_1)] w-[66px] h-[24px] text-[14px] font-[500] pt-[4px]">
                  Twitter
                </h1>
              </div>
            </div>
            <div className="max-w-[330px] flex gap-1 mt-[4px]">
              <div className="w-[162px] flex items-center justify-center bg-[rgba(232,_241,_241,_1)] py-[9px] px-[8px] gap-[10px] rounded-[4px]">
                <button className="text-[18px]">
                  <FaInstagram />
                </button>
                <h1 className="text-[rgba(24,_51,_84,_1)] w-[66px] h-[24px] text-[14px] font-[500] pt-[4px]">
                  Instagram
                </h1>
              </div>
              <div className="w-[162px] flex items-center justify-center bg-[rgba(232,_241,_241,_1)] py-[9px] px-[8px] gap-[10px] rounded-[4px]">
                <button className="text-[18px]">
                  <FaYoutube />
                </button>
                <h1 className="text-[rgba(24,_51,_84,_1)] w-[66px] h-[24px] text-[14px] font-[500] pt-[4px]">
                  Youtube
                </h1>
              </div>
            </div>
            <div className="max-w-[330px] flex gap-1 mt-[4px] mb-[56px]">
              <div className="w-[162px] flex items-center justify-center bg-[rgba(232,_241,_241,_1)] py-[9px] px-[8px] gap-[10px] rounded-[4px]">
                <button className="text-[18px]">
                  <FaLinkedinIn />
                </button>
                <h1 className="text-[rgba(24,_51,_84,_1)] w-[66px] h-[24px] text-[14px] font-[500] pt-[4px]">
                  LinkedIn
                </h1>
              </div>
              <div className="w-[162px] flex items-center justify-center bg-[rgba(232,_241,_241,_1)] py-[9px] px-[8px] gap-[10px] rounded-[4px]">
                <button className="text-[18px]">
                  <FaPinterestP />
                </button>
                <h1 className="text-[rgba(24,_51,_84,_1)] w-[66px] h-[24px] text-[14px] font-[500] pt-[4px]">
                  Pinterest
                </h1>
              </div>
            </div>
            <div className="w-[330px] h-[300px] bg-[#183354] rounded-[5px] letter flex flex-col items-center">
              <h1 className="text-[24px] text-white font-[800] mt-[50px]">
                Daily Newsletter
              </h1>
              <h2 className="text-[16px] text-white font-medium w-[218px] text-center mt-[25px]">
                Get all the top stories from Blogs to keep track.
              </h2>
              <div className="flex bg-[#f4796c] w-[260px] h-[50px] justify-between items-center px-[20px] rounded-[5px] mt-[25px]">
                <p className="text-[14px] font-normal text-white">
                  Enter your e-mail
                </p>
                <button>
                  <img src={arrow} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
