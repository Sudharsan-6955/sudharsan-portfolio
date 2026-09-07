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
          <div className="flex items-center gap-2.5">
            <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.949 49.949 0 0 0-9.902 3.912l-.003.002-.34.18a.75.75 0 0 1-.707 0A50.009 50.009 0 0 0 1.4 10.057a.75.75 0 0 1-.231-1.338A60.653 60.653 0 0 1 11.7 2.805Z" />
              <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 0 1-.46.71 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 0 1 11 15.419a2.25 2.25 0 0 0 2.06.054Z" />
            </svg>
            <span className="text-white font-medium font-satoshi">My GPA</span>
          </div>
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
