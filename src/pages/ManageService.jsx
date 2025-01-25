import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Loading from '../components/Loading';

const ManageService = () => {

    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const { email } = user || {};  // Safely handle user if not available
    console.log(email);

    useEffect(() => {
        if (user) { 
            setLoading(true);
            axios.get(`https://consult-hive-server.vercel.app/services?email=${email}`, {
                withCredentials: true
            })
            .then(res => {
                setLoading(false);  
                console.log("Response Data:", res.data);
            })
            .catch(err => {
                setLoading(false);  
                console.error("Error:", err);
            });
        }
    }, []); 
    
    if(loading) return <Loading></Loading>;

    return (
        <div>
            Manage Service
        </div>
    );
};

export default ManageService;
