//IMPORTS FROM SWIPERJS: 
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


//MY IMPORTS: 
import logos from './data';
import Logo from './Logo';
import './skills.css'


const Skills = () => {
  return (
    <section id="skills">
      <h2>Technical Skills</h2>

      <div className='container'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          logos.map(logo => (
            <SwiperSlide key={logo.id}>
              <Logo logo={logo}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
      </div>
    </section>
  )
}

export default Skills