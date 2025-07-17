import Category from "../../components/home-components/categories/category";
import Video from "../../components/home-components/game-video/video";
import Popular from "../../components/home-components/popular/popular";
import ShowCase from "../../components/home-components/showcase/ShowCase";
import Spotlight from "../../components/home-components/spotlight/spotlight";
import Weekly from "../../components/home-components/weekly/weekly";
import Footer from "../../layouts/footer/footer";
import Header from "../../layouts/header/header";

const HomePage = () => {
  return (
    <>
      <Header />
      <ShowCase />
      <Category />
      <Spotlight />
      <Popular />
      <Video />
      <Weekly />
      <Footer />
    </>
  );
};

export default HomePage;
