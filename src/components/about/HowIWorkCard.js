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
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="row-span-2 col-span-1 bg-[#151417] md:col-span-2 rounded-2xl border-[3px] overflow-hidden shadow-2xl relative">
            {/* Top bar with label and hamburger */}
            <div className="flex items-center justify-between m-4 relative">
                <div className="p-2 rounded-full text-sm md:text-xl text-center font-semibold font-unbounded z-10 w-fit shadow-sm"> <span className="text-[#FF9900]">How I Work </span>Understand requirements, create designs, develop features, optimize, and deploy confidently.</div>
                {/* Hamburger for mobile */}
                <div className="block sm:hidden absolute right-2 top-1">
                    <button
                        className="flex flex-col justify-center items-center w-6 h-6 rounded-md cursor-pointer  text-orange-700 shadow-sm focus:outline-none ml-1 relative"
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-label="Open steps menu"
                        style={{ boxShadow: '0 1px 6px 0 rgba(255, 140, 0, 0.08)' }}
                    >
                        <span
                            className={`block w-3.5 h-0.5 bg-orange-700 rounded absolute transition-transform duration-300 ${menuOpen ? 'rotate-45 top-3 left-1.5' : 'top-1 left-1.5'}`}
                            style={{ top: menuOpen ? '12px' : '4px', left: '6px' }}
                        ></span>
                        <span
                            className={`block w-3.5 h-0.5 bg-orange-700 rounded absolute transition-all duration-300 ${menuOpen ? 'opacity-0' : 'top-2 left-1.5'}`}
                            style={{ top: '10px', left: '6px', opacity: menuOpen ? 0 : 1 }}
                        ></span>
                        <span
                            className={`block w-3.5 h-0.5 bg-orange-700 rounded absolute transition-transform duration-300 ${menuOpen ? '-rotate-45 top-3 left-1.5' : 'top-3 left-1.5'}`}
                            style={{ top: menuOpen ? '12px' : '16px', left: '6px' }}
                        ></span>
                    </button>
                    {menuOpen && (
                        <div
                            className="absolute right-0 mt-1 w-28 flex flex-col gap-1 rounded-xl shadow-xl p-2 animate-fade-in z-30 border border-orange-100 overflow-y-auto orange-scrollbar"
                            style={{
                                background: 'linear-gradient(135deg, rgba(255,247,237,0.95) 60%, rgba(255,186,80,0.18) 100%)',
                                backdropFilter: 'blur(6px)',
                                boxShadow: '0 4px 24px 0 rgba(255, 140, 0, 0.13)',
                                maxHeight: '120px'
                            }}
                        >
                            {steps.map((step, idx) => (
                                <button
                                    key={idx}
                                    className={`rounded px-2 py-1 text-[11px] font-medium focus:outline-none transition-all duration-200 border border-transparent text-left ${activeStep === idx ? 'bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 text-white shadow scale-105' : 'bg-white/70 text-orange-700 hover:bg-gradient-to-r hover:from-orange-400 hover:via-orange-500 hover:to-orange-400 hover:text-white hover:border-orange-300'}`}
                                    style={activeStep === idx ? {
                                        boxShadow: '0 2px 8px 0 rgba(255, 140, 0, 0.18)',
                                    } : {}}
                                    onClick={() => {
                                        setActiveStep(idx);
                                        setAnimateKey(prev => prev + 1);
                                        setMenuOpen(false);
                                    }}
                                >
                                    Step {String(idx + 1).padStart(2, '0')}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-4 p-4 min-h-27.5 transition-all duration-300">
                {activeStep === null ? (
                    <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in">
                        <span className="text-2xl font-satoshi font-semibold text-red-500 mb-1">See the steps</span>
                        <span className="text-sm text-gray-500">Click a step below to learn more about my process.</span>
                    </div>
                ) : (
                    <div key={animateKey} className="transition-all px-4 duration-300 animate-fade-in">
                        <h1 className={`text-lg sm:text-xl font-bold mb-1 font-satoshi text-red-500 animate-slide-in-left`}>{steps[activeStep].title}</h1>
                        <p className={`py-0.5 text-xs sm:text-base text-white font-satoshi animate-slide-in-bottom`}>{steps[activeStep].desc}</p>
                    </div>
                )}
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
