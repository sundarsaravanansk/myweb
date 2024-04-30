"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Navigation } from 'swiper/modules';
import Imageblur from "@/app/Imageblur/Imageblur";
import "./project.css"
import Link from 'next/link';

const ProjectContent = () => {
    return (
        <div className='w-full ml-auto mr-auto' >
            <div className='container mx-auto px-5 lg:px-10'>
                <div className="text-white text-xl font-[600] lg:text-3xl lg:leading-tight text-center mb-10">
                    <h1 className='bg-gradient-to-r from-fuchsia-500 via-sky-500 to-cyan-400 inline-block text-transparent bg-clip-text'>PROJECTS</h1></div>
                {/* <Swiper
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
                       <Link href={"https://walkinternational.com/"} target='_blank'>
                        <Imageblur
                        src={"/projects/Walk.jpg"}
                        alt={"Walkinternation"}
                        width={400}
                        height={217}
                        className="w-[350px] h-[370px]  lg:w-[330px] lg:h-[450px] "
                        />
                       </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Link href={"https://rubber-teal.vercel.app/"} target='_blank'>
                        <Imageblur
                        src={"/projects/corirubber.webp"}
                        alt={"corirubber"}
                        width={400}
                        height={217}
                        className="w-[350px] h-[370px]  lg:w-[330px] lg:h-[450px]  "
                        />
                       </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Link href={"https://casagrand-perch-o2n2.vercel.app"} target='_blank'>
                        <Imageblur
                        src={"/projects/casagrand.jpg"}
                        alt={"corirubber"}
                        width={400}
                        height={317}
                        className="w-[350px] h-[370px]  lg:w-[330px] lg:h-[450px]  "
                        />
                       </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                    <Link href={"https://instagram-liart-three.vercel.app/"} target='_blank'>
                        <Imageblur
                        src={"/projects/casagrand.jpg"}
                        alt={"corirubber"}
                        width={400}
                        height={317}
                        className="w-[350px] h-[370px]  lg:w-[330px] lg:h-[450px]  "
                        />
                       </Link>
                    </SwiperSlide>
                </Swiper> */}
                <p className='text-center'>Coming soon...</p>
            </div>
        </div>
    );
}

export default ProjectContent;
