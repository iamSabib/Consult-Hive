import { useContext, useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import AllHomeCard from '../components/AllHomeCard';
import Loading from '../components/Loading';
import { Helmet } from 'react-helmet-async';

const AllServices = () => {
    const { setLoading, loading } = useContext(AuthContext);
    const consultaionServices = useLoaderData();
    const [searchText, setSearchText] = useState('');
    setLoading(false);

    if (loading) return <Loading />;

    // Filtered services based on search text
    const filteredServices = consultaionServices.filter((service) =>
        service.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div>
            <Helmet>
                <title>All Hive</title>
            </Helmet>

            <h1 className="text-center text-3xl font-bold py-10">Search Services</h1>

            {/* Search Input */}
            <div className="mb-6 flex flex-col mx-auto justify-center items-center">
                <input
                    type="text"
                    placeholder="Search services by name..."
                    className="input input-bordered w-full max-w-lg mb-5"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)} // Update search text on input change
                />

                {/* Search Results Section */}
                {searchText && (
                    <div className="mb-8 mx-auto">
                        <h2 className="text-xl font-semibold mb-10">Search Results</h2>
                        {filteredServices.length === 0 ? (
                            <p>No services found matching your search.</p>
                        ) : (
                            filteredServices.map((service) => (
                                <div key={service._id} className=" flex justify-between gap-10 mb-1 border p-2 px-4">
                                    <p>{service.name}</p>
                                    <Link to={`/service/${service._id}`} >
                                       <button className='btn btn-accent'> {service.name}</button>
                                    </Link>
                                </div>
                            ))
                        )}
                    </div>
                )}

            </div>



            {/* All Services Section */}
            <h1 className="text-center text-3xl font-bold py-10">All Services</h1>
            <div className="flex flex-col mx-auto gap-y-7">
                {consultaionServices.map((service) => (
                    <AllHomeCard key={service._id} {...service} />
                ))}
            </div>
        </div>
    );
};

export default AllServices;
