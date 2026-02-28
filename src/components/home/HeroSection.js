import ProfessionalBio from './ProfessionalBio';
import BrandInfo from './BrandInfo';
import EducationSection from './EducationSection';
import AwesomeBusinesses from './AwesomeBusinesses';
import MarqueeBanner from './MarqueeBanner';

export default function HeroSection() {
  return (
    <section id="home" className="pb-6 ">
      {/* Main Hero Content */}
      <div className="flex flex-col gap-3 lg:gap-8 ">
        {/* Row 1: ProfessionalBio + BrandInfo (with Marquee inside) */}
        <div className="max-w-7xl w-full px-3 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <div className="lg:col-span-2">
              <ProfessionalBio />
            </div>
            <div className="lg:col-span-1">
              <BrandInfo />
            </div>
          </div>
        </div>

        {/* Marquee Banner - In Between Gap */}
        <div className="hidden lg:block w-full lg:-my-[4.6rem]">
          <div className="max-w-7xl w-full px-6 mx-auto">
            <div className="lg:w-[19.3rem] lg:ml-auto lg:mr-[24.4rem]">
              <MarqueeBanner />
            </div>
          </div>
        </div>

        {/* Row 2: EducationSection + AwesomeBusinesses (Bottom Section) */}
        <div className="max-w-7xl w-full px-3 md:px-6 mx-auto mt-2">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
            <div className="lg:col-span-2 lg:-mt-[0.4rem]">
              <EducationSection />
            </div>
            <div className="lg:col-span-3 lg:mt-[2.3rem]">
              <AwesomeBusinesses />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
