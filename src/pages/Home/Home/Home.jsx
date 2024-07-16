import { useLoaderData } from "react-router-dom";
import Instrogram from "../../../components/Instrogram/Instrogram";
import PopularProduct from "../../../components/PopularProduct/PopularProduct";
import Banner from "../Banner/Banner";
import Icon from "../Icon/Icon";

const Home = () => {
    const coffees=useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Icon></Icon>
            <PopularProduct coffees={coffees}></PopularProduct>
            <Instrogram></Instrogram>
        </div>
    );
};

export default Home;