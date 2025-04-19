import Image from "next/image";
import SVGIMG from "../../public/assets/work.svg";
import "aos/dist/aos.css";

const ListScroll = () => {
  const listItems = [
    {
      number: "01",
      title: "Core Languages.",
      desc: "A strong foundation in HTML for structuring content, CSS for styling and layout, and JavaScript for adding interactivity and dynamic behavior to web pages is absolutely essential for any frontend developer.",
    },
    {
      number: "02",
      title: "Responsive Design.",
      desc: "The ability to build websites that look and function flawlessly across a wide range of devices – from large desktop monitors to small mobile screens – is crucial in today's diverse digital landscape. This ensures a consistent and positive user experience for everyone.",
    },
    {
      number: "03",
      title: "Frameworks & Libraries.",
      desc: "Proficiency in popular frontend frameworks like React, Angular, or Vue.js, along with understanding the use of helpful libraries such as jQuery, significantly enhances development speed, code organization, and the creation of complex user interfaces.",
    },
    {
      number: "04",
      title: "Problem Solving",
      desc: "Frontend development inevitably involves encountering and resolving issues. Strong analytical and debugging skills are vital for efficiently identifying the root cause of problems and implementing effective solutions to ensure a stable and functional user experience.",
    },
    {
      number: "05",
      title: "UX/UI Principles",
      desc: "A solid understanding of User Experience (UX) principles, focusing on usability and accessibility, combined with User Interface (UI) design principles, which emphasize visual appeal and consistency, is key to creating web applications that are both effective and enjoyable for end-users.",
    },
  ];

  return (
    <>
      <div className=" h-4 w-screen bg-gray-200 backdrop-blur-lg sticky"></div>
      <section>
        <div className="title-section bg-gray-200 h-screen w-screen py-16 px-32 sticky top-0">
          <p
            data-aos="fade-up"
            className="text-center font-medium text-4xl uppercase mb-16"
          >
            My Frontend Developer Cornerstones
          </p>
          <p
            data-aos="fade-up"
            className="text-center font-extrabold text-5xl "
          >
            "These five pillars form the bedrock of my capabilities as a
            Frontend Developer, guiding my work and ensuring quality in every
            project."
          </p>
        </div>
        <div className="list-section grid grid-cols-2">
          <div className="lists-left ">
            {listItems.map((arr) => (
              <div
                key={arr.number}
                className="items-list bg-gray-200 p-16 h-[50vh] w-[50vw] sticky top-[50vh]"
              >
                <p className="text-xl text-gray-600 font-medium">
                  {arr.number}.
                </p>
                <p className="text-3xl font-bold py-4">{arr.title}</p>
                <p>{arr.desc}</p>
              </div>
            ))}
          </div>
          <div className="lists-right h-[50vh] w-full sticky top-[50vh] p-16">
            <div className="w-full h-full relative">
              <Image
                data-aos="fade-left"
                data-aos-delay="200"
                className="object-fill absolute"
                fill
                src={SVGIMG}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListScroll;
