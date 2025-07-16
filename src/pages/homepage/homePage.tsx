import Category from "../../components/home-components/categories/category";
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
    </>
  );
};

export default HomePage;
