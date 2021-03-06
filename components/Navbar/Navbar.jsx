import { useState ,useRef} from 'react';
import styles from './Navbar.module.scss';
import Loader from 'react-loader-spinner';
import Button from '../Button/Button';

export default function Navbar({navData,setisMenuOpened,isMenuOpened,isLoggedin}){
    // console.log("Navbar",navData);
    const {navbar_data,navbar_logo}=navData[0];
    const [colorChange, setColorchange] = useState(false);
    const [showdropdown,setdropdown] = useState("");

    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
            setColorchange(true);
        }
        else{
            setColorchange(false);
        }
    };
    if(typeof window !== 'undefined'){
        window.addEventListener('scroll', changeNavbarColor);
    }

    const handleMouseOver=(e)=>{
        if(e.target.id!==""){
            setdropdown(e.target.id)
        }
    }

    const handleMouseLeave=(e)=>{
        setdropdown("")
    }
    
    const togglesidenavbar=()=>{
        if(isMenuOpened===true){
            setisMenuOpened(false)
        }else{
            setisMenuOpened(true)
        }
    }


    return(
        isLoggedin===true && (
            <div className={styles.containernav} style={{background:colorChange?"#614FB9":"transparent"}}>
            <div className={styles.navigationBar} >
                <div className={styles.companyLogo} >
                    <img src={navbar_logo.url} alt="Contentstack logo" />
                </div>
                <ul className={styles.navContainer}>
                    {
                        navbar_data.length>0?
                        navbar_data.map((e,i)=>(
                            <li className={styles.navItem} key={e.main_link.title} id={e.main_link.title}  onMouseLeave={handleMouseLeave}>
                                {
                                    e.iscta?(
                                        <Button cls="redtransparentbtn" link={e.main_link.href} content={e.main_link.title} onMouseOver={handleMouseOver} />
                                    ):
                                    <>
                                        <a href={e.main_link.href} id={e.main_link.title}  className={styles.navLink}  onMouseOver={handleMouseOver}>{e.main_link.title}</a>
                                {
                                    !e.iscta&&showdropdown === e.main_link.title&&
                                    <div className={styles.dropdownmenu} >
                                        <div className={styles.leftmenu}>
                                            <img src={e.sub_left_field.image.url} alt="Contentstack funding News" />
                                            <p>{e.sub_left_field.description}</p>
                                            <a href={e.sub_left_field.read_more.href}>{e.sub_left_field.read_more.title}</a>
                                            
                                        </div>
                                        <div className={styles.rightmenu}>
                                            <ul>
                                                {
                                                    e.sub_right_field.map((e,i)=>(
                                                        <li key={e.link.title}>
                                                            <a href={e.link.href}>{e.link.title}</a>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                            
                                        </div>
                                    </div>    
                                }
                                    </>
                                }
                                
                                
                            </li>
                        )):
                        <Loader type="ThreeDots" color="black" height="100" width="100" />
                    }
                    
                </ul>
                                    

                <div className={styles.humburger} onClick={togglesidenavbar}>
                    <span ></span>
                    <span ></span>
                    <span ></span>
                </div>
            </div>
        </div>
        )
        
    )
}

