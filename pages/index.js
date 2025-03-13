import { useSession } from "next-auth/react";
import Link from "next/link";

import Panel from "../components/Panel";

const App = () => {
  const session = useSession();
  return (
    <>
      <div>Here to play Unicycle Simulator? Go <Link href = "/unicycle-simulator-1/Unicycle Simulator 1.html">here!</Link></div>
    
      <Panel 
        image = "/panel/linkedin.png"
        avatar = "/panel/linkedin-avatar.png"
        title = "Eric Kugel"
        subtitle = "Computer Science and Math at University of Minnesota"
        link = "https://www.linkedin.com/in/erickugel/"
      ></Panel>
      <Panel
        image = "/panel/github.png"
        avatar = "/panel/github-avatar.png"
        title = "Eric Kugel"
        subtitle = "Programmer in Java, Python, HTML/JS/CSS, Next.js, and C"
        link = "https://github.com/EricKugel"
      ></Panel>
      <Panel
        image = "/panel/github.png"
        avatar = "/panel/raytracer.png"
        title = "Ray Tracer"
        subtitle = "Ray tracer built from scratch in Java"
        link = "https://github.com/EricKugel/Ray-Tracer"
      ></Panel>
    </>
  );
};

export default App;
