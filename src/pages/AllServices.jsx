import  { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import AllHomeCard from '../components/AllHomeCard';
import Loading from '../components/Loading';

const AllServices = () => {

    const {setLoading, loading} = useContext(AuthContext);
    const consultaionServices = useLoaderData();
    setLoading(false);

    if(loading) return <Loading></Loading>

    return (
        <div>
            <h1 className='text-center text-3xl font-bold py-10'>All Services</h1>
            <div className='flex flex-col mx-auto gap-y-7'>
                {
                    consultaionServices.map((service)=>{
                        return <AllHomeCard key={service._id} {...service}></AllHomeCard>
                    })
                }
            </div>
        </div>
    );
};

export default AllServices;