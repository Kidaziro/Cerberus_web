import { useState } from "react";
import { logo, menu ,close } from "../assets"
import { navLinks } from "../constants"


export const NavBar = () => {
    const [toggel, setToggel] = useState(false);
    return (
        <div className="w-full flex justify-center items-center pt-2 ">
            <div className="xl:max-w-[1380px]  w-full ">
      <div class="overlay"/>

                <nav className="flex justify-between">
                    <img src={logo} alt="Cerberus" className="lg:w-[200px] lg:h-[60px] w-[140px] h-auto lx:w-[200px] "/>
                    <ul className="list-none justify-end items-center flex-1 text-white sm:flex md:flex hidden">
                        {navLinks.map((nav, index) => (
                            <li key={nav.id} className={`
                            z-[2]
                            hover:text-Orange ${index===navLinks.length-1 ? 'mr-0' : 'mr-10'}`}>
                                <a href={`#${nav.id}`}>
                                    {nav.title}
                                </a>

                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center px-[20px]" >
                        <img src={toggel ? close : menu} alt="menu" className="w-[30px] h-[30px]  sm:hidden cursor-pointer z-[2] " 
                         onClick={() => setToggel((prev) =>
                            !prev
                          )}
                        />
                    <div className={`${toggel ? 'flex' : 'hidden'} z-[2]
      p-6 bluer-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px]  
      rounded-xl sidebar text-white`}>
          <ul className='list-none flex justify-end flex-col
items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`hover:text-teal-500 font-poppins font-normal 
  cursor-pointer text-[16px]  
  ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`} >

                <a href={`#${nav.id}`}>
                  {nav.title}

                </a>
              </li>
            ))}
          </ul>
        </div>


                    </div>

                </nav>

            </div>

        </div>
    )

}

