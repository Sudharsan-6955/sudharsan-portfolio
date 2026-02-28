import React from "react";

const MapCard = () => (
    <div className="relative md:col-span-1 md:row-span-2 rounded-2xl shadow-xl  overflow-hidden flex items-center justify-center bg-black group min-h-32">
        <div className="relative z-10 text-center text-white w-full h-full ">
            <div className="w-full h-45 sm:h-55 md:h-full">
                <iframe
                    src="https://www.google.com/maps?q=Tirunelveli&output=embed"
                    title="Tirunelveli map"
                    className="w-full h-full rounded-xl border-0 filter grayscale group-hover:filter-none transition duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    </div>
);

export default MapCard;
