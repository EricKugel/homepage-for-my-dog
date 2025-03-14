import { Public_Sans, Roboto } from "next/font/google";

import styles from "./about-me.module.css"

const public_sans = Public_Sans({subsets: ["latin"], weight: "400"});
const roboto = Roboto({subsets: ["latin"], weight: "400"});

const AboutMe = () => {
    return <div className = {public_sans.className}>
        <div className = {styles.wrapper}>
            <div className = {styles.header}>
                About Me
            </div>

            <div className = {styles.imagePanel}>
                <img className = {styles.image} src = "/me.jpg"/>
            </div>

            <div className = {styles.textPanel}>
                I'm Eric! I'm a student at the University of Minnesota-Twin Cities majoring in Mathematics and Computer Science.
                <br/><br/>
                I also enjoy violin, piano, and unicycling. I'm a member of the University Philharmonic Orchestra and the Competitive Programming Club.
            </div>
        </div>
    </div>
};

export default AboutMe;