import { download, greenC, hero, ptri } from "../assets"

export const Button =()=> {
    return (


        <div className="w-full flex justify-end  pt-10 ">
        <div className="border-[5px] rounded-full lg:w-[220px] lg:h-[220px] w-[150px] h-[150px] border-[#008C75] z-[2] ">


            <a href="#download" >
                <div className="w-[100%] h-[100%]
         bluer-gradient rounded-full flex items-center justify-center
         flex-col ">
                    <p className="font-bold lg:text-2xl text-xl lg:pt-10 pt-6 text-gradient ">
                        Dwonload
                    </p>
                    <img src={download} alt="download" className="
                lg:w-[60px] w-[40px] lg:mt-5 mt-1 animate-pulse
                "/>

                </div>
            </a>
        </div>

    </div>


      )
}
