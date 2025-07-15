import heading from "./images/Heading 6(1).svg";
import heading2 from "./images/Heading 6(2).svg";

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
        <div className="bottom">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            voluptatem iure iusto nesciunt debitis, suscipit animi rerum? Beatae
            veniam a, recusandae iste facilis deserunt et vel exercitationem
            commodi, neque eius?
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
