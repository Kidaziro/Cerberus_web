import { footer, forms } from "../assets"


export const Contactus = () => {

    return (

        <section className="flex items-center justify-center pb-[20px]">

            <div className="lg:max-w-[1380px]  w-full">
                <p className="lg:text-5xl text-3xl lg:pl-[120px] pl-3 ">
                    Contact<span className="text-[#007D69] ">-Us</span>

                    <hr className="lg:w-[60px] md:w-[60px] w-[20px] lg:mt-3 mt-2  lg:ml-[180px] ml-[125px]  border-[#007D69] " />
                    <hr className="lg:w-[60px] md:w-[60px] w-[40px] mt-[-20px] lg:ml-[180px] ml-[110px] border-[#007D69] line" />
                </p>
                <div className="flex justify-center text-[#ddd] text-center">
                    <p className="lg:max-w-[990px] max-w-[340px] lg:text-lg text-sm">
                        We're here to help! Please use the form below to send us your questions or comments. Alternatively, you can email or call us using the information provided on this page. We appreciate your feedback <br className="lg:block hidden" /> and will respond as soon as possible.
                    </p>
                </div>
            <div className="flex justify-center">

                <img src={forms} alt="form" className="pt-10 lg:w-[700px] "  />
            </div>
            <div className="flex justify-center">
                <img src={footer} alt="form" className="pt-10 lg:w-[700px] "  />
            </div>
            
            </div>
        </section>

    )

}
