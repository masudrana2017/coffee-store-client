import { useLoaderData } from "react-router-dom";
import Instrogram from "../../../components/Instrogram/Instrogram";
import PopularProduct from "../../../components/PopularProduct/PopularProduct";
import Banner from "../Banner/Banner";
import Icon from "../Icon/Icon";
import { useState } from "react";


const Home = () => {
    const loadedCoffee=useLoaderData()
    const [coffees,setCoffees]=useState(loadedCoffee)
    return (
        <div>
            <Banner></Banner>
            <Icon></Icon>
            <PopularProduct coffees={coffees} setCoffees={setCoffees}></PopularProduct>
            <Instrogram></Instrogram>
        </div>
    );
};

export default Home;