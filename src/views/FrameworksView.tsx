import { NavLink, Outlet } from "react-router-dom"


import { IconBrandReact, IconBrandAngular, IconBrandVue, IconBrandSvelte } from '@tabler/icons-react'

export const FrameworksView = () => {
    return (
        <>
            <section id="whatis" className={`p-4 sm:p-6 md:p-8 lg:p-10`}>
                {/* gradient start */}
                {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
                {/* gradient end */}

                <article className="w-full md:w-[44rem] md:mx-auto">
                    <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] text-center mb-4 animate-fade-right animate-duration-[2000ms]">
                        Frameworks {" "}
                        <span className="text-gradient">Modernos</span>
                    </h1>

                    <p className="text-white text-center mb-2">
                        Escoge un framework
                    </p>


                    <div className="flex items-center justify-center gap-4 mb-8">
                        <NavLink
                            to={`react`}

                        >


                            <IconBrandReact className="stroke-blue-700 w-20 h-20" />
                        </NavLink>


                        <NavLink to={'angular'}>
                            <IconBrandAngular className="stroke-red-500 w-20 h-20" />
                        </NavLink>

                        <NavLink to={'vue'}>
                            <IconBrandVue className="stroke-green-500 w-20 h-20" />

                        </NavLink>

                        <NavLink to={'svelte'}>
                            <IconBrandSvelte className="stroke-orange-500 w-20 h-20" />

                        </NavLink>
                    </div>



                    <section className="">

                        <Outlet />

                    </section>


                </article>



            </section >


        </>
    )
}
