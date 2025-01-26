import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";


const AddService = () => {

    const {user} = useContext(AuthContext);
    const {email, displayName, photoURL} = user || {};
    // console.log(email, displayName, photoURL);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            url: formData.get('url'),
            name: formData.get('name'),
            price: formData.get('price'),
            area: formData.get('area'),
            description: formData.get('description'),
            email: email,
            displayName: displayName,
            photoURL: photoURL
        }
        // console.log(data);
        axios.post('https://consult-hive-server.vercel.app/services', data)
        .then(res => {
            // console.log(res.data);
            if(res.data.acknowledged){
                toast.success("Service Added Successfully");
                e.target.reset();
            }
        })
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Add Service</h1>
                    <p className="py-6">
                        Describe your service Here. Clients will be able to see your services that you provide here.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Image URL</label>
                            <input name="url" required type="url" className="input" placeholder="Image URL of the Service" />
                            <label className="fieldset-label">Service Name</label>
                            <input name="name" required type="text" className="input" placeholder="Service Name" />
                            <label className="fieldset-label">Price</label>
                            <input name="price" required type="number" className="input" placeholder="Price" />
                            <label className="fieldset-label">Service Area</label>
                            <input name="area" required type="text" className="input" placeholder="Service Area" />
                            <label className="fieldset-label">Description</label>
                            <textarea name="description" className="h-24 textarea textarea-bordered" placeholder="Description"></textarea>
                            <button className="btn btn-neutral mt-4">Submit</button>
                        </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;