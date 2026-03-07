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
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-xs truncate">Sudharsan Vettri</p>
            <p className="text-gray-400 text-xs truncate">Programmer, 2023</p>
          </div>
          <div className="shrink-0">
            <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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
