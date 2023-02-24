import Head from "next/head";

const Meta = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/logo.png" />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Prompay",
  keywords: "learn and earn, online money",
  description:
    "Test your Ability with our online Exam and earn if you pass or learn if you fail.",
};
export default Meta;
