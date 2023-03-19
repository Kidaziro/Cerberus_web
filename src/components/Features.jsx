import { hero01, shield } from "../assets"

export const Features = () => {
    return (

        <div className="flex justify-center items-center  pb-[100px] " id="features">
<div class="overlay"/>
            <div className="lg:max-w-[1380px]  w-full flex justify-between">
                <div className="absolute flex justify-center items-center lg:pl-[100px] lg:pt-[200px] md:pt-[20%] ">
                    <div className="bluer-gradient lg:p-10 p-4 rounded-2xl z-[0]  ">
                   

                        <p className="lg:text-5xl md:text-2xl text-[15px]  font-light    
                    ">You Do The Business,<br />
                            We’ll Handle <span className="text-[#088888] ">Your Data.</span>
                        </p>
                        <p className="lg:text-2xl text-[10px] lg:max-w-[700px] font-light lg:pt-5 ">
                            Our team of experts uses a methodology to secure <br className="sm:hidden block" /> your data with the most advanced technology.
                        </p>
                    </div>

                    <div className="bluer-gradient-2 rounded-xl absolute flex justify-center items-center z-[1] lg:right-[-200px] lg:top-[150px] md:top-[130px] top-[-45px] right-[-105px]  ">
                        <div className="bg-glass rounded-full flex justify-between m-3">
                            <img src={shield} alt="shield" className="lg:w-[50px]  w-[30px] lg:m-2 m-1" />
                        </div>

                        <div className="lg:pl-1 lg:pr-10 pr-5">
                            <p className="font-light lg:text-xl text-sm ">100% Secured</p>
                            <p className="lg:text-[10px] text-[9px] font-light  ">We take proactive steps make sure your <br /> information and data are secure.</p>
                        </div>
                    </div>
                    <div className="btn absolute flex justify-center items-center z-[1] rounded-xl lg:top-[430px] md:top-[250px] lg:right-[-100px]  right-[-100px] top-[100px]  ">
                        <a href="#download">

                            <div className="flex justify-center items-center lg:px-20 px-10 lg:py-7 py-5">
                                <p>
                                    Get Started
                                </p>
                            </div>
                        </a>

                    </div>
                </div>
                <div />
                <img src={hero01} alt="hero01" className="w-[1100px] " />

            </div>

        </div>

    )
}
