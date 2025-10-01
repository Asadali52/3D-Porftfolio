import Hero from "@/sections/Hero";
import ShowcaseSection from "@/sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import FeatureCards from "@/sections/FeatureCards";
import LogoSection from "@/sections/LogoSection";

const Home = () => {
  return (
   <>
   <NavBar/>
   <Hero/>
   <ShowcaseSection/>
   <LogoSection/>
   <FeatureCards/>
   </>
  );
};

export default Home;