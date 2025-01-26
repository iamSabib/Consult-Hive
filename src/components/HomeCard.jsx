import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const HomeCard = ({ url, name, price, area, description, email, displayName, photoURL, _id }) => {

    const {setLoading} = useContext(AuthContext);
    // setLoading(false);

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl max-w-3xl mx-auto ">
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
                {/* Service Title */}
                <h2 className="card-title text-2xl font-semibold">{name}</h2>
                <p className="text-sm text-gray-500 mb-4">
                    Provided by
                </p>
                {/* Provider Info */}
                <div className="flex items-center gap-3">
                    <img
                        className="rounded-full w-10 h-10"
                        src={photoURL}
                        alt="Provider"
                    />
                    <h1 className="font-medium">{displayName}</h1>
                </div>
                <div className="divider"></div>
                {/* Service Details */}
                <p className=" italic mb-8">{description}</p>
                <p className="font-medium">Area: {area}</p>
                <p className="font-medium text-primary">Price: {price} BDT</p>
                {/* Call to Action */}
                <div className="card-actions justify-end mt-4">
                    <Link to={`/service/${_id}`} onClick={()=>setLoading(true)}>
                    <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;
