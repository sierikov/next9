import { NextPage } from "next";
import Link from "next/link";

const AboutPage: NextPage = () => {
  return (
    <>
      <h1>This is ABOUT/ME page</h1>
      <Link href="/about">Back to about</Link>
    </>
  );
};

export default AboutPage;
