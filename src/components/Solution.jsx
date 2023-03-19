import { fingerprint, headset, progress } from "../assets"
import { card } from "../constants"

export const Solution = () => {
    return (
        <section className="flex items-center justify-center pb-[100px] "id="solution">
            <div class="overlay"/>
            <div className="lg:max-w-[1380px]  w-full">
                <p className="lg:text-5xl text-3xl lg:pl-[120px] pl-3 ">
                Our <span className="text-[#007D69] ">Solutions</span> 
                
                <hr className="lg:w-[100px] w-[60px] lg:mt-3 mt-2  lg:ml-[186px] ml-[120px]  border-[#007D69] "/>
                <hr className="lg:w-[100px] w-[60px] mt-[-10px] lg:ml-[186px] ml-[120px] border-[#007D69] line"/>
                
                </p>
                <div className="w-full flex justify-center">
                <div className="lg:flex pl-6">
                    
                    {
                        card.map((cart,indexedDB) => (
                        <div key={cart.id} className={`
                        max-w-[300px]  
                            mt-10
                        ${indexedDB == card.length - 1 ? 'mr-0 ' : 'mr-10 ' } ${indexedDB == 0 ? 'bg-white text-[#000]' : (indexedDB == 2 ? 'bg-white text-[#000]':'')  } text-center  p-5 rounded-xl shadow-lg shadow-teal-500 pb-[60px] `} >
                            <div className="w-full flex justify-center">

                            <img src={cart.logo} alt="" className="w-[150px] mb-6" />
                            </div>
                            
                            <p className="font-bold pb-3">{cart.title}</p>
                            <p className="font-light text-[15px] lg:max-w-[200px] ">{cart.text} </p>
                        
                        </div>    
                        )
                        )
                    }
                </div>

            </div>
            </div>
        </section>
    )
}
