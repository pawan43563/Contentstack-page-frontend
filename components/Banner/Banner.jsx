import { useEffect, useState } from 'react';
import styles from './Banner.module.scss';
import Button from '../Button/Button';

export default function Banner({bannerData}){
    // console.log("Banner",bannerData);
    const {banner_img,banner_tagline,banner_heading,video,banner_sub_heading}=bannerData;
    const [backgroundimage,setbackgroundimage]=useState("")

    useEffect(()=>{
        changebackgroundimage()
    },[])

    const changebackgroundimage=()=>{
        if(window.innerWidth>1126){
            setbackgroundimage(`url(${banner_img.url})`)
        }else{
            setbackgroundimage("radial-gradient(circle,#eb5646 0,#eb5646 90%,#2a0f57 0,#2a0f57 100%)")
        }
    }

    if(typeof window !== 'undefined'){
        window.addEventListener('resize', changebackgroundimage);
    }

    return(
        <div className={styles.banner} >
            <div className={styles.background} style={{backgroundImage:backgroundimage}}></div>
            <div className={styles.bannerContent}>
                    <div className={styles.bannerSide}>
                        <h3>{banner_heading}</h3>
                        <p>{banner_sub_heading}</p>
                        <Button cls="yellowtransparentbtn" link={video.video_file} content={video.video_title} />
                    </div>
                    <div className={styles.taglineside}>
                        {banner_tagline}
                    </div>
            </div>
        </div>
    )

}