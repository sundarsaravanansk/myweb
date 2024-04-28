"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Navigation } from 'swiper/modules';
import Imageblur from "@/app/Imageblur/Imageblur";
import "./project.css"

const ProjectContent = () => {
    return (
        <div className='w-full ml-auto mr-auto' >
            <div className='container mx-auto px-5 lg:px-10'>
                <div className="text-white text-xl font-[600] lg:text-3xl lg:leading-tight text-center mb-10"><h1>PROJECTS</h1></div>
                <Swiper
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            scrollbar: { dragSize: 50 }

                        },
                        768: {
                            slidesPerView: 1,
                        },
                        992: {
                            slidesPerView: 1,
                        },
                        2300: {
                            slidesPerView: 1,
                        }
                    }}
                    effect={'cards'}
                    spaceBetween={10}
                    navigation={true}
                    modules={[EffectCards, Navigation]}
                    className="mySwiper cursor-pointer"
                >
                    <SwiperSlide>
                        <Imageblur
                        src={"/projects/Walk.jpg"}
                        alt={"Walkinternation"}
                        width={200}
                        height={217}
                        className="w-[350px] h-[370px]  lg:w-[330px] lg:h-[450px] "
                        />
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default ProjectContent;
