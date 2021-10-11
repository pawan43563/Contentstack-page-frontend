import styles from './Clients.module.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const {  onClick } = props;
    return (
        <i onClick={onClick} 
        className="fa fa-chevron-right" 
        style={{color:"grey",fontSize:"3rem"}}></i>
    );
}

function SamplePrevArrow(props) {
    const {  onClick } = props;
    return (
        <i onClick={onClick} 
        className="fa fa-chevron-left" 
        style={{color:"grey",fontSize:"3rem"}}></i>
    );
}

export default function Client({clientimages}){
    // console.log("Client ",clientimages);
    const {company_clients_logo}=clientimages;

    const settings={
        infinite:true,
        speed:500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay:true,
       
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive:[
            {
                breakpoint: 1126,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    speed:500,
                    autoplaySpeed:2000,
                    autoplay:true,
                    infinite: true,
                    arrows:false
                }
            }
        ]
    }

    return(
        <div className={styles.clientContainer} >
            <Slider {...settings} className={styles.slider} style={{display:"flex"}}>
                    {
                        company_clients_logo.map((e,i)=>(
                            <div className={styles.clientSlider} key={i}>
                                <img src={e.company_logo.url} alt="Clients Logo" />
                            </div>
                            
                        ))
                    }
                
            </Slider>
        </div>
    )
}
