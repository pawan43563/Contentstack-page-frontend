import React from 'react';
import styles from './SideNavbar.module.scss';
import Loader from 'react-loader-spinner';
export default function SideNavbar({navData,setisMenuOpened}){
    // console.log("Sidenavbar",navData);
    const {navbar_data}=navData
    return (
        <div className={styles.sidenavbarContainer}>
            <div className={styles.sidenavbarContent}>
                <a href="#" className={styles.docu}>Documentation</a>
                <a href="#">Login</a>
            {
                navbar_data.length>0?
                navbar_data.map((e)=>(
                    <>
                        <a key={e.main_link.title} href={e.main_link.href} className={e.iscta?styles.btn:styles.navLink}>{e.main_link.title}</a>
                        {
                            e.sub_right_field.map((e1,i1)=>(
                                <a key={i1} className={styles.navLinkMain}  href={e1.link.href}>{e1.link.title}</a>
                            ))
                        }
                    </>
                )):
                <Loader type="ThreeDots" color="black" height="100" width="100" />
            }
            </div>
            <div className={styles.cross} onClick={()=>{setisMenuOpened(false)}}>
                <span className={styles.span1}></span>
                <span className={styles.span2}></span>
            </div>
        </div>
    )
}