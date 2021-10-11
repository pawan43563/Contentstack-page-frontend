import styles from './MarketSection.module.scss'

export default function MarketStudies({marketstudies}){
    // console.log("Market",marketstudies);
    const {background_image,link,chart,heading,description}=marketstudies;

    return(
        <div className={styles.marketcontainer} >
            <div className={styles.backgroundmarket} style={{backgroundImage:`url(${background_image.url})`}}></div>
            <div className={styles.leftimg}>
                <img src={chart.url} alt="Chart" />
            </div>
            <div className={styles.info}>
                <h1>{heading}</h1>
                <p>{description}</p>
                <a href={link.href}>{link.title}</a>
            </div>
        </div>
    )
}