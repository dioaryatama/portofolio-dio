import Navbar from "./component/navbar";
import HeroSection from "./component/herosection";
import LogoSlider from "./component/logoslider";
import Biography from "./component/biography";
import TextReveal from "./component/textReveal";
import ListScroll from "./component/listScroll";
// import Carousel from "./component/carousel";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LogoSlider />
      <div className="border-b-2 border-[#C5A880] my-4 mx-16 "></div>
      <Biography />
      <TextReveal />
      <ListScroll />

      {/* <Carousel /> */}

      {/* <h1>Home Page</h1>
      <div className="bg-red">
        <Link href="/about">About</Link>
      </div> */}
    </>
  );
}
