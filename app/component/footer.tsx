import Link from "next/link";
import "aos/dist/aos.css";

const Footer = () => {
  return (
    <>
      <div className=" h-screen w-screen bg-black p-16 flex justify-center items-start sticky top-0">
        <p
          data-aos="fade-up"
          data-aos-duration="5000"
          data-aos-delay="500"
          className="text-white font-extrabold text-4xl md:text-[124px] uppercase"
        >
          dio aryatama
        </p>
      </div>
      <div className="bg-white sticky h-[80vh] md:h-[60vh] w-full flex flex-col gap-16 justify-center items-center rounded-tl-[125px] rounded-tr-[125px]">
        <p
          data-aos="fade-up"
          className="text-2xl md:text-6xl font-medium text-center"
        >
          "Ready to transform your design into a seamless user experience?
          Contact me to explore the possibilities."
        </p>
        <Link
          data-aos="fade-up"
          target="_blank"
          href="https://www.wa.link/swag91"
          className=" transition-all duration-200 ease-in bg-black backdrop-opacity-50 backdrop-blur-xl text-white p-8 text-3xl rounded-full hover:text-black hover:bg-white border-2 "
        >
          Get In Touch!
        </Link>
      </div>
    </>
  );
};

export default Footer;
