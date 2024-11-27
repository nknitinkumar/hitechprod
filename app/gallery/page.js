"use client";
import { useRef, useState } from 'react';
import ImageModal from './imageModal';
import EmployeeCarousel from './employeeCarousel';
import { Russo_One, Poppins } from 'next/font/google';

const russo = Russo_One({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: '400' });

const images = [
  'assets/img/gallery/11.jpg',
  'assets/img/gallery/12.jpg',
  'assets/img/gallery/13.jpg',
  'assets/img/gallery/14.jpg',
  'assets/img/gallery/1.jpg',
  'assets/img/gallery/2.jpg',
  'assets/img/gallery/3.jpg',
  'assets/img/gallery/4.jpg',
  'assets/img/gallery/5.jpg',
  'assets/img/gallery/6.jpg',
  'assets/img/gallery/7.jpg',
  'assets/img/gallery/8.jpg',
  'assets/img/gallery/9.jpg',
];

const page = () => {

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const openVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      setShowControls(true);
    }
  };

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();// Optionally reset video to the start if required
      setIsPlaying(false); // Hide the play/pause state
      setShowControls(false);
    }
  };


  

  return (
    <>
      <div className="bg-[#F4F4F4] py-32 lg:py-32">
        <div className="conatiner mx-5 lg:mx-28 px-1 lg:px-5">
          <div className="flex flex-wrap md:gap-3 lg:gap-10">
            <div className="w-[100%] md:w-[45%] lg:w-[45%]">
              <div className={`text-[25px] md:text-[32px] lg:text-[32px] my-1 md:my-2 lg:my-3 ${russo.className}`}>
                <h1>Glimpse of<br />
                  Production House</h1>
              </div>
              <div className={`my-10 text-[13px] md:text-[14px] lg:text-[16px] ${poppins.className}`}>
                <p>
                  Hi-Tech Animation is an India based animation production studio with a state-of-the-art
                  production facility with offices located at Kolkata and Mumbai. Other than having a
                  production
                  company, Hi-Tech Animation has a line of premier training institutes in Eastern India. Our
                  animation studio boasts of an esteemed array of national and international clients like Sony
                  Yay, Nick, Byju’s, Cartoon Network, Zee News, ABP Ananda, Zee Bangla, SITI Group of
                  Channels, to
                  name a few. Hi-Tech Animation is an India based animation production studio with a
                  state-of-the-art production facility with offices located at Kolkata and Mumbai. Other than
                  having a production company,
                </p>
              </div>
            </div>
            <div className="w-[100%] md:w-[45%] lg:w-[45%] p-0 md:p-10 lg:p-10">
              <div className="relative">
                <img
                  className="img1"
                  src="assets/img/Rectangle 745.png"
                  alt="logo"
                  width="100%"
                />
                {!isPlaying && (
                  <div className="absolute inset-0 flex justify-center items-center">
                    <a href="#" onClick={openVideo}>
                      <img
                        src="/assets/img/play.png"
                        alt="Play Button"
                        className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 cursor-pointer"
                      />
                    </a>
                  </div>
                )}
              </div>

              <div
                className={`fixed inset-0 bg-black bg-opacity-75 flex-col items-center justify-center ${isPlaying ? 'flex' : 'hidden'}`}
              >
                <button
                  className="absolute top-28 right-10 text-white text-4xl cursor-pointer"
                  onClick={closeVideo}
                >
                  ×
                </button>
                <div className="flex flex-col items-center">
                  <div className="w-[330px] md:w-[800px] lg:w-[800px] mt-20">
                    <video
                      width="100%"
                      controls={showControls}
                      ref={videoRef}
                    >
                      <source src="/assets/video/16.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="conatiner mx-5 lg:mx-28 px-1 lg:px-5 my-20">
        <div className={`text-[22px] md:text-[32px] lg:text-[32px] mt-5 mb-10 ${russo.className}`}>
          <h2>Teams &<br />Achievements</h2>
        </div>
        <ImageModal images={images} />
      </div>
      
      
      <div className="bg-[#F4F4F4] py-10">
        <div className={`text-[22px] md:text-[32px] lg:text-[32px] my-5 lg:my-3 mx-5 md:mx-10 lg:mx-28 px-1 lg:px-5 ${russo.className}`}>
          <h2>Employees<br />
            Feedback</h2>
        </div>
        <div className="my-10 mx-5 md:mx-10 lg:mx-20 px-1 lg:px-5">
        <EmployeeCarousel />
        </div>
      </div>
    </>
  )
}

export default page