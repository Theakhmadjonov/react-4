import heading from "./images/Heading 6.svg";
import action from "./images/Container(2).svg";
import gaming from "./images/Container(3).svg";
import racing from "./images/Container(4).svg";
import animation from "./images/Container(5).svg";
import fighter from "./images/Container(6).svg";
import story from "./images/Container(7).svg";
import link from "./images/Link.svg";

const Category = () => {
  return (
    <section className="mt-[70px]">
      <div className="my-con">
        <div className="cat-top flex items-center relative">
          <img src={heading} alt="" className="w-[248px] h-[40px] z-10" />
          <div className="border-[2px] border-[#dfdfdf] w-[75%] h-[5px] absolute left-[240px] "></div>
        </div>
        <div className="cat-med flex gap-[5%] mt-[48px]">
          <img src={action} alt="" className="w-[180px] h-[180px]" />
          <img src={gaming} alt="" className="w-[180px] h-[180px]" />
          <img src={racing} alt="" className="w-[180px] h-[180px]" />
          <img src={animation} alt="" className="w-[180px] h-[180px]" />
          <img src={fighter} alt="" className="w-[180px] h-[180px]" />
          <img src={story} alt="" className="w-[180px] h-[180px]" />
        </div>
        <div className="cat-bottom mt-[70px]">
          <img src={link} alt="" className="w-[984px] h-[120px] mx-auto"/>
        </div>
      </div>
    </section>
  );
};

export default Category;
