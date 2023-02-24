import Meta from "../components/Meta";
import Link from "next/link";
import { ImCheckmark } from "react-icons/im";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Svg1 from "../components/Svg1";
import Svg2 from "../components/Svg2";
import TeamCard from "../components/TeamCard";
import { useRouter, withRouter } from "next/router";
import Animation from "../components/Animation";
const About = () => {
  const router = useRouter().pathname;

  return (
    <>
      <Meta title="Prompay | About Us" />

      <div className="bg-primaryBlue bg-cover z-10 relative ">
        <Nav path={router} />
        <div className="in h-full flex flex-col items-center pb-[70px]">
          <h1 className="font-[700] text-[40px] md:text-[80px] leading-10 mb-[55px] text-white md:mt-[62px] mt-[30px]">
            About Us
          </h1>
          <Animation style="fade-right" placement="top-center">
            <img src="/images/bg/about.png" alt="about us" className="" />
            {/* <TextAnimation time={0.1}> */}
            <p className=" mt-[25px] md:mt-[111px] text-[20px] md:text-[35px] font-[300] leading-10 text-white px-[20px]  md:px-[220px]">
              We are a team of passionate blockchain enthusiasts who have come
              together to help you participate in this exciting new world. More
              specifically, we developed a platform to help you buy and sell
              your favorite cryptocurrencies using a variety of (often unusual)
              payment methods.
            </p>
            {/* </TextAnimation> */}
          </Animation>
        </div>
        <Animation style="flip-left" placement="center-center">
          <section className="relative bg-[#8E24F8] py-[40px]">
            <img
              src="/images/waveteam.png"
              alt=""
              className="z-10 left-[40px] absolute top-[-50px]"
            />
            <img
              src="/images/waveteam.png"
              alt=""
              className="z-10 absolute right-[40px] top-[-50px]"
            />
            <h3 className="text-[30px] md:text-[60px] font-[700 leading-10 text-white text-center">
              Vision
            </h3>
            <div className="md:flex justify-evenly pl-[20px] md:pl-[180px] pr-[10px] md:pr-[85px] ">
              <div className="mt-[20px] w-4/5">
                <div className="hidden md:block">
                  <Svg1 />
                </div>
                {/* <TextAnimation> */}
                {/* <img src="/images/Svg1.svg" alt="" /> */}
                <p className="fadeIn md:w-[379px] text-white text-[20px]font-[400]">
                  Our founders started Paybis after realizing the boundless
                  potential of crypto. The goal was not to be the biggest or
                  most popular exchange, but rather to become the most trusted
                  and responsive platform on the market.
                </p>
                {/* </TextAnimation> */}
              </div>
              <div className="md:relative md:top-[-50px] mt-[20px] md:mt-0">
                <div className="hidden md:block">
                  <Svg2 />
                </div>
                {/* <TextAnimation> */}
                <p className="fadeIn md:w-[379px] text-white text-[20px]font-[400]">
                  We are well on our way to achieving those goals. With a
                  near-perfect score on Trustpilot and a dedicated support team,
                  almost all of our customers come back to use our service
                  again.
                </p>
                {/* </TextAnimation> */}
              </div>
            </div>
          </section>
        </Animation>
        <section className="relative px-[20px] md:px-[80px] pt-[25px] md:pt-[44px] pb-[20px]">
          <img
            src="/images/waveteam.png"
            alt=""
            className="z-10 left-[40px] absolute top-[-30px]"
          />
          <img
            src="/images/waveteam.png"
            alt=""
            className="z-10 absolute right-[40px] top-[-30px]"
          />
          <h3 className="text-[30px] md:text-[60px] font-[700 leading-10 text-white text-center mb-[20px] md:mb-[36px]">
            Our Team
          </h3>
          <div className="md:flex gap-x-[51px]">
            <Animation style="zoom-in-right" placement="center-center">
              <TeamCard
                image="images/team/ino1.png"
                name="Innokenty Isers"
                title="CEO, Founder"
              />
            </Animation>
            <Animation style="zoom-in-right" placement="center-center">
              <TeamCard
                image="images/team/ino2.png"
                name="Innokenty Isers"
                title="CEO, Founder"
              />
            </Animation>
            <Animation style="zoom-in-right" placement="center-center">
              <TeamCard
                image="images/team/ino3.png"
                name="Innokenty Isers"
                title="CEO, Founder"
              />
            </Animation>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
