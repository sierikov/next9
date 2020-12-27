import { useRouter } from "next/router";
import NextLink from "next/link";
import {
  Button,
  Badge,
  Flex,
  Heading,
  Text,
  Box,
  Image,
} from "@chakra-ui/core";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { string } from "prop-types";
import { title } from "process";

const BlogPost: NextPage<{
  title: string;
  text: string;
  tags: [string];
  picture: string;
  author: { id: number; name: string };
}> = (props) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Flex margin={4} flexDirection="column" alignItems="center">
      <Heading as="h1" size="xl" marginY="2rem">
        Blog Post
      </Heading>
      <Box
        marginY={3}
        w={{ base: "80%", sm: "60%", md: "50%" }}
        mb={{ base: 12, md: 0 }}
      >
        <Image
          src={props.picture}
          size="100%"
          objectFit="cover"
          rounded="1rem"
          maxHeight="2xl"
          shadow="2xl"
        />
      </Box>
      <Box marginTop="4rem" marginBottom="2rem">
        <NextLink href="/blog">
          <Button leftIcon="arrow-back" variantColor="teal" variant="outline">
            Back to blog
          </Button>
        </NextLink>
      </Box>
      <Heading as="h2" size="xl" marginY={4}>
        {props.title}
      </Heading>
      <Flex marginBottom={4}>
        {props.tags.map((tag) => {
          return (
            <Badge borderRadius="full" px="2" mr="2" color="teal" key={tag}>
              {tag}
            </Badge>
          );
        })}
      </Flex>
      <Box w={{ base: "60%", sm: "40%", md: "30%" }}>
        <Text fontSize="20px">{props.text}</Text>
        <Text color="grey" fontSize="20px" marginTop="10px">by {props.author.name}</Text>
      </Box>
    </Flex>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = (await import("../../lib/blog.json")).default;
  const slugs = blogs.map((blog) => blog.slug);
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const blogs = (await import("../../lib/blog.json")).default;
  const blog = blogs.find((post) => post.slug === slug);

  return {
    props: blog,
  };
};

export default BlogPost;
