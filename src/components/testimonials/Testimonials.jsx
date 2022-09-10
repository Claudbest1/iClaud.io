import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Daniel Makinde',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quos veritatis porro, tempore consectetur in impedit ullam suscipit et voluptate explicabo laudantium, dolorum odit non fuga! Ad, molestias! Est, hic?'
  },
  {
    avatar: AVTR2,
    name: 'Oluwafemi Adeyemi',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quos veritatis porro, tempore consectetur in impedit ullam suscipit et voluptate explicabo laudantium, dolorum odit non fuga! Ad, molestias! Est, hic?'
  },
  {
    avatar: AVTR3,
    name: 'Iruoghene Ovuomaiye',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quos veritatis porro, tempore consectetur in impedit ullam suscipit et voluptate explicabo laudantium, dolorum odit non fuga! Ad, molestias! Est, hic?'
  },
  {
    avatar: AVTR4,
    name: 'Brian Ikoku',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quos veritatis porro, tempore consectetur in impedit ullam suscipit et voluptate explicabo laudantium, dolorum odit non fuga! Ad, molestias! Est, hic?'
  }
]
const Testimonials = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
        slidesPerView={1}
        autoplay={true}
        pagination={{ clickable: true }}>
        
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
          
        }
      </Swiper>
    </section>
  )
}

export default Testimonials