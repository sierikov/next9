import { Flex, Heading, Link } from "@chakra-ui/core";
import { NextPage } from "next";
import NextLink from "next/link";

const AboutPage: NextPage = () => {
  return (
    <Flex flexDirection="column" alignItems="center" margin={4}>
      <Heading as="h1" size="2xl" marginY="2rem">
        This is ABOUT page
      </Heading>
      <NextLink href="/about/me" passHref>
        <Link>Go to me page</Link>
      </NextLink>
      <NextLink href="/" passHref>
        <Link>Back to home</Link>
      </NextLink>
    </Flex>
  );
};

export default AboutPage;
