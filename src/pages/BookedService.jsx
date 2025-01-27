import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
// import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const BookedService = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const { email } = user || {}; // Safely handle user if not available
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        if (user) {
            setLoading(true);
            axios
                .get(`https://consult-hive-server.vercel.app/bookedservices?email=${email}`, {
                    withCredentials: true,
                })
                .then((res) => {
                    setLoading(false);
                    console.log('Response Data:', res.data);
                    setBookings(res.data);
                })
                .catch((err) => {
                    setLoading(false);
                    console.error('Error:', err);
                });
        }
    }, []);

    // const updateStatus = (id, newStatus) => {
    //     console.log(`Booking ID: ${id}, New Status: ${newStatus}`);
    //     // Optional: Call an API to update the status in the backend
    //     axios
    //         .patch(`https://consult-hive-server.vercel.app/bookedservices/${id}`, { status: newStatus })
    //         .then((res) => {
    //             console.log(res.data);
    //             if (res.data.modifiedCount) {
    //                 Swal.fire('Success', 'Status updated successfully!', 'success');
    //             }
    //         })
    //         .catch((err) => console.error('Error updating status:', err));
    // };

    return (
        <div>
            <Helmet><title>Booked Hive</title></Helmet>
            <h1 className="text-center text-3xl font-bold py-10">Booked Services</h1>

            {/* Show a message if there are no bookings */}
            {bookings.length === 0 && !loading && (
                <p className="text-center text-xl text-gray-500 mb-96">You have no booked services yet.</p>
            )}

            {/* Loading spinner */}
            {loading && <Loading />}

            {/* Bookings Table */}
            {!loading && bookings.length > 0 && (
                <div className="overflow-x-auto min-h-screen">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Service Name</th>
                                <th>Instructions</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* rows */}
                            {bookings.map((book) => (
                                <tr key={book._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={book.servicePhotoURL}
                                                        alt="Avatar Tailwind CSS Component"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{book.serviceName}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{book.instruction}</td>
                                    <td>{book.date}</td>
                                    <th>
                                        {book.status}
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default BookedService;
