import React from 'react'

const Career = () => {
    return (
        <section className="conatiner mx-5 lg:mx-28 px-1 lg:px-5">
            <div className="bg-[url('/assets/img/career.png')] bg-cover bg-center h-auto w-full">
                <div className='lg:ml-20'>
                    <div>
                        <img className="pt-5 lg:pt-10 flex md:hidden lg:hidden" src="/assets/img/ch1.png" alt="Career Opportunity"/>
                        <img className="pt-5 lg:pt-10 hidden md:flex lg:flex" src="/assets/img/ch.png" alt="Career Opportunity"/>
                    </div>
                    <div className='flex flex-wrap mt-2'>
                        <img className="w-[100%] h-auto md:w-[250px] md:h-[290px] lg:w-[250px] lg:h-[290px]" src="/assets/img/c1.png" alt="Career Opportunity" />
                        <img className="w-[100%] h-auto md:w-[250px] md:h-[290px] lg:w-[250px] lg:h-[290px]" src="/assets/img/c2.png" alt="Career Opportunity" />
                        <img className="w-[100%] h-auto md:w-[250px] md:h-[290px] lg:w-[250px] lg:h-[290px]" src="/assets/img/c3.png" alt="Career Opportunity" />
                    </div>
                    <div className='flex flex-wrap pb-10'>
                        <img className="w-[100%] h-auto md:w-[250px] md:h-[230px] lg:w-[250px] lg:h-[230px]" src="/assets/img/c4.png" alt="Career Opportunity" />
                        <img className="w-[100%] h-auto md:w-[250px] md:h-[230px] lg:w-[250px] lg:h-[230px]" src="/assets/img/c5.png" alt="Career Opportunity" />
                        <div className='relative'>
                        <img className="w-[100%] h-auto md:w-[250px] md:h-[230px] lg:w-[250px] lg:h-[230px]" src="/assets/img/c6.png" alt="Career Opportunity" />
                        <img className="absolute bottom-0 right-1 w-[60%]" src="/assets/img/cb.png" alt="Career Opportunity" />
                        </div>
                        <img className="w-[80%] h-auto md:w-[250px] md:h-[230px] lg:w-[250px] lg:h-[230px] mx-auto" src="/assets/img/cman.png" alt="Career Opportunity" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Career