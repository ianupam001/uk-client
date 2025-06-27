'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Link from 'next/link';

const cardData = [
  {
    image: '/assets/img/car1.jpeg',
    title: 'TOOLBOXES',
    link: '/toolboxes',
  },
  {
    image: '/assets/img/card4.jpeg',
    title: 'GET ROAD TRIP READY',
    link: '/road-trip',
  },
  {
    image: '/assets/img/card2.jpeg',
    title: 'CAR CLEANING',
    link: '/cleaning',
  },
  {
    image: '/assets/img/card3.jpeg',
    title: 'FREE CAR CHECKS',
    link: '/checks',
  },
  {
    image: '/assets/img/card4.jpeg',
    title: 'MOT INCLUDED',
    link: '/mot',
  },
  {
    image: '/assets/img/card5.jpeg',
    title: 'BEST SELLING BIKES',
    link: '/bikes',
  },
];

export default function CardSlider() {
  return (
    <div className="pt-5 px-4 py-6">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <Link href={card.link}>
             <div className="relative h-80 overflow-hidden shadow-md hover:scale-105 transition-transform" style={{ borderRadius: '10px' }}>

                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white text-lg font-bold p-3">
                  {card.title}
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
