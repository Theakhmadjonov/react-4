import heading from "./images/Heading 6.svg";
import link from "./images/Link.svg";
import "./cat.css";

const Category = () => {
  return (
    <section className="mt-[70px]">
      <div className="my-con">
        <div className="cat-top flex items-center relative">
          <img src={heading} alt="" className="w-[248px] h-[40px] z-10" />
          <div className="border-[2px] border-[#dfdfdf] w-[75%] h-[5px] absolute left-[240px] "></div>
        </div>
        <div className="cat-med flex gap-[42px] mt-[48px]">
          <div className="w-[180px] h-[180px] cat-1 rounded-[50px] flex items-end justify-center">
            <button className="text-[13px] font-semibold text-[rgba(255,_255,_255,_1)] py-[4px] px-[10px] bg-[rgba(255,_255,_255,_0.3)] rounded-[3px] mb-[40px]">
              ACTION
            </button>
          </div>
          <div className="w-[180px] h-[180px] cat-2 rounded-[50px] flex items-end justify-center">
            <button className="text-[13px] font-semibold text-[rgba(255,_255,_255,_1)] py-[4px] px-[10px] bg-[rgba(255,_255,_255,_0.3)] rounded-[3px] mb-[40px]">
              GAMING
            </button>
          </div>
          <div className="w-[180px] h-[180px] cat-3 rounded-[50px] flex items-end justify-center">
            <button className="text-[13px] font-semibold text-[rgba(255,_255,_255,_1)] py-[4px] px-[10px] bg-[rgba(255,_255,_255,_0.3)] rounded-[3px] mb-[40px]">
              RACING
            </button>
          </div>
          <div className="w-[180px] h-[180px] cat-4 rounded-[50px] flex items-end justify-center">
            <button className="text-[13px] font-semibold text-[rgba(255,_255,_255,_1)] py-[4px] px-[10px] bg-[rgba(255,_255,_255,_0.3)] rounded-[3px] mb-[40px]">
              ANIMATION
            </button>
          </div>
          <div className="w-[180px] h-[180px] cat-5 rounded-[50px] flex items-end justify-center">
            <button className="text-[13px] font-semibold text-[rgba(255,_255,_255,_1)] py-[4px] px-[10px] bg-[rgba(255,_255,_255,_0.3)] rounded-[3px] mb-[40px]">
              FIGHTER
            </button>
          </div>
          <div className="w-[180px] h-[180px] cat-6 rounded-[50px] flex items-end justify-center">
            <button className="text-[13px] font-semibold text-[rgba(255,_255,_255,_1)] py-[4px] px-[10px] bg-[rgba(255,_255,_255,_0.3)] rounded-[3px] mb-[40px]">
              STORY
            </button>
          </div>
        </div>
        <div className="cat-bottom mt-[70px]">
          <img src={link} alt="" className="w-[984px] h-[120px] mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Category;
