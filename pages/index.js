import { useSession } from "next-auth/react";
import Link from "next/l";

const App = () => {
  const session = useSession();
  return (
    <>
      <div>Welcome to erickugel.com!</div>
      <br />
      <div>Here to play Unicycle Simulator? Go <Link href = "/public/unicycle-simulator-1/Unicycle Simulator 1.html">here!</Link></div>
    </>
  );
};

export default App;
