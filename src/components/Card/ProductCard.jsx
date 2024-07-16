import { FaRegEdit, FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductCard = ({ item,setCoffees,coffees }) => {
    const { _id, name, chef, price, photo } = item
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${id}`,{
                    method:"DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Deleted Successfully",
                                icon: "success"
                            });
                            const remaining=coffees.filter(coffee=>coffee._id!==_id)
                            setCoffees(remaining)
                        }
                    })
            }
        });
    }
    return (
        <div className="card card-side bg-base-200 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="Movie" className="transition-transform duration-500 ease-in-out transform hover:scale-110" />
            </figure>
            <div className="flex justify-between gap-4 items-center">
                <div>
                    <p>Name: {name}</p>
                    <p>Chef: {chef}</p>
                    <p>Price: {price}</p>
                </div>
                <div className="flex flex-col gap-3">
                    <button className="btn bg-[#D2B48C]">
                        <FaRegEye className="text-2xl text-white" />
                    </button>
                   <Link to={`/updateCoffee/${_id}`}><button className="btn bg-black">
                        <FaRegEdit className="text-white text-2xl" />
                    </button></Link>
                    <button onClick={() => handleDelete(_id)} className="btn bg-red-500">
                        <MdDelete className="text-white text-2xl" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;