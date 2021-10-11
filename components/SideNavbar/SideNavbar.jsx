import React from 'react';
import styles from './SideNavbar.module.scss';

export default function SideNavbar({navData,setisMenuOpened}){
    // console.log("Sidenavbar",navData);
    const {navbar_data}=navData
    return (
        <div className={styles.sidenavbarContainer}>
            <div className={styles.sidenavbarContent}>
                <a href="#" className={styles.docu}>Documentation</a>
                <a href="#">Login</a>
            {
                navbar_data.map((e,i)=>(
                    <>
                        <a href={e.main_link.href} key={i} className={e.iscta?styles.btn:styles.navLink}>{e.main_link.title}</a>
                        {
                            e.sub_right_field.map((e1,i)=>(
                                <a className={styles.navLinkMain} key={i} href={e1.link.href}>{e1.link.title}</a>
                            ))
                        }
                    </>
                ))
            }
            </div>
            <div className={styles.cross} onClick={()=>{setisMenuOpened(false)}}>
                <span className={styles.span1}></span>
                <span className={styles.span2}></span>
            </div>
        </div>
    )
}