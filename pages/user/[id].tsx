import { Flex, Heading, Link, Code } from "@chakra-ui/core";
import { NextPage } from "next";
import { useRouter } from "next/router";
import NextLink from "next/link";

const User: NextPage = () => {
  const router = useRouter();
  const { id, ...rest } = router.query;
  return (
    <Flex flexDirection="column" alignItems="center" margin={4}>
      <Heading as="h1" size="2xl" marginTop="2rem">
        Page of user
      </Heading>
      <Heading as="h2" size="md" marginBottom="2rem">
        with id <Code>{id}</Code>
      </Heading>
      <Code marginY="1rem">{JSON.stringify(rest)}</Code>
      <NextLink href="/" passHref>
        <Link>Back to home</Link>
      </NextLink>
    </Flex>
  );
};

export default User;
