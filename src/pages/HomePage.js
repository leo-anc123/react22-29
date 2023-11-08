import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';

import '../css/Home.css';


const HomePage = (props) => {

    const settings = {
        arrows: false,
        infinte: true,
        speed:1000,
        autoplaySpeed:3000,
        fade:true,
        autoplay:true
    };

    return (
        <div className="galeria">
            <Slider {...settings}>
            <img src="/images/img01.jpg" alt="imagen01"/>
            <img src="/images/img02.jpg" alt="imagen02"/>
            <img src="/images/img03.jpg" alt="imagen03"/>
            <img src="/images/img04.jpg" alt="imagen04"/>
            <img src="/images/img05.jpg" alt="imagen05"/>
            </Slider>
        </div>
    )
}

export default HomePage;

