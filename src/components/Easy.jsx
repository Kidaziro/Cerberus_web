import { Gnu, he } from "../assets"

export const Easy = () => {
    return (

        <section className="flex items-center justify-center pb-[300px] ">
            <div className="lg:max-w-[1380px]  w-full flex  justify-between">



                <div className="absolute flex justify-center items-center lg:pl-[220px] lg:pt-[50px] md:pt-[20%] pl-10">

                    <div className="bluer-gradient lg:p-10 p-4 rounded-2xl z-[0] ">

                        <p className="lg:text-5xl md:text-2xl text-[15px]  font-light ">
                            Easily  Secure Your
                            <span className="text-[#088888] "> Informations ,</span> <br />For All Devices
                        </p>

                    </div>


                </div>
                <div className="absolute flex justify-center items-center lg:pl-[700px] lg:pt-[100px] md:pt-[20%] pt-[20%] pl-[130px]">
                    <img src={Gnu} alt="" className="lg:w-[100%]  w-[230px] " />

                </div>
                <img src={he} alt="robot" className="lg:w-[450px] w-[180px] " />
                <div className="w-[100%]" />

            </div>


        </section>

    )
}
