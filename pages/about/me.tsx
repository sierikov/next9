import { Flex, Heading, Link } from "@chakra-ui/core";
import { NextPage } from "next";
import NextLink from "next/link";

const AboutPage: NextPage = () => {
  return (
    <Flex flexDirection="column" alignItems="center" margin={4}>
      <Heading as="h1" size="2xl" marginY="2rem">
        This is ABOUT/ME page
      </Heading>
      <NextLink href="/about" passHref>
        <Link>Back to about</Link>
      </NextLink>
    </Flex>
  );
};

export default AboutPage;
