import Card from "../components/Card";
import Animation from "./Animation";

const Info = () => {
  return (
    <div className="bg-primaryBlue text-white pt-[55px] pb-[70px]">
      <div className="md:px-[110px] px-[50px] text-center">
        <h1 className="font-[700] text-[30px] md:text-[70px] leading-[40px] md:leading-[80px]">
          Where the world learns to earn
        </h1>
        <p className="font-[400] text-[18px] md:text-[20px] leading-6 md:leading-8 mt-[16px] ">
          Join thousands of learners and earners in making better, brighter
          decisions for themselves.
        </p>
      </div>
      <div className="md:px-[70px] mt-[50px] md:mt-[100px] flex flex-wrap gap-10">
        <Animation style="flip-left" placement="center-center">
          <Card
            image="/images/quantitative.png"
            title="Quantitative Reasoning"
            description="Test your skills using our online exam in using math and information to solve problems in the real world."
          />
        </Animation>
        <Animation style="flip-left" placement="center-center">
          <Card
            image="/images/english.png"
            title="English"
            description="Test of english languages in order to gauge applicants' abilities in reading, writing, and comprehension"
          />
        </Animation>
        <Animation style="flip-left" placement="center-center">
          <Card
            image="/images/biology.png"
            title="Biology"
            description="How well do you understand the study of living things and their vital processes? Test yourself "
          />{" "}
        </Animation>
        <Animation style="flip-left" placement="center-center">
          <Card
            image="/images/current_affairs.png"
            title="Current affairs"
            description="knowledge of current affairs in the world, including politics, sports, history, the arts, and even the economy."
          />{" "}
        </Animation>
        <Animation style="flip-left" placement="center-center">
          <Card
            image="/images/commerce.png"
            title="Commerce"
            description="People with an awareness of the economy are better able to understand their own financial situation and how to interpret them."
          />{" "}
        </Animation>
        <Animation style="flip-left" placement="center-center">
          <Card
            image="/images/football.png"
            title="Football"
            description="How well do you know your football stars? Let’s play and win
"
          />
        </Animation>
      </div>
    </div>
  );
};

export default Info;
