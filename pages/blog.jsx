import Footer from "../components/Footer";
import Meta from "../components/Meta";
import Animation from "../components/Animation";
import { useRouter } from "next/router";
import MobileComingSoon from "./../components/MobileComingSoon";
import Blog from "../components/blog/Blog";
import Nav from "./../components/blog/Nav";

export default function Home() {
  const router = useRouter().pathname;

  return (
    <>
      <Meta title="Prompay | Blog" />

      <Nav path={router} />

      <div className="bg-white">
        <Blog />
      </div>

      <Animation style="fade-down-right" placement="center-center">
        <MobileComingSoon />
      </Animation>
      <Footer />
    </>
  );
}
