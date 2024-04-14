"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import RNNRes from './rnnRes';
import CNNRes from "./cnnResult";
import  RNNModalRes  from "./rnnModalRes";
import { Modal } from "../comps/modal";
import CNNModalRes from "./cnnModalRes";

const ShowRes : React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activationSlideIndex, setActivationSlideIndex] = useState(0);   

    return (
        <>
            <Swiper navigation={true} modules={[Navigation]}>
                <SwiperSlide onClick={() => {setIsModalOpen(true); setActivationSlideIndex(0)}}><RNNRes /></SwiperSlide>
                <SwiperSlide onClick={() => {setIsModalOpen(true); setActivationSlideIndex(1)}}><CNNRes /></SwiperSlide>
            </Swiper>
            <Modal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                }}
            >
                <Swiper navigation={true} modules={[Navigation]} initialSlide={activationSlideIndex}>
                    <SwiperSlide><RNNModalRes /></SwiperSlide>
                    <SwiperSlide><CNNModalRes /></SwiperSlide>
                </Swiper>
            </Modal>
        </>
    )
}

export  default ShowRes;