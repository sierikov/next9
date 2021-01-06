import {
  Alert,
  AlertIcon,
  Code,
  Flex,
  Heading,
  Button,
  Spinner,
  SimpleGrid,
  Text,
} from "@chakra-ui/core";
import { NextPage } from "next";
import { useRouter } from "next/router";
import NextLink from "next/link";
import useSWR from "swr";

type Data = {
  _id: string;
  index: number;
  guid: string;
  age: number;
  name: {
    first: string;
    last: string;
  };
  email: string;
  greeting: string;
  favoriteFruit: string;
}

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw Error("Data cannot be loaded");
  }
  const data: Data = await res.json();
  return data;
};

const UserData = () => {
  const router = useRouter();
  const {id} = router.query;
  const {data, error} = useSWR(`/api/user/${id}`, fetcher);

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon/>
        Lodaing failed: {error.message}
      </Alert>
    );
  }

  if (!data) {
    return (
      <Alert status="info">
        <Spinner marginRight={3} size="sm"/>
        Loading...
      </Alert>
    );
  }

  return (
    <SimpleGrid columns={2} width="2xs" spacingY={4}>
      <Text fontWeight="bold" marginRight={4}>
        ID
      </Text>
      <Text>{data.index}</Text>

      <Text fontWeight="bold" marginRight={4}>
        GUID
      </Text>
      <Code width="xs">{data.guid}</Code>

      <Text fontWeight="bold" marginRight={4}>
        Name
      </Text>
      <Text>
        {data.name.first} {data.name.last}
      </Text>

      <Text fontWeight="bold" marginRight={4}>
        Email
      </Text>
      <Text>{data.email}</Text>

      <Text fontWeight="bold" marginRight={4}>
        Fruit
      </Text>
      <Text>{data.favoriteFruit}</Text>
    </SimpleGrid>
  );
};

const User: NextPage = () => {
  const router = useRouter();
  const {id, ...rest} = router.query;
  return (
    <Flex flexDirection="column" alignItems="center" margin={4}>
      <Heading as="h1" size="2xl" marginTop="2rem">
        Page of user
      </Heading>
      <Heading as="h2" size="md" marginTop="1rem" marginBottom="2rem">
        data with id <Code>{id}</Code>
      </Heading>
      <UserData/>
      <Heading as="h2" size="md" marginY="1rem">
        other params
      </Heading>
      <Code marginBottom="2rem">{JSON.stringify(rest)}</Code>
      <NextLink href="/">
        <Button leftIcon="arrow-back" variantColor="teal" variant="outline">
          Back to home
        </Button>
      </NextLink>
    </Flex>
  );
};

export default User;
