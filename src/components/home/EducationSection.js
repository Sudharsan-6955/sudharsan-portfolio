'use client';

import { useState, useEffect } from 'react';
import Switch from '@/components/ui/Switch';
import Loader from '@/components/ui/Loader';
// import Image from 'next/image';

export default function EducationSection() {
  const [showGPA, setShowGPA] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (showGPA) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [showGPA]);

  return (
    <div className="flex flex-col gap-6 relative bg-[#151417] border border-gray-700 rounded-lg md:p-8 pb-3">
      <div className='pt-5 flex justify-between md:px-0 px-5'>
        <h5 className="text-[#F2F2F2] font-bold text-2xl md:text-3xl font-bricolage">
          My Education  <br />
          Journey.
        </h5>
        <div className=''>
          {/* <Image src="/Assets/Educat/degree.svg" alt="degree" width={20} height={20} className="h-24 w-24" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path
              d="M10.05 2.53 4.03 6.46c-1.93 1.26-1.93 4.08 0 5.34l6.02 3.93c1.08.71 2.86.71 3.94 0l5.99-3.93c1.92-1.26 1.92-4.07 0-5.33l-5.99-3.93c-1.08-.72-2.86-.72-3.94-.01Z"
              stroke="#d9e3f0"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m5.63 13.08-.01 4.69c0 1.27.98 2.63 2.18 3.03l3.19 1.06c.55.18 1.46.18 2.02 0l3.19-1.06c1.2-.4 2.18-1.76 2.18-3.03v-4.64M21.4 15V9"
              stroke="#d9e3f0"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>


      <div className="flex flex-col gap-6 md:px-0 px-5">
        {/* MSc in System Sciences */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center shrink-0 border border-gray-700">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z" />
            </svg>
          </div>
          <div className="flex-1 pt-1 ">
            <p className="text-white font-medium text-sm md:text-base font-satoshi">BE Computer Science Engineering</p>
            <p className="text-gray-400 text-xs md:text-sm font-satoshi">University of PSN</p>
          </div>
          <div className=' shadow-2xl  border-gray-200 p-2 rounded-xl shadow-gray-900'>
            {/* <Image src="/Assets/Educat/degree.svg" alt="degree" width={20} height={20} className="h-24 w-24" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="w-8 h-8 text-white"
            >
              <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z" />
              <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z" />
            </svg>



          </div>
        </div>

        {/* BA in Business Administration */}
        <div className="flex items-start gap-4 ">
          <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center shrink-0 border border-gray-700">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1 pt-1">
            <p className="text-white font-medium text-sm md:text-base font-satoshi">HSC </p>
            <p className="text-gray-400 text-xs md:text-sm font-satoshi">NHSS Kovilpatti</p>
          </div>
        </div>
      </div>

      {/* GPA Section */}
      <div className="flex flex-col gap-4 border-t border-gray-700 pt-6 md:px-0 px-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
            </svg>
            <span className="text-white font-medium font-satoshi">My GPA</span>
          </div>
          <button className="text-gray-400 hover:text-gray-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg p-6 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {showGPA && <span className="text-gray-300 text-sm font-satoshi">My GPA</span>}
              {showGPA && isLoading ? (
                <Loader />
              ) : (
                <span className={`text-sm font-satoshi ${showGPA ? 'text-3xl tracking-wider text-gray-200' : 'text-gray-300'}`}>
                  {showGPA ? (
                    <span className="font-dseg7">
                      8<span className="font-satoshi">.</span>5
                    </span>
                  ) : (
                    'Reveal GPA'
                  )}
                </span>
              )}
            </div>
            <Switch 
              checked={showGPA}
              onChange={(e) => setShowGPA(e.target.checked)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
