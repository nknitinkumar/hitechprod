import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Russo_One, Poppins } from 'next/font/google';

const russo = Russo_One({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: '400' });

const page = () => {
  return (
    <>
     <div className='bg-[#F4F4F4] py-32 lg:py-32'>
        <div className='conatiner mx-5 lg:mx-28 px-1 lg:px-5'>
            <div className="my-3 lg:my-5">
                <h1 className={`text-[25px] md:text-[32px] lg:text-[32px] ${russo.className}`}>About Us</h1>
            </div>
            <div className={`my-5 text-[13px] md:text-[16px] lg:text-[16px] ${poppins.className}`}>
                <p>
                    Hi-Tech Animation is a leading content creation and animation studio based in India, with advanced production facilities in Kolkata and Mumbai. We’re honoured to work with an impressive lineup of clients from around the world, including My Jove Corporation (US), Sony Yay, Nickelodeon, Byju’s, Cartoon Network, Zee News, Narayana, ABP Ananda, Zee Bangla, the SITI Group, and many other esteemed organizations. Our team of talented artists and experienced creatives brings a wealth of expertise in content creation, animation, VFX, and filmmaking. At Hi-Tech Animation, we take pride in delivering exceptional visual content and production services for clients everywhere.
                </p>
            </div>
            <div className='mt-20'>
            <div className='flex flex-wrap justify-between gap-5'>
                    <div className='bg-white w-[100%] md:w-[48%] lg:w-[48%] p-5 lg:p-8 rounded-3xl'>
                        <div className='flex gap-3 lg:gap-5 mt-5 items-center'>
                            <Link  href="#">
                            <Image className='img1' src="/assets/img/Vector.jpg" alt="logo" width={36} height={36}/>
                            </Link>
                            <h2 className={`text-[22px] md:text-[30px] lg:text-[30px] ${russo.className}`}>
                                Mission</h2>
                        </div>
                        <p className={`mt-5 lg:mt-8 text-[13px] md:text-[16px] lg:text-[16px] ${poppins.className}`}>
                            At Hi-Tech Animation, our mission is to bring imagination to life through world-class animation and visual storytelling. We are dedicated to producing engaging animated content, enhancing audience experiences with top-tier Ed-Tech content, and crafting impactful corporate and brand communication videos. By blending creativity with cutting-edge technology, we deliver exceptional visuals that resonate with audiences and amplify brand identities. With our highly skilled team and tie ups across world we strive to be the trusted partner for national and international clients, providing specialized services in content creation, animation, VFX, and filmmaking. Our mission is to inspire, educate, and entertain through the power of animation and visual innovation.</p>
                    </div>
                    <div className='bg-white w-[100%] md:w-[48%] lg:w-[48%] p-5 lg:p-8 rounded-3xl'>
                        <div className='flex gap-3 lg:gap-5 mt-5 items-center'>
                            <Link href="#">
                                <Image className='img1' src="/assets/img/Vector.jpg" alt="logo" width={36} height={36}/>
                            </Link>
                            <h2 className={`text-[22px] md:text-[30px] lg:text-[30px] ${russo.className}`}>
                                Vision</h2>
                        </div>
                        <p className={`mt-5 lg:mt-8 text-[13px] md:text-[16px] lg:text-[16px] ${poppins.className}`}>
                        At Hi-Tech Animation, we envision a world where stories come alive through captivating visuals and meaningful content. As an India-based industry leader in content creation, we strive to create exceptional contents that engage, entertain, and inspire diverse audiences. we are committed to delivering impactful content that enhances learning & communication experiences worldwide. Our vision extends to empowering brands and businesses through impactful communication videos for the corporates, institutes and broadcasters, helping them share their unique stories effectively with both internal teams and external audiences. From brand storytelling to advertisement campaigns, we aim to craft compelling visual narratives that amplify brand identities and create lasting connections with audiences. we embrace domestic and international projects alike, working tirelessly to push the boundaries of Content creation, animation, VFX, and filmmaking. We are dedicated to establishing Hi-Tech Animation as a global leader in specialized visual content, consistently setting the standard for creativity, innovation, and excellence.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='bg-[#D3575A] py-5 lg:py-32'>
        <div className='conatiner mx-5 lg:mx-28 px-1 lg:px-5'>
            <div className='flex flex-wrap justify-center gap-10'>
                <div className="w-[100%] md:w-[30%] lg:w-[30%]">
                    <div className="relative">
                        <Link className="" href="#">
                            <Image src="/assets/img/Subtract.png" alt="logo" width={481} height={482}/>
                            <div
                                className='absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 to-transparent rounded-b-[12px]'>
                            </div>
                            <div className='absolute bottom-3 right-5 lg:bottom-5 lg:right-5 text-white'>
                                <h6 className={`text-[14sspx] md:text-[14px] lg:text-[20px] ${russo.className}`}>
                                    Mr. Subrata Roy</h6>
                                <p className={`text-[10px] md:text-[10px] lg:text-[12px] ${poppins.className}`}>
                                    Managing Director</p>
                            </div>
                        </Link>
                    </div>
                    <p className={`p-5 text-white text-[13px] md:text-[13px] lg:text-[16px] ${poppins.className}`}>
                        The Founder
                        and Managing Director of Hi-Tech Animation and Moople, Mr. Roy
                        with 25 years of experience has founded the company with a single vision – to transform Kolkata
                        as the Animation hub of the India. A veteran in the animation industry, he guides the overall
                        creative and aesthetic aspiration of the organization. A pillar of humility, honesty, integrity
                        and empathy, he is the primary motivating force and the backbone behind all.</p>
                </div>
                <div className="w-[100%] md:w-[30%] lg:w-[30%]">
                    <div className="relative">
                        <Link className="" href="#">
                            <Image src="/assets/img/Subtract2.png" alt="logo" width={481} height={482}/>
                            <div
                                className='absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 to-transparent rounded-b-[12px]'>
                            </div>
                            <div className={`absolute bottom-3 right-5 lg:bottom-5 lg:right-5 text-white ${russo.className}`}>
                                <h6 className='text-[14sspx] md:text-[14px] lg:text-[20px]'>
                                    Mr. Anurag Chirmar</h6>
                                <p className={`text-[10px] md:text-[10px] lg:text-[12px] ${poppins.className}`}>
                                    Director</p>
                            </div>
                        </Link>
                    </div>
                    <p className={`p-5 text-white text-[13px] md:text-[13px] lg:text-[16px] ${poppins.className}`}>
                        A director
                        in SITI Group of Companies, Mr. Chirimar brings in a wealth of quantitative experience from the
                        media industry. His excellent networking skills and ability to connect with the influencers in
                        the industry has been a game changer for the organization. With a motto “All dreams can be
                        fulfilled with hard work, honesty and immaculate planning” his ability to connect, motivate and
                        inspire is exceptional.</p>
                </div>
                <div className='w-[100%] md:w-[30%] lg:w-[30%]'>
                    <div className='relative'>
                        <Link href="#">
                            <Image src="/assets/img/Subtract3.png" alt="logo" width={481} height={482}/>
                            <div
                                className='absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 to-transparent rounded-b-[12px]'>
                            </div>
                            <div className={`absolute bottom-3 right-5 lg:bottom-5 lg:right-5 text-white ${russo.className}`}>
                                <h6 className='text-[14px] md:text-[14px] lg:text-[20px]'>
                                    Mr. Prashant Chopra</h6>
                                <p className={`text-[10px] md:text-[10px] lg:text-[12px] ${poppins.className}`}>
                                    Director</p>
                            </div>
                        </Link>
                    </div>
                    <p className={`p-5 text-white text-[13px] md:text-[13px] lg:text-[16px] ${poppins.className}`}>
                        A
                        self-motivated and results driven director in PS Group of companies, Mr. Chopra sets the
                        strategic direction for Moople. Mr. Chopra is an energetic entrepreneur with over 18 years of
                        experience and holds a masters degree in FMBA from SP Jain Institute of Management & Research,
                        Mumbai. He uses his expertise in Finance, Human Resource and Marketing and his strong leadership
                        skills to drive the team towards excellence.</p>
                </div>
            </div>
        </div>
    </div>
    {/* <div className='bg-[#F4F4F4] py-5 lg:py-24'>
        <div className='conatiner mx-5 lg:mx-28 px-1 lg:px-5'>
            <div className='flex flex-wrap justify-center gap-10'>
                <div className='w-[100%] md:w-[30%] lg:w-[30%]'>
                    <div className='relative'>
                        <Link href="#">
                            <Image src="/assets/img/Subtract4.png" alt="logo" width={481} height={482}/>
                            <div
                                className='absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 to-transparent rounded-b-[12px]'>
                            </div>
                            <div className={`absolute bottom-3 right-5 lg:bottom-5 lg:right-5 text-white ${russo.className}`}>
                                <h6 className="text-[14px] md:text-[14px] lg:text-[20px]">
                                    Mr. Ashish Thapar</h6>
                                <p className={`text-[10px] md:text-[10px] lg:text-[12px] ${poppins.className}`}>
                                    CEO</p>
                            </div>
                        </Link>
                    </div>
                    <p className={`p-5 text-[13px] md:text-[13px] lg:text-[16px] ${poppins.className}`}>
                        Mr. Thapar has been
                        into animation & production business for over 20 years. Having worked on multiple projects of
                        international repute with leading studios like Disney, Vanguard Films, Sony Films, The Jim
                        Henson Company, RGH Entertainment and leading Indian production houses like Dharma Productions &
                        Yashraj Films has given him the opportunity to interact with some of the best creative talent
                        globally. </p>
                </div>
                <div className="w-[100%] md:w-[30%] lg:w-[30%]">
                    <div className="relative">
                        <Link href="#">
                            <Image src="/assets/img/Subtract5.png" alt="logo" width={481} height={482}/>
                            <div
                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 to-transparent rounded-b-[12px]">
                            </div>
                            <div className={`absolute bottom-3 right-5 lg:bottom-5 lg:right-5 text-white ${russo.className}`}>
                                <h6 className="text-[14px] md:text-[14px] lg:text-[20px]">
                                    Mr. Manoj Bose</h6>
                                <p className={`text-[10px] md:text-[10px] lg:text-[12px] ${poppins.className}`}>
                                    Head of Production</p>
                            </div>
                        </Link>
                    </div>
                    <p className={`p-5 text-[13px] md:text-[13px] lg:text-[16px] ${poppins.className}`}>
                        Mr. Bose began his
                        career with Hi-Tech Animation as any other animation student. This regular student however had
                        determination and dreams bigger than any ordinary student. Over the years, he has gained over 15
                        years of experience with end to end production at Hi-Tech Animation. He is an associate with the
                        organisation at present. He also leads the entire production team with zest and excellence.</p>
                </div>
                <div className="w-[100%] md:w-[30%] lg:w-[30%]">
                    <div className="relative">
                        <Link href="#">
                            <Image src="/assets/img/Subtract6.png" alt="logo" width={481} height={482}/>
                            <div
                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 to-transparent rounded-b-[12px]">
                            </div>
                            <div className="absolute bottom-3 right-5 lg:bottom-5 lg:right-5 text-white">
                                <h6 className={`text-[14px] md:text-[14px] lg:text-[20px] ${russo.className}`}>
                                    MR Arun Thander</h6>
                                <p className={`text-[10px] md:text-[10px] lg:text-[12px] ${poppins.className}`}>
                                    Head of Animation</p>
                            </div>
                        </Link>
                    </div>
                    <p className={`p-5 text-[13px] md:text-[13px] lg:text-[16px] ${poppins.className}`}>
                        Mr. Thander has overall experience
                        of 10- years is designing & animation , He is
                        leading the 3D animation team, Having worked on multiple projects of national and international
                        repute with leading studios.</p>
                </div>
            </div>
        </div>
    </div>  */}
    </>
  )
}

export default page