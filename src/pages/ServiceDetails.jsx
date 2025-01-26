import { useLoaderData } from 'react-router-dom';
import DetailsCard from '../components/DetailsCard';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const ServiceDetails = () => {
    const {setLoading} = useContext(AuthContext)
    const consultaionService = useLoaderData();
    
    setLoading(false)
    return (
        <div>
            Service Details 
            <div>
                <DetailsCard {...consultaionService}></DetailsCard>
            </div>
        </div>
    );
};

export default ServiceDetails;