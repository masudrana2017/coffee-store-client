import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee=useLoaderData()
    const { _id, name, chef, supplier, taste, category, details, price, photo } = coffee;
    const handleUpdate=(e)=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const chef=form.chef.value;
        const supplier=form.supplier.value;
        const taste=form.taste.value;
        const category=form.category.value;
        const details=form.category.value;
        const photo=form.photo.value;
        const price=form.price.value;

        const updateCoffee={name,chef,supplier,taste,category,details,photo,price}
        console.log(updateCoffee)

        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateCoffee)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Coffee Update Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })

    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content">
                    <div className="card">
                        <div className="text-center p-6">
                            <h1 className="flex flex-col items-center justify-center">
                                <img src="/src/assets/images/icons/UpdateExistingCoffeeDetails.png" alt="" />
                            </h1>
                            <p className="flex flex-col py-6 w-3/4 mx-auto">
                                It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                            </p>
                        </div>
                        <form onSubmit={handleUpdate} className="card-body">
                            <div className="flex gap-8 w-full">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={name} placeholder="Enter Coffee Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Chef</span>
                                    </label>
                                    <input type="text" name="chef" defaultValue={chef} placeholder="Enter Coffee Chef" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="flex gap-8 w-full">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Supplier</span>
                                    </label>
                                    <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter Coffee Supplier" className="input input-bordered" />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Taste</span>
                                    </label>
                                    <input type="text" name="taste" defaultValue={taste} placeholder="Enter Coffee Teste" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="flex gap-8 w-full">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <select className="select w-full" name="category" defaultValue={category}>
                                        <option disabled selected>Pick your favorite Simpson</option>
                                        <option>American</option>
                                        <option>Bangladeshi</option>
                                        <option>China</option>
                                        <option>India</option>
                                        <option>Pakistan</option>
                                    </select>
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Details</span>
                                    </label>
                                    <input type="text" name="details" defaultValue={details} placeholder="Enter Coffee Details" className="input input-bordered" />
                                </div>
                            </div>

                            <div className="flex gap-8 w-full">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="text" name="photo" defaultValue={photo} placeholder="Enter Photo URL" className="input input-bordered" />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" name="price" defaultValue={price} placeholder="Enter Coffee Price" className="input input-bordered" />
                                </div>
                            </div>

                            <div className="form-control mt-6 ">
                                <button type="submit" className="btn bg-[#D2B48C]">
                                    <img src="/src/assets/images/icons/UpdateCoffeeDetails.png" alt="" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;