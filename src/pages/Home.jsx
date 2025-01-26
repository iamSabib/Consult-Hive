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
            Home {consultaionServices?.length}
            {/* feature service */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {consultaionServices?.map(service => <HomeCard key={service._id} {...service}></HomeCard>)}
            </div>

        </div>
    );
};

export default Home;