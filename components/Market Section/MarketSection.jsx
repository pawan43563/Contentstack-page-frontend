import styles from './MarketSection.module.scss'
import Button from '../Button/Button';
import Image from 'next/image';

export default function MarketStudies({marketstudies}){
    // console.log("Market",marketstudies);
    const {background_image,link,chart,heading,description}=marketstudies;

    return(
        <div className={styles.marketcontainer} >
            <div className={styles.backgroundmarket} style={{backgroundImage:`url(${background_image.url})`}}></div>
            <div className={styles.leftimg}>
                <Image src={chart.url}  alt="Chart" width={1000} height={1000} />
            </div>
            <div className={styles.info}>
                <h1>{heading}</h1>
                <p>{description}</p>
                <Button cls="redtransparentbtn" link={link.href} content={link.title}/>
            </div>
        </div>
    )
}