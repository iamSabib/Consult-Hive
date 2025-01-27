import { useLoaderData } from 'react-router-dom';
import DetailsCard from '../components/DetailsCard';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const ServiceDetails = () => {
    const {setLoading} = useContext(AuthContext)
    const consultaionService = useLoaderData();
    
    setLoading(false)
    return (
        <div>
            <Helmet><title>Service Hive</title></Helmet>
            <h2 className='text-center text-3xl font-bold py-10'>Service Details </h2>
            <div>
                <DetailsCard {...consultaionService}></DetailsCard>
            </div>
        </div>
    );
};

export default ServiceDetails;