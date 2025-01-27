import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const DetailsCard = ({ url, name, price, area, description, email: providerEmail, displayName: providerName, photoURL, _id }) => {
    const { user } = useContext(AuthContext);
    const { email: userEmail, displayName: userName } = user || {};
    //console.log('user email:', userEmail, 'provider email:', providerEmail);


    const handleBookingSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const bookingData = {
            serviceId: _id,
            userEmail,
            providerEmail,
            status: "pending",
            date: formData.get("date"),
            instruction: formData.get("instruction"),
        };
        //console.log("Booking Data:", bookingData);

        axios.post("https://consult-hive-server.vercel.app/book-services", bookingData).then(req => {
            //console.log(req.data);
            if (req.data.insertedId) {
                Swal.fire({
                    title: "Order Placed",
                    icon: "success",
                });
            }
        }
        )

        document.getElementById(_id).close()
    };

    return (
        <>
            <div className="card lg:card-side bg-base-100 shadow-xl max-w-3xl mx-auto">
                {/* Card Image */}
                <figure className="lg:w-1/2">
                    <img
                        src={url}
                        alt="Service"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </figure>
                {/* Card Content */}
                <div className="card-body lg:w-2/3">
                    <h2 className="card-title text-2xl font-semibold">{name}</h2>
                    <p className="text-sm text-gray-500 mb-4">Provided by</p>
                    {/* Provider Info */}
                    <div className="flex items-center gap-3">
                        <img
                            className="rounded-full w-10 h-10"
                            src={photoURL}
                            alt="Provider"
                        />
                        <h1 className="font-medium">{providerName}</h1>
                    </div>
                    <div className="divider"></div>
                    <p className="italic mb-8">{description}</p>
                    <p className="font-medium">Area: {area}</p>
                    <p className="font-medium text-primary">Price: {price} BDT</p>
                    {/* Call to Action */}
                    <div className="card-actions justify-end mt-4">
                        <button className="btn btn-primary" onClick={() => document.getElementById(_id).showModal()}>
                            Book Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <dialog id={_id} className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box" onSubmit={handleBookingSubmit}>
                    <h3 className="font-bold text-lg">Book Service</h3>
                    <div className="py-4 space-y-3">
                        <div className="flex flex-col">
                            <label className="font-medium">Service ID</label>
                            <input
                                type="text"
                                value={_id}
                                className="input input-bordered"
                                readOnly
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium">Service Name</label>
                            <input
                                type="text"
                                value={name}
                                className="input input-bordered"
                                readOnly
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium">Service Image</label>
                            <input
                                type="text"
                                value={url}
                                className="input input-bordered"
                                readOnly
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium">Provider Email</label>
                            <input
                                type="text"
                                value={providerEmail}
                                className="input input-bordered"
                                readOnly
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium">Provider Name</label>
                            <input
                                type="text"
                                value={providerName}
                                className="input input-bordered"
                                readOnly
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium">Your Email</label>
                            <input
                                type="text"
                                value={userEmail}
                                className="input input-bordered"
                                readOnly
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium">Your Name</label>
                            <input
                                type="text"
                                value={userName}
                                className="input input-bordered"
                                readOnly
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium">Service Taking Date</label>
                            <input
                                type="date"
                                name="date"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium">Special Instructions</label>
                            <textarea
                                name="instruction"
                                className="textarea textarea-bordered"
                                placeholder="Any specific requirements..."
                            ></textarea>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium">Price</label>
                            <input
                                type="text"
                                value={`${price} BDT`}
                                className="input input-bordered"
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="modal-action">
                        <button type="submit" className="btn btn-primary">
                            Purchase
                        </button>
                        <button type="button" className="btn" onClick={() => document.getElementById(_id).close()}>
                            Cancel
                        </button>
                    </div>
                </form>
            </dialog>
        </>
    );
};

export default DetailsCard;
