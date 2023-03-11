import Card from '../components/Card';
import Animation from './Animation';

const Info = () => {
  return (
    <div className='bg-primaryBlue text-white pt-[55px] pb-[70px]'>
      <div className='md:px-[110px] px-[50px] text-center'>
        <h1 className='font-[700] text-[30px] md:text-[70px] leading-[40px] md:leading-[80px]'>
          Where the world learns to earn
        </h1>
        <p className='font-[400] text-[18px] md:text-[20px] leading-6 md:leading-8 mt-[16px] '>
          Join thousands of learners and earners in making better, brighter
          decisions for themselves.
        </p>
      </div>
      <div className='mt-[50px] md:mt-[100px] flex justify-center flex-wrap gap-10'>
        <Animation style='flip-left' placement='center-center'>
          <Card
            image='/images/quantitative.png'
            title='Quantitative Reasoning'
            description='Are you ready to flex your logical muscles and put your reasoning skills to the test?. Take our fun and engaging trivia challenge'
          />
        </Animation>
        <Animation style='flip-left' placement='center-center'>
          <Card
            image='/images/english.png'
            title='English'
            description='Are you a wordsmith or a grammar guru? This challenge is a great way to put your language skills to the test. You will have a blast discovering new insights and improving your vocabulary along the way'
          />
        </Animation>
        <Animation style='flip-left' placement='center-center'>
          <Card
            image='/images/biology.png'
            title='Biology'
            description='Get ready to dive into the world of biology. Challenge yourself with our trivia questions. From basic biology to more specialized topics, and everything in between'
          />{' '}
        </Animation>
      </div>
      <div className='mt-[50px] md:mt-[100px] flex justify-center flex-wrap gap-10'>
        <Animation style='flip-left' placement='center-center'>
          <Card
            image='/images/current_affairs.png'
            title='Current affairs'
            description='Up to date with the latest news and happenings from around the world? This is the perfect opportunity to put your knowledge to the test!'
          />{' '}
        </Animation>
        <Animation style='flip-left' placement='center-center'>
          <Card
            image='/images/commerce.png'
            title='Commerce'
            description='Get your business gears turning with our engaging trivia questions. From finance to marketing and even economics. Test your understanding of various commerce concepts'
          />{' '}
        </Animation>
        <Animation style='flip-left' placement='center-center'>
          <Card
            image='/images/football.png'
            title='Football'
            description='Become the Pelé of your time and score big. Think you know everything about the sport? Take a quiz to find out and have fun while doing it!'
          />
        </Animation>
      </div>
    </div>
  );
};

export default Info;
