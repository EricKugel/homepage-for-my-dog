import { useSession } from "next-auth/react";

import { Roboto } from "next/font/google";

import Panel from "../components/Panel";
import SubtitleLink from "../components/SubtitleLink";
import styles from "./index.module.css";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

const App = () => {
  const session = useSession();

  return (
    <>
      <div className = {styles.header + " " + roboto.className}>
        My Profiles
      </div>

      <div className = {styles.panelGroup}>
        <Panel 
          image = "/panel/linkedin.png"
          avatar = "/panel/linkedin-avatar.png"
          title = "Eric Kugel"
          subtitle = "Computer Science and Math at University of Minnesota."
          link = "https://www.linkedin.com/in/erickugel/"
        ></Panel>
        <Panel
          image = "/panel/github.png"
          avatar = "/panel/github-avatar.png"
          title = "Eric Kugel"
          subtitle = "Programmer in Java, Python, HTML/JS/CSS, Next.js, and C."
          link = "https://github.com/EricKugel"
        ></Panel>
      </div>
      
      <div className = {styles.header + " " + roboto.className}>
        My Projects
      </div>

      <div className = {styles.panelGroup}>
        <Panel
          image = "/panel/github.png"
          avatar = "/panel/esarcplang-avatar.png"
          title = "Esarcplang"
          subtitle = "An interpreted programming language built from scratch in python. Like a combination of lisp and assembly."
          link = "https://github.com/EricKugel/Esarcplang"
        ></Panel>
        <Panel
          image = "/panel/kidsunited.svg"
          avatar = "/panel/kidsunited-avatar.png"
          title = "Kids United International"
          subtitle = {<span>I built and maintain the website and communication platform for Kids United International using Next.js. <SubtitleLink href = "https://kidsunitedint.org" children = "kidsunitedint.org"></SubtitleLink></span>}
          link = "https://github.com/EricKugel/kids-united-int"
        ></Panel>
        <Panel
          image = "/panel/github.png"
          avatar = "/panel/raytracer.png"
          title = "Ray Tracer"
          subtitle = "Ray tracer built from scratch in Java."
          link = "https://github.com/EricKugel/Ray-Tracer"
        ></Panel>
        <Panel
          image = "/panel/youtube.png"
          avatar = "/panel/math-avatar.png"
          title = "Math Explainer Videos"
          subtitle = "Math explainer videos animated using Manim, edited in Lightworks."
          link = "https://www.youtube.com/watch?v=ta4lTyqDtgU&list=PLDorkQtaqNxYhbQhCYZdFL4_8wNlSutmK&index=2"
        ></Panel>
      </div>

      <div className = {styles.header + " " + roboto.className}>
        My Music
      </div>

      <div className = {styles.panelGroup}>
        <Panel
          image = "/panel/spotify.png"
          avatar = "/panel/bach-avatar.png"
          title = "Eric Kugel Plays Bach"
          subtitle = "A 2023 (joke) album featuring Bach works for violin. Available on Spotify, Apple Music, YouTube, and YouTube Music."
          link = "https://open.spotify.com/album/63TB61Dcn3D7tZSWrYTeUr"
        ></Panel>
        <Panel
          image = "/panel/spotify.png"
          avatar = "/panel/piano-avatar.png"
          title = "Eric Kugel Plays Piano"
          subtitle = "Another 2023 joke album of piano pieces. Available on Spotify, Apple Music, YouTube, and YouTube Music."
          link = "https://open.spotify.com/album/2TqzJm2QkvjSQSWN9FdhKu"
        ></Panel>
      </div>

      <div className = {styles.header + " " + roboto.className}>
        Play Unicycle Simulator
      </div>

      <div className = {styles.panelGroup}>
        <Panel
          image = "/panel/unicycle.png"
          avatar = "/panel/unicycle-1-avatar.png"
          title = "Unicycle Simulator 1"
          subtitle = "Original Unicycle Simulator, recreated in Godot. Mobile and controller friendly."
          link = "https://erickugel.com/unicycle-simulator-1/Unicycle%20Simulator%201.html"
        ></Panel>
        <Panel
          image = "/panel/unicycle.png"
          avatar = "/unicycle-simulator-1/lib/images/logo.png"
          title = "Unicycle Simulator"
          subtitle = "The original game, written in pygame, ported to HTML/CSS/JS. This is genuine, action-packed unicycle excitement."
          link = "https://erickugel.github.io/Unicycle-Simulator"
        ></Panel>
      </div>
    </>
  );
};

export default App;
