import styles from './Footer.module.scss';

export default function Footer({footerData}){
    // console.log("Footer ",footerData);
    const {contentstack_logo,footer_data,social_link,terms}=footerData;

    return(
        <div className={styles.container}>
            <div className={styles.footerContainer}>
            <div className={styles.footersocial}>
                <img src={contentstack_logo.url} alt="Contentstack logo" />
                <div className={styles.links}>
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-youtube"></i>
                    <i className="fa fa-linkedin"></i>
                    <i className="fa fa-github"></i>
                    <i className="fa fa-twitter"></i>
                </div>
            </div>
            <div className={styles.footerinfo}>
                {
                    footer_data.map((e,i)=>(
                        <div className={styles.main} key={i}>
                        <h2>{e.field_name}</h2>
                        {
                            e.sub_field.map((e1,i)=>(
                                <a key={i} href={e1.sub_field_link.href}>{e1.sub_field_link.title}</a>
                            ))
                        }
                        </div>
                    ))
                }
            </div>
        </div>
        <div className={styles.copyrightInfo}>
            {
                terms.map((e,i)=>(
                    <a href={e.href} key={i}>{e.title}</a>
                ))
            }
        </div>
        </div>
        
    )
}
