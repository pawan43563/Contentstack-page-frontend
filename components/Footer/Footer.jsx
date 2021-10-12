import styles from './Footer.module.scss';
import Loader from 'react-loader-spinner';

export default function Footer({footerData,isLoggedin}){
    const {contentstack_logo,footer_data,social_link,terms}=footerData;
    
    
    return(
        isLoggedin===true && (
            <div className={styles.container}>
            <div className={styles.footerContainer}>
            <div className={styles.footersocial}>
                <img src={contentstack_logo.url} alt="Contentstack logo" />
                <div className={styles.links}>
                    {
                        social_link.length>0?
                        social_link.map((e,i)=>(
                            <i className={`fa fa-${e.title}`} href={e.href} key ={e.title}></i>
                        )):
                        <Loader type="ThreeDots" color="black" height="100" width="100" />
                    }

                </div>
            </div>
            <div className={styles.footerinfo}>
                {   
                    footer_data.length>0 ?
                    footer_data.map((e,i)=>(
                        <div className={styles.main} key={i}>
                        <h2>{e.field_name}</h2>
                        {
                            e.sub_field.map((e1,i)=>(
                                <a key={i} href={e1.sub_field_link.href}>{e1.sub_field_link.title}</a>
                            ))
                        }
                        </div>
                    )):
                    <Loader type="ThreeDots" color="black" height="100" width="100" />
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
    )
}
