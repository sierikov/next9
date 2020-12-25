import { useRouter } from "next/router";
import NextLink from "next/link";
import { Link } from "@chakra-ui/core";

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <h1>BlogPost: {slug}</h1>
      <NextLink href="/blog" passHref><Link>Back</Link></NextLink>
    </>
  );
};

export default BlogPost;
