import { Link } from "react-router-dom";
import ProductCard from "../Card/ProductCard";

const PopularProduct = ({ coffees }) => {
    const coffee = coffees;
    console.log(coffee.length)
    if(coffee.length<1){
        return <div><h2 className="text-center text-2xl mt-4 mb-4">No Data Avaiable</h2></div>
    }
    return (
        <div className=""
            style={{
                backgroundImage: "url(/src/assets/images/more/1.png)", overflow: 'hidden', backgroundRepeat: 'no-repeat'
            }}>
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center mt-8">
                    <p>--- Sip & Savor ---</p>
                    <img src="/src/assets/images/icons/popularProduct.png" alt="" />
                    <Link to="/addCoffee"><button className="btn bg-[#E3B577]">Add Coffee</button></Link>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                   {
                    coffee.map(item=><ProductCard key={item.id} item={item}></ProductCard>)
                   }
                </div>
            </div>
        </div>
    );
};

export default PopularProduct;