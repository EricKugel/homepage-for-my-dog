import { useSession } from "next-auth/react";

const App = () => {
  const session = useSession();
  return (
    <>
      <div>Welcome to erickugel.com!</div>
      <br />
      <div>Current session: </div>
      <div>{JSON.stringify(session?.data)}</div>
    </>
  );
};

export default App;
