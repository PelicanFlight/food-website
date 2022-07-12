

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { Card } from "./Card";
import {ContentContainer, Background, Content, FoodTitle, FoodDescription, CardContainer} from "./SpecialtyElements"
import Image from "../../image/salad.jpg"
import Aos from 'aos'
import 'aos/dist/aos.css'

const Specialty = () => {




  const [food, setFood] = useState([])



  
  const getFood = async () => {



    const response = await fetch('https://api.unsplash.com/search/photos?page=1&query=italian food&client_id=hpRirhI_9zS7L2Cf7cib3CI9Ob-Jt9V0sR0NCnWI3NQ')
    const foodData = await response.json()

setFood(foodData.results)
     console.log(foodData.results)

  }

  useEffect(()=> {

getFood()
  }, [])

useEffect(() => {
  Aos.init({duration: 2000});
}, []);

  
  return (
  <div className='specialty-container' id='specialty'>
      <h1 className="title" >Specialties</h1>



<Swiper


        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
               {food.slice(0,4).map((foodItem) => (

                  <SwiperSlide  key={foodItem.id}>
<Card foodItem={foodItem} />
      </SwiperSlide>

        ))}
      </Swiper>

  </div >
  )
}

export default Specialty