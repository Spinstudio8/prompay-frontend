import Head from "next/head";
import Script from "next/script";

const Meta = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/logo.png" />
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1183699483083667"
        crossorigin="anonymous"
      ></Script>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Prompay",
  keywords:
    "prompay, theprompay, PROMPAY, Prompay, learn and earn, online money, theprompay",
  description: `Test your Ability with our online Exam and earn if you pass or learn if you fail. 
    Have you heard of PromPay? It's an online platform that lets you earn money while 
    you learn! At PromPay, everybody has the opportunity to earn and learn online. 
    Our mainstay is financial stability and cognitive thinking—and with PromPay, you 
    can get both! Our team is made up of passionate educators and technology 
    enthusiasts who are committed to making learning accessible to all.
    `,
};
export default Meta;
