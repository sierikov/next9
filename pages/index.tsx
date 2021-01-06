import { Flex, Heading, Link } from "@chakra-ui/core";
import { NextPage } from "next";
import NextLink from "next/link";

const IndexPage: NextPage = () => {
  return (
    <Flex flexDirection="column" alignItems="center" margin={4}>
      <Heading as="h1" size="2xl" marginY="2rem">
        Homepage
      </Heading>
      <NextLink href="/about" passHref>
        <Link>About page</Link>
      </NextLink>
      <NextLink href="/blog" passHref>
        <Link>Blog page</Link>
      </NextLink>
      <NextLink href="/user/2?action=create&darkmode=false" passHref>
        <Link> Some User</Link>
      </NextLink>
      <NextLink href="/secret" passHref>
        <Link>
          Secret page
        </Link>
      </NextLink>
    </Flex>
  );
};

export default IndexPage;
