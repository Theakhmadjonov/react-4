import Category from "../../components/home-components/categories/category";
// import RhombButton from "../../components/home-components/rhomb-button/RhombButton";
import ShowCase from "../../components/home-components/showcase/ShowCase";
import Spotlight from "../../components/home-components/spotlight/spotlight";
import Footer from "../../layouts/footer/footer";
import Header from "../../layouts/header/header";

const HomePage = () => {
  return (
    <>
      <Header />
      <ShowCase />
      <Category />
      <Spotlight />
      <Footer />
      {/* <RhombButton children="rhomb button" height="w-[50px]" width="h-[50px]" textSize="text-[12px]" color="bg-[green]"/> */}
    </>
  );
};

export default HomePage;
