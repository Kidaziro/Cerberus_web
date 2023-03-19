import { downloadg, downloadw, ptri } from "../assets"
import { downloadl } from "../constants"

export const Download = () => {
    return (

        <section className="flex items-center justify-center lg:pb-[500px] pb-[300px]  " id="download">
            <div className="lg:max-w-[1380px]  w-full ">
                <p className="lg:text-5xl text-3xl lg:pl-[120px] pl-3 ">
                    Download <span className="text-[#007D69] ">Now</span>

                    <hr className="lg:w-[70px] md:w-[60px] w-[20px] lg:mt-3 mt-2  lg:ml-[250px] ml-[176px]  border-[#007D69] " />
                    <hr className="lg:w-[90px] md:w-[60px] w-[40px] mt-[-20px] lg:ml-[250px] ml-[160px] border-[#007D69] line" />
                </p>
                <div className="flex justify-center text-[#ddd] text-center">
                    <p className="lg:max-w-[990px] max-w-[340px] lg:text-lg text-sm">

                        If you're a Windows user, you'll be pleased to know that this software is available for your operating system and comes with a hassle-free installation process. With just a few clicks, you can easily install the software <br className="lg:block hidden" /> and launch it in no time.
                    </p>
                </div>
                <div className="flex justify-end mt-10 lg:pr-[10px] ">
                    <div className="download pt-1 lg:w-[500px] rounded-xl z-[1] ">
                        <div className="p-10">
                            {downloadl.map((dow, index) => (
                                <div className={`${index != 0 ? "pt-10" : "pt-0"} flex justify-between`} key={dow.id} >
                                    <div>

                                        <p className="underline font-semibold">{dow.title} </p>
                                        <p className="text-[#ddd] lg:max-w-[300px] max-w-[20s0px]  text-sm "> {dow.text}</p>

                                    </div>
                                    <a href={dow.link} >
                                        <img src={downloadw} alt="btn" className="w-[30px] h-[50px] " />
                     
                                    </a>


                                </div>
                            ))
                            }
                        </div>
                    </div>

                    <div className="absolute pr-[400px] pt-[90px]  lg:block hidden">
                        <img src={downloadg} alt="download" className=" w-[800px] " />
                    </div>
                </div>

                <img src={ptri} alt='light' className="absolute lg:pl-[900px] lg:pt-[200px] pl-[130px] pt-[25px]   animate-bounce01" />




            </div>
        </section>

    )
}