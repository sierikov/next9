import { NextPage } from "next";
import Link from "next/link";

const AboutPage: NextPage = () => {
  return (
    <>
      <h1>This is ABOUT page</h1>
      <Link href="/me">Go to me page</Link>
      <Link href="/">Back to home</Link>
    </>
  );
};

export default AboutPage;
