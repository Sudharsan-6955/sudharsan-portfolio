'use client';

import styled from 'styled-components';

const StyledWrapper = styled.div`
  .quote-card {
    position: relative;
    background: linear-gradient(135deg, rgba(26, 251, 240, 0.1), rgba(218, 0, 255, 0.1));
    border-radius: 1rem;
    padding: 1.5rem;
    transition: all 0.3s ease;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(135deg, #1afbf0, #da00ff, #1afbf0);
      animation: none;
      z-index: 0;
      opacity: 0.25;
      transition: opacity 0.3s ease;
    }

    &:hover {
      border-color: #ec4899;
      
      &::before {
        opacity: 1;
        animation: rotateGradient 10s ease-in-out infinite;
      }
    }

    > * {
      position: relative;
      z-index: 1;
    }
  }

  .quote-bg {
    position: absolute;
    inset: -20% auto auto -20%;
    width: 180px;
    height: 180px;
    pointer-events: none;
    z-index: 0;
  }

  .quote-bg::before,
  .quote-bg::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 30px;
  }

  .quote-bg::before {
    z-index: 1;
    background: linear-gradient(135deg, #1afbf0, #da00ff);
    filter: blur(2px);
    animation: none;
  }

  .quote-bg::after {
    z-index: 2;
    background-color: rgba(255, 255, 255, 0.2);
    border: 2px solid rgba(255, 255, 255, 0.3);
    animation: none;
  }

  .quote-card:hover .quote-bg::before {
    animation: quoteCube 8s ease-in-out infinite;
  }

  .quote-card:hover .quote-bg::after {
    animation: quoteGlow 8s ease-in-out infinite;
  }

  @keyframes rotateGradient {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes quoteCube {
    50% {
      transform: rotate(-80deg) scale(1.05);
    }
  }

  @keyframes quoteGlow {
    50% {
      transform: rotate(-80deg) scale(1.05);
      opacity: 0.75;
    }
  }
`;

export default function QuoteCard() {
  return (
    <StyledWrapper>
      <div className="relative bg-[#151417] rounded-2xl overflow-hidden group quote-card duration-300 h-full">
        <div className="quote-bg" aria-hidden="true" />
        <div className="relative z-10 flex items-start gap-2 mb-4">
          <div className="w-8 h-8 bg-gray-700 rounded-full overflow-hidden shrink-0">
            <div className="w-full h-full rounded-full bg-gray-600 flex items-center justify-center">
              <img src="/Assets/About/Dbtwiter.svg" alt="Twitter Icon" className="w-8 h-8 rounded-full" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-xs truncate">Sudharsan Vettri</p>
            <p className="text-gray-400 text-xs truncate">Programmer, 2023</p>
          </div>
          <div className="shrink-0">
            <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </div>
        </div>
        <blockquote className="text-white flex flex-col text-base font-semibold mb-3 leading-snug line-clamp-3">
          <span> "Design attracts attention. </span>
          <span className='px-2'>
            Code earns respect."
          </span>

        </blockquote>
        <div className="inline-block bg-gray-800 px-3 py-1.5 rounded-full mb-5">
          <span className="text-gray-300 text-xs italic">"reals" tweets</span>
        </div>
        <div className="text-center font-satoshi px-9 border w-fit mx-auto border-gray-400  shadow-gray-700 shadow-inner p-2 rounded-2xl">

          <div className='flex justify-center gap-2 font-normal'>
            <div>
              <p className="text-white text-6xl font-bold ">4
              </p>
            </div>
            <div className='mt-4'>

              <p className="text-gray-400 text-xs "><span className="text-sm font-normal"> years </span>My</p>
              <p className="text-gray-400 text-sm">Expertise</p>
            </div>
            <div className='flex justify-items-center my-auto'>
              <img src="/Assets/Projects/user-journey.svg" alt="Visit Repo" className="w-14 h-14" />

            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}
