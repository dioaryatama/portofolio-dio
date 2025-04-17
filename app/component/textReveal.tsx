import "./textReveal.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const TextReveal = () => {
  return (
    <>
      <section className="test sticky top-0 h-screen w-screen bg-black flex flex-col justify-start items-center pt-20 px-20">
        <h1
          data-aos="fade-top"
          className="text-center font-extrabold text-7xl pb-8"
        >
          <span>The Art of Making Websites Click.</span>
        </h1>
        <p
          data-aos="fade-top"
          data-aos-delay="300"
          className="text-center font-bold text-5xl leading-[1.5]"
        >
          <span>
            I work in tech as a frontend developer. That means I spend a lot of
            time writing code to build the user interface – you know, all the
            buttons, layouts, and visuals you see and interact with on a
            website. It's kind of like being a digital architect for the user
            experience.
          </span>
        </p>
      </section>

      <div className="sticky top-0 h-screen w-screen"></div>

      <section
        data-aos="fade-up"
        data-aos-delay="200"
        className=" h-screen w-screen bg-black sticky flex gap-8 p-20 "
      >
        <div
          data-aos="fade-in"
          data-aos-delay="1300"
          className="relative leftSection w-2/6 h-full bg-white rounded-2xl overflow-hidden"
        >
          <Image
            className="  object-cover"
            fill
            alt=""
            src="/assets/content.jpg"
          />
        </div>
        <div className="rightSection w-3/6 h-full flex flex-col gap-8">
          <p
            data-aos="fade-left"
            data-aos-delay="1500"
            className="text-gray-400 text-2xl font-normal leading-[2]"
          >
            Computers used to be{" "}
            <span className="text-white font-semibold">
              {" "}
              huge and complicated{" "}
            </span>
            . Now we've got the internet, smart phones, AI! The digital world is
            getting{" "}
            <span className="text-white font-semibold">
              {" "}
              cooler and changing super fast.
            </span>{" "}
            That's why people who can build and understand this online world are{" "}
            <span className="text-white font-semibold">really important!</span>
          </p>
          <p
            data-aos="fade-left"
            data-aos-delay="1600"
            className="text-gray-400 text-2xl font-normal leading-[2]"
          >
            So, I'm a{" "}
            <span className="text-white font-semibold">
              frontend developer!
            </span>{" "}
            My job is to make websites and apps look{" "}
            <span className="text-white font-semibold">awesome</span> and{" "}
            <span className="text-white font-semibold">easy</span> to use. I use
            HTML, CSS, and JavaScript to{" "}
            <span className="text-white font-semibold"> build </span> everything
            you see and click on. Gotta make sure the website's{" "}
            <span className="text-white font-semibold">
              {" "}
              fun and not confusing!{" "}
            </span>
          </p>
          <div
            data-aos="fade-left"
            data-aos-delay="1700"
            className=" border-t-2 border-gray-500"
          ></div>
          <p
            data-aos="fade-left"
            data-aos-delay="1800"
            className="text-2xl font-semibold  text-white leading-[2]"
          >
            Your Future Frontend Developer Here! <br />
            Based in Medan, Indonesia.
            <br />
            Dio Aryatama.
          </p>
        </div>
      </section>
    </>
  );
};

export default TextReveal;
