import { useRouter } from "next/navigation";
import isMobile from "../helpers/hooks/dimensions";

import { Public_Sans } from "next/font/google";

const public_sans = Public_Sans({subsets: ["latin"], weight: "400"});

const Banner = () => {
  const router = useRouter();
  const mobile = isMobile();

  const goHome = () => {
    router.push("/")
  }

  const goTo = (href) => {
    router.push(href);
  }

  return (
    <>
      <div id="banner">
        
        <img onClick = {goHome} id = "logo" src = "/banner-logo.png"/>

        <div id = "links" className = {public_sans.className}>
          {mobile || <div className = "link" onClick = {() => goTo("/")}>
            Home
          </div>}
          {mobile || <div className = "link" onClick = {() => goTo("/about-me")}>
            About Me
          </div>}
          {!mobile || <div className = "link" style = {{width: "100px", padding: "0px", }} onClick = {() => goTo("/about-me")}>
            About Me
          </div>}
          {mobile || <div className = "link" onClick = {() => goTo("/unicycle-simulator-1/Unicycle%20Simulator%201.html")}>
            Unicycle Simulator
          </div>}
        </div>
      </div>
      <style jsx>{`
        #logo {
          max-height: 80px;
          padding: 20px;
          padding-bottom: 0px;
          padding-right: 0px;
        }

        #links {
          float: right;
          display: flex;
          gap: 20px;
          margin-right: 20px;
        }
        
        .link {
          border: 1px solid black;
          height: 50px;

          font-size: 20px;
          text-align: center;

          border-radius: 25px;
          padding-left: 18px;
          padding-right: 18px;
          margin-top: 25px;
          line-height: 50px;
        }

        .link:hover {
          cursor: pointer;
          background-color: rgb(146, 169, 173);
          border: 1px solid gray;
        }

        #logo:hover {
          cursor: pointer;
        }

        #banner {
          background-color: rgb(128, 148, 151);
        }
      `}</style>
    </>
  );
};

export default Banner;
