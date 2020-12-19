import { NextPage } from "next";
import { useRouter } from "next/router";

const User: NextPage = () => {
  const router = useRouter();
  const { id, ...rest } = router.query;
  return (
    <>
      <h2>Page of user with id <code>{id}</code></h2>
      <pre>
        <code>{JSON.stringify(rest)}</code>
      </pre>
    </>
  );
};

export default User;
