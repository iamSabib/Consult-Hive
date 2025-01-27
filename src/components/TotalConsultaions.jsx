import CountUp from 'react-countup';
import { motion } from "framer-motion";

const TotalConsultaions = () => {
    return (

        <div className="card lg:card-side bg-base-100 shadow-xl pb-4 ">
            <motion.div
                animate={{
                    x: [0, -10, 0, 10, 0], // Move left (-10) and right (10), back to 0
                }}
                transition={{
                    duration: 2,        // Duration of one shake cycle
                    repeat: Infinity,   // Infinite loop of animation
                    repeatType: "loop", // Repeat in a loop
                    ease: "easeInOut",  // Easing for smooth animation
                }}
            >
                <figure className='w-[400px] h-full object-cover mx-auto'>
                    <img
                        src={'https://img.freepik.com/free-vector/consulting-concept-illustration_114360-2579.jpg?semt=ais_hybrid'}
                        alt="Album"
                    />
                </figure>
            </motion.div>
            <div className="card-body">
                <h2 className="card-title justify-center text-4xl lg:mt-20">Total Consultations Served</h2>
                <div className='grow flex justify-center items-center lg:mb-20'>
                    <CountUp
                        start={0}
                        end={2613}
                        duration={16}
                        suffix="+"
                        enableScrollSpy={true}
                        scrollSpyDelay={100}
                        scrollSpyOnce={true}
                    >
                        {({ countUpRef }) => (
                            <div className='text-3xl font-bold my-5 btn h-auto px-6 py-2 btn-active'>
                                <span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>
                </div>
                <div className="card-actions justify-end">
                    <a href="">
                        <button className="btn btn-primary">Discover</button>
                    </a>
                </div>
            </div>
        </div>

    );
};

export default TotalConsultaions;
