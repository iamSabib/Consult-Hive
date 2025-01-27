import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import HomeCard from "../components/HomeCard";
import Loading from "../components/Loading";


const Home = () => {

    const {loading ,setLoading} = useContext(AuthContext);
    const consultaionServices = useLoaderData();
    setLoading(false);

    console.log(consultaionServices);

    if(loading) return <Loading></Loading>

    return (
        <div>
            <h2 className="text-3xl font-bold py-10 text-center">Feature Services</h2>
            {/* feature service */}
            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-5">
                {consultaionServices?.map(service => <HomeCard key={service._id} {...service}></HomeCard>)}
            </div>

        </div>
    );
};

export default Home;