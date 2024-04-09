"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";

import RNNChart from "./rnn-model";
import CNNChart from "./cnn-model";

import { useState } from "react";
import { Modal } from "@/components/comps/modal";
import FModelCNN from "./cnn-model/fModel";
import FModelRNN from "./rnn-model/fModel";


const ShowModel: React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]}>
                <SwiperSlide onClick={() => {setIsModalOpen(true); setActiveSlideIndex(0)}}><RNNChart /></SwiperSlide>
                <SwiperSlide onClick={() => {setIsModalOpen(true); setActiveSlideIndex(1)}}><CNNChart /></SwiperSlide>
            </Swiper>
            <Modal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                }}
            >
                <Swiper navigation={true} modules={[Navigation]} initialSlide={activeSlideIndex}>
                    <SwiperSlide><FModelRNN /></SwiperSlide>
                    <SwiperSlide><FModelCNN /></SwiperSlide>
                </Swiper>
            </Modal>
        </>
    );
};

export default ShowModel;
