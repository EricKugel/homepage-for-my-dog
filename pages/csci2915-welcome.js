import { Public_Sans, Roboto } from "next/font/google";

import styles from "./welcome.module.css"

const public_sans = Public_Sans({subsets: ["latin"], weight: "400"});
const roboto = Roboto({subsets: ["latin"], weight: "400"});

const CsciWelcome = () => {
    return <div className = {public_sans.className}>
        <div className = {styles.wrapper}>
            <br/>
            <div className = {styles.header}>
                Welcome to CSCI 2021!
            </div>

            <div className = {styles.textPanel}>
                I'm Eric Kugel! I'm one of the undergraduate TAs, and I'm super excited
                to be working with you all!<br/><br/>
                I am a sophomore and a Math/CS double major. CSCI 2021 was one of my favorite classes,
                I really like seeing how computers work at a low level. You'll get to learn some new languages
                and skills, and by the end you'll have good intuition for how computers
                were intended to be programmed. <br/><br/>I'm also interested in software engineering,
                game design, and machine learning. I hope to get to know all of you better throughout the semester; for now, this is 
                to help you get to know me better!
            </div>

            <div className = {styles.imagePanel}>
                <img className = {styles.image} src = "/spoon-cherry-eric.png"/>
            </div>
        
            <div className = {styles.textPanel}>
                This is me on a bike ride! I was so impressed last year how amazing
                the Minneapolis bike trails are, and because of that I'm starting to
                really enjoy biking. I don't think there's a better way to get to know
                Minneapolis. I'm part of the University Philharmonic Orchestra and 
                competitive programming club too. I also like playing violin and unicycling! If you like, this is video proof of
                me peaking in high school: 
            </div>
    
            <div>
                <iframe width={360} height={300} className = {styles.youtube} src="https://www.youtube.com/embed/L2NXiOvQs-Q" title="Mayo Talent Show 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className = {styles.textPanel}>
                I hope to see all of you in labs and office hours. I know this will
                be a great semester! Feel free to reach out to any of the TAs throughout
                the semester for specific questions or just general guidance. We are here for you! 
            </div>
            <br/>
            <br/>
        </div>
    </div>
};

export default CsciWelcome;