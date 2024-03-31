"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper';

import 'swiper/css';
import 'swiper/css/scrollbar';

import { Scrollbar } from 'swiper/modules';

interface ImageData {
    folder: string;
    mainImage: string;
    secondaryImages: string[];
}

const PreprocessImage = () => {

    const [folder, setFolder] = useState<ImageData[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('/api/preprocessImage');
                const data = await response.json();

                if (response.ok) {
                    setFolder(data);
                } else {
                    console.error('Directory not found');
                }
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    const handleSlideChange = (swiper: SwiperClass) => {
        setActiveIndex(swiper.activeIndex);
    };


    return (
        <div className='image-preprocess'>
            <h1>Sample Images</h1>
            <div className='image-sample'>
                <div className='left-side'>
                    <Swiper
                        onSlideChange={handleSlideChange}
                        scrollbar={{ hide: true }}
                        modules={[Scrollbar]}
                    >
                        {folder.map((item, index) => (
                            <SwiperSlide key={index}>
                                <h1 style={{ justifyContent: 'flex-start', fontSize: '2rem', fontWeight: '500', fontFamily: 'serif' }}> Day {item.folder.slice(3)}</h1>
                                <Image
                                    src={item.mainImage}
                                    alt="Main Image"
                                    height={450} width={450}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='right-side'>
                    {folder[activeIndex]?.secondaryImages.map((image, i) => (
                        <Image key={i} src={image} alt="Secondary Image" height={175} width={175} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PreprocessImage;
