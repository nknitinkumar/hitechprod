"use client";


import { useRouter } from 'next/navigation'; // Use the appropriate import for Next.js version
import { Russo_One, Poppins } from 'next/font/google';

const russo = Russo_One({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: '400' });


export default function Home() {
    const router = useRouter();

  const navigateToProjectTab = (tabIndex) => {
    // Navigate to the projects page with the specified tab in the query parameters
    router.push(`/projects?tab=${tabIndex}`);
  };
    

  return (
    <>
      <section className="bg-[url('/assets/img/banner/banner-hitech.jpg')] bg-cover bg-center h-[600px] lg:mt-[68px]">
        <div className="container mx-auto px-4">
            <div className=" flex flex-wrap">
                <div className="h-[600px] flex justify-center flex-col">
                    <div className="bg-black bg-opacity-20 inline-block p-4 rounded-lg">
                        <h1 className={`text-[25px] md:text-[32px] lg:text-[32px] text-white ${russo.className}`}>Hi-Tech Animation<br />
                            Studio</h1>
                        <p className={`text-white text-[15px] md:text-[20px] lg:text-[20px] pb-12 pt-6 ${poppins.className}`}>An India based premier
                            Animation and<br /> Motion Graphics studio in Kolkata</p>

                        <div>
                            <a className={`text-white bg-[#C8181D] text-[13px] md:text-[16px] lg:text-[16px] px-8 py-3 rounded-lg ${poppins.className}`} href='/contact'>Contact With Us</a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
    </section>
    <section>
        <div className="flex flex-wrap gap-y-1">
            <div className="w-[100%]  md:w-[50%] lg:w-[25%]">
                <div className="h-[250px] flex justify-center flex-col px-12 my-10">
                    <div>
                        <h2 className={`text-[17px] md:text-[20px] lg:text-[20px] ${russo.className}`}>
                            TELEVISION CARTOON<br /> PROGRAMMES</h2>
                        <p className={`text-[13px] pt-6 pb-12 leading-[20px] ${poppins.className}`}>Rated as one of the largest
                            production houses In eastern India </p>
                    </div>
                    <div>
                        <button className={`text-white bg-[#C8181D] text-[13px] lg:text-[16px] px-8 py-3 rounded-lg ${poppins.className}`}
                            onClick={() => navigateToProjectTab(1)}>View More</button>
                    </div>
                </div>
            </div>
            <div className="w-[100%]  md:w-[50%] lg:w-[25%] bg-[#262626] ">
                <div className="h-[250px] flex justify-center flex-col px-12 my-10">
                    <div>
                        <h2 className={`text-[17px] md:text-[20px] lg:text-[20px] text-white ${russo.className}`}>ED-TECH <br /> CONTENT</h2>
                        <p className={`text-[13px] text-white pt-6 pb-12 leading-[20px] ${poppins.className}`}>Rated as one of the largest
                            production houses In eastern India </p>
                    </div>
                    <div>
                        <button className={`text-[#000] bg-[#FFF] text-[13px] lg:text-[16px] px-8 py-3 rounded-lg ${poppins.className}`}
                            onClick={() => navigateToProjectTab(2)}>View More</button>
                    </div>
                </div>
            </div>
            <div className="w-[100%] md:w-[50%] lg:w-[25%]">
                <div className="h-[250px] flex justify-center flex-col px-12 my-10">
                    <div>
                        <h2 className={`text-[17px] md:text-[20px] lg:text-[20px] ${russo.className}`}>
                            CORPORATE<br /> COMMUNICATION VIDEOS</h2>
                        <p className={`text-[13px] pt-6 pb-12 leading-[20px] ${poppins.className}`}>Rated as one of the largest
                            production houses In eastern India </p>
                    </div>
                    <div>
                        <button className={`text-white bg-[#C8181D] text-[13px] lg:text-[16px] px-8 py-3 rounded-lg ${poppins.className}`}
                            onClick={() => navigateToProjectTab(3)}>View More</button>
                    </div>
                </div>
            </div>
            <div className="w-[100%] md:w-[50%] lg:w-[25%] bg-[#262626]">
                <div className="h-[250px] flex justify-center flex-col px-12 my-10">
                    <div>
                        <h2 className={`text-[17px] md:text-[20px] lg:text-[20px] text-white ${russo.className}`}>BRAND AND<br />
                            ADVERTISEMENT VIDEOS</h2>
                        <p className={`text-[13px] text-white pt-6 pb-12 leading-[20px] ${poppins.className}`}>Rated as one of the largest
                            production houses In eastern India </p>
                    </div>
                    <div>
                        <button className={`text-[#000] bg-[#FFF] text-[13px] lg:text-[16px] px-8 py-3 rounded-lg ${poppins.className}`}
                            onClick={() => navigateToProjectTab(4)}>View More</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="bg-[#F4F4F4] py-20">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center">
                <div className="w-[100%] md:w-[70%] lg:w-[50%]">
                    <img className="rounded-l-[20px]" src="/assets/img/home/about-us.jpg" alt="" width="100%"
                        height="100%" />
                </div>
                <div
                    className="w-[100%] md:w-[70%] lg:w-[40%] flex justify-center flex-col bg-[#fff] rounded-r-[20px] pb-12">
                    <div className="px-8 lg:px-16">
                        <div className="pt-8">
                            <h2 className={`text-[22px] md:text-[30px] lg:text-[30px] ${russo.className}`}>About Us</h2>
                            <p className={`text-[14px] pb-16 pt-3 ${poppins.className}`}>
                                Hi-Tech Animation is an India based animation production studio with a state-of-the-art
                                production facility with offices located at Kolkata and Mumbai. Other than having a
                                production company, Hi-Tech Animation has a line of premier training institutes in
                                Eastern India.  Our animation studio boasts of an esteemed array of national and
                                international clients like Sony Yay, Nick, Byju’s, Cartoon Network, Zee News, ABP
                                Ananda, Zee Bangla, SITI Group of Channels, to name a few. We are doing Domestic as well
                                as International Projects and are also involved in creating our own IP. Our highly
                                experienced artists and team with creative heads having in-depth knowledge of the
                                animation industry give us the expertise tag when it comes to providing specialized
                                animation, VFX, Film making and other services to the world.
                            </p>
                        </div>
                        <div>
                            <a className={`text-white bg-[#C8181D] text-[13px] lg:text-[16px] px-8 py-3 rounded-lg ${poppins.className}`} href="/about">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="py-20">
        <div className="container mx-auto px-4">
            <div className="pb-12">
                <h2 className={`text-[22px] md:text-[30px] lg:text-[30px] ${russo.className}`}>
                    Our Clients & Broadcasters</h2>
            </div>
            <div className="flex flex-wrap border-2 p-16 rounded-[20px] relative">
                <div className="w-[50%] lg:w-[25%] px-2 border-r-2 border-b-2">
                    <img className="block mx-auto" src="/assets/img/partner/abp.png" alt="" width="160" height="160" />
                </div>
                <div className="w-[50%] lg:w-[25%] px-2 border-r-2 border-b-2">
                    <img className="block mx-auto" src="/assets/img/partner/byjus.png" alt="" width="160" height="160" />
                </div>
                <div className="w-[50%] lg:w-[25%] px-2 border-r-2 border-b-2">
                    <img className="block mx-auto" src="/assets/img/partner/cn.png" alt="" width="160" height="160" />
                </div>
                <div className="w-[50%] lg:w-[25%] px-2 border-b-2">
                    <img className="block mx-auto" src="/assets/img/partner/narayana.png" alt="" width="160" height="160" />
                </div>
                <div className="w-[50%] lg:w-[25%] px-2 border-r-2 border-b-2">
                    <img className="block mx-auto" src="/assets/img/partner/netflix.png" alt="" width="160" height="160" />
                </div>
                <div className="w-[50%] lg:w-[25%] px-2 border-r-2 border-b-2">
                    <img className="block mx-auto" src="/assets/img/partner/nick.png" alt="" width="160" height="160" />
                </div>
                <div className="w-[50%] lg:w-[25%] px-2 border-r-2 border-b-2">
                    <img className="block mx-auto" src="/assets/img/partner/pogo.png" alt="" width="160" height="160" />
                </div>
                <div className="w-[50%] lg:w-[25%] px-2 border-b-2">
                    <img className="block mx-auto" src="/assets/img/partner/sonic.png" alt="" width="160" height="160" />
                </div>
                <div className="w-[50%] lg:w-[25%] px-2 border-r-2">
                    <img className="block mx-auto" src="/assets/img/partner/sony.png" alt="" width="160" height="160" />
                </div>
                <div className="w-[50%] lg:w-[25%] px-2 border-r-2">
                    <img className="block mx-auto" src="/assets/img/partner/viacom.png" alt="" width="160" height="160" />
                </div>
                <div className="w-[50%] lg:w-[25%] px-2 border-r-2">
                    <img className="block mx-auto" src="/assets/img/partner/zee-bangla.png" alt="" width="160"
                        height="160" />
                </div>
                <div className="w-[50%] lg:w-[25%] px-2">
                    <img className="block mx-auto" src="/assets/img/partner/zee-news.png" alt="" width="160" height="160" />
                </div>
            </div>
        </div>
    </section>
    <section className="bg-[#F4F4F4] py-20">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center">
                <div
                    className="w-full md:w-[70%] lg:w-[40%] bg-[#262626] flex justify-center flex-col rounded-l-[20px] pt-12 pb-16 order-2 lg:order-1">
                    <div className="px-12">
                        <div className="mb-12">
                            <h2 className={`text-[22px] md:text-[30px] lg:text-[30px] text-[#fff] mb-8 ${russo.className}`}>Creative<br/>
                                Partnership</h2>
                            <h3 className={`text-[16px] text-[#fff] mb-8 ${poppins.className}`}>WE CREATE and also we take
                                care of everything else!</h3>
                            <p className={`text-[12px] text-[#fff] leading-[25px] ${poppins.className}`}>Be a part of the fastest
                                growing vertical in the education industry. low investment franchise business</p>
                        </div>
                        <div>
                            <a className={`text-white bg-[#C8181D] text-[13px] lg:text-[16px] px-8 py-3 rounded-lg ${poppins.className}`} href="/contact">Request A Call</a>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[70%] lg:w-[40%] order-1 lg:order-2">
                    <img className="rounded-r-[20px]" src="/assets/img/home/handshake.jpg" alt="" width="100%"
                        height="100%" />
                </div>
            </div>
        </div>
    </section>
    <section className="py-20">
        <div className="container mx-auto px-4">
            <div className="mb-8">
                <h2 className={`text-[22px] md:text-[30px] lg:text-[30px] text-center ${russo.className}`}>Awards & Achievements</h2>
            </div>
            <div className="flex flex-wrap gap-y-10">
                <div className="w-[50%] lg:w-[25%] px-2">
                    <img className=" block m-auto" src="/assets/img/award/award01.png" alt="" width="80%" height="100%" />
                </div>
                <div className="w-[50%] lg:w-[25%] px-2">
                    <img className=" block m-auto" src="/assets/img/award/award02.png" alt="" width="80%" height="100%" />
                </div>
                <div className="w-[50%] lg:w-[25%] px-2">
                    <img className=" block m-auto" src="/assets/img/award/award03.png" alt="" width="80%" height="100%" />
                </div>
                <div className="w-[50%] lg:w-[25%] px-2">
                    <img className=" block m-auto" src="/assets/img/award/award04.png" alt="" width="80%" height="100%" />
                </div>
            </div>
        </div>
    </section>
    <section>
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between gap-y-2 ">
                <div className="px-1 bg-cover flex justify-around flex-col w-[100%] lg:w-[50%]">
                    <div className="bg-[#D3575A] h-[250px] md:h-[300px] lg:h-full relative rounded-tl-2xl">
                        <div className="mt-5 lg:mt-8 px-6 lg:px-11">
                            <h2 className={`text-[#FFF] text-[18px] md:text-[22px] lg:text-[28px] ${russo.className}`}>Want to join our<br/>Creative Partnerships ?</h2>
                            <p className={`mt-2 lg:mt-5 text-[#FFF] text-[12px] md:text-[22px] lg:text-[15px] ${poppins.className}`}>Click below to fill up your contact details or ping us on Whatsapp.</p>
                        </div>
                        <div className="px-6 lg:px-12 absolute bottom-8 left-0">
                            <a
                                className={`bg-[#fff] text-[12px] lg:text-[16px] py-3 lg:py-3 px-5 lg:px-8 rounded-lg float-left ${poppins.className}`}
                                href="/contact">Request A Call</a>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] md:w-[50%] lg:w-[25%] px-1 order-1 md:order-1 lg:order-1">
                    <img src="/assets/img/gal/gal1.jpg" alt="" width="100%" />
                </div>
                <div className="w-[100%] md:w-[50%] lg:w-[25%] px-1 order-2 md:order-2 lg:order-2">
                    <img src="/assets/img/gal/gal2.jpg" alt="" width="100%" />
                </div>
                <div className="w-[100%] md:w-[50%] lg:w-[25%] px-1 order-3 md:order-3 lg:order-3">
                    <img src="/assets/img/gal/gal3.jpg" alt="" width="100%" />
                </div>
                <div className="w-[100%] md:w-[100%] lg:w-[50%] px-1 order-4 md:order-5 lg:order-4">
                    <img src="/assets/img/gal/gal4.jpg" alt="" width="100%" />
                </div>
                <div className="w-[100%] md:w-[50%] lg:w-[25%] px-1 order-5 md:order-4 lg:order-5">
                    <img src="/assets/img/gal/gal5.jpg" alt="" width="100%" />
                </div>
                <div className="w-[100%] md:w-[100%] lg:w-[50%] px-1 order-6 md:order-6 lg:order-6">
                    <img src="/assets/img/gal/gal6.jpg" alt="" width="100%" />
                </div>
                <div className="w-[100%] md:w-[100%] lg:w-[50%] px-1 order-7 md:order-7 lg:order-7">
                    <img src="/assets/img/gal/gal7.jpg" alt="" width="100%" />
                </div>
            </div>
            <div className="pt-5 md:pt-12 lg:pt-12 pb-10">
                <div className="py-5 lg:py-12">
                    <p className={`text-[16px] md:text-[22px] lg:text-[30px] text-[#C8181D] ${russo.className}`}>SHAPING THE FUTURE OF
                        VISUAL<br/>COMMUNICATION
                    </p>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}