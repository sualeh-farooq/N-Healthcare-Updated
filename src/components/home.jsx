import HeroBanner from "./hero-banner";
import ChooseUs from './choose'
import Counter from "./counter";
import Discover from "@/layout/header/discover";
import Packaging from "./packaging";
import ProductsCall from "./productsCall";
import Services from "./services";
import About from "./about";
import Categories from "@/common/categories";
import CarouselComponent from "./partners";

const Home = ()  =>{
    return (
        <div className="container-sec " >
       <HeroBanner />
       <Services />
       <ChooseUs />
       <Counter />
       <Packaging />
        {/* <CarouselComponent /> */}
        <Categories />
        <ProductsCall />
        </div>
    )
}
export default Home;