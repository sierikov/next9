import NextLink from "next/link";
import { Button, Flex, Link, Box, Heading, Badge, Image } from "@chakra-ui/core";
import { NextPage, GetStaticProps } from "next";

const BlogIndexPage: NextPage<{
  posts: {
    _id: string;
    title: string;
    slug: string;
    tags: [string];
    text: string;
    author: {
      id: number;
      name: string;
    };
    picture: string;
  }[];
}> = (props) => {
  return (
    <Box>
      <Flex flexDirection="column" alignItems="center">
        <Heading marginY="2rem">Table of Contents</Heading>
        <NextLink href="/" passHref>
          <Link>Back to home</Link>
        </NextLink>
        {props.posts.map((post) => {
          return (
            <Box
              marginY="1rem"
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image src={post.picture} alt={post.title} />

              <Box p="6">
                <Flex marginBottom={4}>
                  {post.tags.map((tag) => {
                    return (
                      <Badge
                        borderRadius="full"
                        px="2"
                        mr="2"
                        color="teal"
                        key={tag}
                      >
                        {tag}
                      </Badge>
                    );
                  })}
                </Flex>
                <Heading
                  mt="1"
                  marginTop="4"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {post.title}
                </Heading>

                <Box d="flex" marginBottom={4}>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                  >
                    {post.author.name}
                  </Box>
                </Box>

                <NextLink as={`/blog/${post.slug}`} href="/blog[slug]" passHref>
                  <Button variant="solid" marginTop={3}>
                    Read more
                  </Button>
                </NextLink>
              </Box>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await import("../../lib/blog.json")).default;
  return {
    props: { posts },
  };
};

export default BlogIndexPage;
