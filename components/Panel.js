import styles from "./Panel.module.css"

const Panel = ({image, avatar, title, subtitle, link, topless}) => {
    const clickedMe = () => {
        window.open(link, "_blank");
    }

    return (
        <div className = {styles.wrapper} onClick = {clickedMe}>
            <div className={styles.header}>
                <img className = {styles.headerImage} src={image}/>
            </div>

            <div className = {styles.bottom}>
                <div className = {styles.imageWrapper}>
                    <img className = {styles.image} src = {avatar}></img>
                </div>
                <div className = {styles.title}>{title}</div>
                <div className = {styles.subtitle}>{subtitle}</div>
            </div>
        </div>
    )
};

export default Panel;