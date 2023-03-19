import { download, greenC, gtri, hero, mtri, ptri } from "../assets"
import { Button } from "./Button"

export const Hero = () => {

    return (
        <section className="flex justify-center items-center pb-[300px]" id="home">
      <div class="overlay"/>

            <div className="lg:max-w-[1380px]  w-full">
                <div className="flex justify-between md:flex-row flex-col">
                    <div className="">
                        <div className="absolute pt-10">
                            <h1 className="pt-[120px] lg:text-6xl md:text-3xl text-2xl font-Hacker lg:pl-[150px] pl-[50px] ">Cerperus project</h1>
                            <p className="font-light text-[#ddd] lg:pl-[155px] pl-[55px] lg:text-3xl z-[2] ">Start Now And <span className="text-[#007D69] ">Secure</span> Your Data</p>
                        <Button/>

                        </div>
                        <img src={ptri} alt='light' className="lg:pl-[350px] pl-[250px] lg:top-[300px] top-[120px]  absolute animate-bounce01 w-[500px] " />
                        <img src={mtri} alt='light' className="lg:pl-[300px] pl-[100px] lg:top-[400px] top-[300px] absolute animate-bounce02 lg:w-[750px] w-[250px] " />
                        <img src={gtri} alt='light' className="lg:pl-[150px] pl-[100px] lg:top-[700px] top-[450px] absolute animate-bounce03 lg:w-[750px] w-[200px] " />
                        <img src={greenC} alt="greeb" className="lg:w-[300px] lg:pt-0 w-[180px] pt-12 " />

                    </div>
                    
                    <img src={hero} alt="hero" className="w-[600px] " />
                    
              
                </div>

            </div>
        </section>

    )

}
