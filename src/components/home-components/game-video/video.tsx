import RhombButton from "../rhomb-button/RhombButton";
import arrow from "./images/SVG.svg";
import profile from "./images/Vector(1).svg";
import vector from "./images/Vector(2).svg";

const Video = () => {
  return (
    <section className="bg-[#0c192a]">
      <div className="my-con pt-[100px] pb-[100px]">
        <div className="flex justify-between items-center">
          <div className="top-left flex items-center w-[880px] relative left-0 h-[40px]">
            <RhombButton
              children="Trending Gaming News"
              height="h-[40px]"
              width="w-[226px]"
            />
            <div className="border-[1px] border-[rgba(37,_51,_70,_1)] w-[888px] h-[5px] absolute left-[200px]"></div>
          </div>
          <button className="flex rounded-[4px] justify-center h-[36px] items-center w-[121px] text-[rgba(255,_255,_255,_1)] bg-[rgba(255,_255,_255,_0.2)]">
            VIEW ALL
            <img src={arrow} alt="" className="w-[10px] h-[10px] text-end" />
          </button>
        </div>
        <div className="flex gap-[30px]">
          <div className="w-[630px] pt-[40px]">
            <iframe
              className="w-[100%] h-[380px] rounded-[6px]"
              //   width="630"
              //   height="380"
              src="https://www.youtube.com/embed/H_ma_BgCsCI?si=RDyEvS9l-m-v8E5F"
              title="YouTube video player"
              frameBorder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <button className="text-white text-[13px] font-semibold bg-[rgba(255,_255,_255,_0.3)] rounded-[3px] py-[4px] px-[10px] mt-[22px]">
              FIGHTER
            </button>
            <h1 className="text-white text-[28px] font-bold w-[555px] h-[72px] mt-[15px]">
              Exciting New Browned Chocolate Gaming Cookies Daily Breakfast
            </h1>
            <div className="flex mt-[15px]">
              <img src={profile} alt="" className="w-[16px] h-[16px]" />
              <h1 className="text-[#bacce1] text-[13px] font-semibold ml-[5px]">
                BY ADMIN
              </h1>
              <img
                src={vector}
                alt=""
                className="w-[16px] h-[16px] ml-[15px]"
              />
              <h2 className="text-[#bacce1] text-[13px] font-semibold ml-[5px]">
                27 August, 2024
              </h2>
            </div>
          </div>
          <div className="h-[540px] w-[1px] bg-[rgba(37,_51,_70,_1)] mt-[40px]"></div>
          <div className="mt-[40px]">
            <div className="flex">
              <iframe
                className="rounded-[6px]"
                width="190"
                height="169"
                src="https://www.youtube.com/embed/w9XL-T0yvZM?si=WslROkKwXdD_a-PP"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <div className="ml-[30px] mt-[13px]">
                <button className="text-[13px] font-semibold text-white bg-[rgba(255,_255,_255,_0.3)] rounded-[3px] py-[4px] px-[10px]">
                  ANIMATION
                </button>
                <h1 className="w-[251px] text-[22px] text-white font-bold mt-[18px]">
                  A Guide To Getting Data Visualization Right
                </h1>
                <div className="flex mt-[15px]">
                  <img src={profile} alt="" className="w-[16px] h-[16px]" />
                  <h1 className="text-[#bacce1] text-[13px] font-semibold ml-[5px]">
                    BY ADMIN
                  </h1>
                  <img
                    src={vector}
                    alt=""
                    className="w-[16px] h-[16px] ml-[15px]"
                  />
                  <h2 className="text-[#bacce1] text-[13px] font-semibold ml-[5px]">
                    27 August, 2024
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex mt-[30px]">
              <iframe
                className="rounded-[6px]"
                width="190"
                height="169"
                src="https://www.youtube.com/embed/sBNCSeG391Y?si=Vgj70x7a38FIXTH1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <div className="ml-[30px] mt-[13px]">
                <button className="text-[13px] font-semibold text-white bg-[rgba(255,_255,_255,_0.3)] rounded-[3px] py-[4px] px-[10px]">
                  ACTION
                </button>
                <h1 className="w-[361px] text-[22px] text-white font-bold mt-[18px]">
                  Fluid Typography: Predicting A Problem With Your User`s
                  Zoom-In
                </h1>
                <div className="flex mt-[15px]">
                  <img src={profile} alt="" className="w-[16px] h-[16px]" />
                  <h1 className="text-[#bacce1] text-[13px] font-semibold ml-[5px]">
                    BY ADMIN
                  </h1>
                  <img
                    src={vector}
                    alt=""
                    className="w-[16px] h-[16px] ml-[15px]"
                  />
                  <h2 className="text-[#bacce1] text-[13px] font-semibold ml-[5px]">
                    27 August, 2024
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex mt-[30px]">
              <iframe
                className="rounded-[6px]"
                width="190"
                height="169"
                src="https://www.youtube.com/embed/AJm-cwt0Ba8?si=iPGyuKFDm3gvOIRt"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <div className="ml-[30px] mt-[13px]">
                <button className="text-[13px] font-semibold text-white bg-[rgba(255,_255,_255,_0.3)] rounded-[3px] py-[4px] px-[10px]">
                  RACING
                </button>
                <h1 className="w-[355px] text-[22px] text-white font-bold mt-[18px]">
                  Deploying CSS Logical Properties On Web Apps
                </h1>
                <div className="flex mt-[15px]">
                  <img src={profile} alt="" className="w-[16px] h-[16px]" />
                  <h1 className="text-[#bacce1] text-[13px] font-semibold ml-[5px]">
                    BY ADMIN
                  </h1>
                  <img
                    src={vector}
                    alt=""
                    className="w-[16px] h-[16px] ml-[15px]"
                  />
                  <h2 className="text-[#bacce1] text-[13px] font-semibold ml-[5px]">
                    27 August, 2024
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
