import Header from './layout/Header'
import Hero from "@/app/components/sections/Hero";
import About from "@/app/components/sections/About";
import Activity from "@/app/components/sections/Activity";
import Advantages from "@/app/components/sections/Advantages";
import MapSection from '@/app/components/sections/MapSection'
import InfoSection from "@/app/components/sections/InfoSection";
import StoreSection from "@/app/components/sections/StoreSection";
import Choice from "@/app/components/sections/Choice";
import ReviewsSection from "@/app/components/sections/ReviewsSection";
import Footer from "@/app/layout/Footer";
import Services from "@/app/components/sections/Services";
import Achievements from "@/app/components/sections/Achievements";
import GetInTouch from "@/app/components/sections/GetInTouch";

export default function Home() {
  return (
    <div className="">
          <Header/>
        <Hero/>
        <About/>
        <Activity/>
        <Advantages/>
        <MapSection/>
        <InfoSection/>
        <StoreSection/>
        <Choice/>
        <ReviewsSection/>
        <Services/>
        <Achievements/>
        <GetInTouch/>
        <Footer/>
    </div>
  );
}
