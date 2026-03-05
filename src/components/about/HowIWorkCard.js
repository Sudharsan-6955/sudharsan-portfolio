import React, { useState } from "react";

const steps = [
    {
        title: "01 Discovery Call",
        desc: "In the first stage, we'll have a Discovery Call to discuss your goals, needs, and project requirements. This helps us align our vision and set the foundation for a successful."
    },
    {
        title: "02 Research & Planning",
        desc: "We dive deep into research and planning to understand your industry, audience, and competitors. This stage sets the roadmap for the project."
    },
    {
        title: "03 Design & Development",
        desc: "We move into design and development, creating wireframes, prototypes, and the final product with your feedback at every step."
    },
    {
        title: "04 Review & Iterate",
        desc: "We review the work together, gather your feedback, and iterate to ensure everything aligns with your vision and goals."
    },
    {
        title: "05 Launch & Support",
        desc: "After launch, we provide ongoing support and ensure a smooth transition, helping you get the most out of your new solution."
    },
];

const HowIWorkCard = () => {
    const [activeStep, setActiveStep] = useState(null);
    const [animateKey, setAnimateKey] = useState(0);
    const isDefaultView = activeStep === null;
    const isFirstStep = activeStep === 0;
    const isLastStep = activeStep === steps.length - 1;

    const handlePrevStep = () => {
        if (isDefaultView || isFirstStep) return;
        setActiveStep((prev) => prev - 1);
        setAnimateKey((prev) => prev + 1);
    };

    const handleNextStep = () => {
        if (isDefaultView) {
            setActiveStep(0);
            setAnimateKey((prev) => prev + 1);
            return;
        }
        if (isLastStep) return;
        setActiveStep((prev) => prev + 1);
        setAnimateKey((prev) => prev + 1);
    };

    return (
        <div className="row-span-2 col-span-1 bg-[#151417] md:col-span-2 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl relative">
            {/* Top bar with label */}
            <div className="flex items-center justify-between m-4">
                <div className="p-2 rounded-full text-sm md:text-xl text-center font-semibold font-unbounded z-10 w-fit shadow-sm">
                    <span className="text-[#FF9900]">How I Work </span>
                    Understand requirements, create designs, develop features, optimize, and deploy confidently.
                </div>
            </div>
            <div className="mt-4 p-4 min-h-27.5 transition-all duration-300">
                {/* Mobile carousel with arrows */}
                <div className="block sm:hidden">
                    <div className="flex items-start justify-between gap-2">
                        {isDefaultView || isFirstStep ? (
                            <div className="w-8 h-8 shrink-0" />
                        ) : (
                            <button
                                onClick={handlePrevStep}
                                className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full  text-gray-200 hover:bg-white/10 transition-all duration-200"
                                aria-label="Previous step"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                        )}
                        <div key={animateKey} className="flex-1 min-w-0 transition-all duration-300 animate-fade-in">
                            {isDefaultView ? (
                                <div className="py-1 text-center">
                                    <h1 className="text-[15px] leading-5 font-bold mb-1 font-satoshi text-red-500 animate-slide-in-left">
                                        See the steps
                                    </h1>
                                    <p className="py-0.5 text-xs leading-5 text-white/95 font-satoshi animate-slide-in-bottom">
                                        Tap the right arrow or a step button to explore my workflow.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <h1 className="text-[15px] leading-5 font-bold mb-1 font-satoshi text-red-500 animate-slide-in-left">
                                        {steps[activeStep].title}
                                    </h1>
                                    <p className="py-0.5 text-xs leading-5 text-white/95 font-satoshi animate-slide-in-bottom">
                                        {steps[activeStep].desc}
                                    </p>
                                </>
                            )}
                        </div>
                        {(isDefaultView || !isLastStep) && (
                            <button
                                onClick={handleNextStep}
                                className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full  text-gray-200 hover:bg-white/10 transition-all duration-200"
                                aria-label="Next step"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        )}
                    </div>
                    {/* Step indicator dots */}
                    <div className="flex justify-center gap-1.5 mt-3">
                        {steps.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setActiveStep(idx);
                                    setAnimateKey((prev) => prev + 1);
                                }}
                                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                    activeStep === idx ? 'bg-orange-500 w-6' : 'bg-gray-400'
                                }`}
                                aria-label={`Go to step ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
                
                {/* Desktop/tablet content */}
                <div className="hidden sm:block">
                    <div key={animateKey} className="transition-all px-4 duration-300 animate-fade-in">
                        {isDefaultView ? (
                            <div className="flex flex-col items-center justify-center h-full text-center py-2">
                                <h1 className="text-lg sm:text-xl font-bold mb-1 font-satoshi text-red-500 animate-slide-in-left">
                                    See the steps
                                </h1>
                                <p className="py-0.5 text-xs sm:text-base text-white font-satoshi animate-slide-in-bottom">
                                    Click any step button below to learn more about my process.
                                </p>
                            </div>
                        ) : (
                            <>
                                <h1 className="text-lg sm:text-xl font-bold mb-1 font-satoshi text-red-500 animate-slide-in-left">
                                    {steps[activeStep].title}
                                </h1>
                                <p className="py-0.5 text-xs sm:text-base text-white font-satoshi animate-slide-in-bottom">
                                    {steps[activeStep].desc}
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>
            {/* Step buttons for desktop/tablet */}
            <div className="py-3 sm:py-5 gap-2 justify-around hidden sm:flex flex-wrap">
                {steps.map((step, idx) => (
                    <button
                        key={idx}
                        className={`rounded-xl px-5 py-2 text-xs sm:text-sm font-satoshi font-semibold focus:outline-none transition-all duration-200 border border-orange-200 shadow-sm ${activeStep === idx ? 'bg-orange-600 text-white shadow-lg scale-105' : 'bg-orange-50 text-orange-700 hover:bg-orange-500 hover:text-white'}`}
                        onClick={() => {
                            setActiveStep(idx);
                            setAnimateKey(prev => prev + 1);
                        }}
                    >
                        Step {String(idx + 1).padStart(2, '0')}
                    </button>
                ))}
            </div>
        </div>
    );
};

// Add custom animations to global CSS or component CSS
// .animate-slide-in-left {
//   animation: slideInLeft 0.7s ease;
// }
// .animate-slide-in-bottom {
//   animation: slideInBottom 0.7s ease;
// }
// @keyframes slideInLeft {
//   0% { opacity: 0; transform: translateX(-40px); }
//   100% { opacity: 1; transform: translateX(0); }
// }
// @keyframes slideInBottom {
//   0% { opacity: 0; transform: translateY(40px); }
//   100% { opacity: 1; transform: translateY(0); }
// }

export default HowIWorkCard;
