'use client'

import { useRef, useState } from 'react'
import Slider, { Settings } from 'react-slick'
import dynamic from 'next/dynamic'
import 'plyr-react/plyr.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronLeft,
    faChevronRight,
    faPlay,
} from '@fortawesome/free-solid-svg-icons'

const Plyr = dynamic(() => import('plyr-react'), { ssr: false })

export function Videos() {
    return null

    const TOTAL = 15
    const [currentSlide, setCurrentSlide] = useState(0)
    const sliderRef = useRef<Slider>(null)

    // Move to next slide: decrement index, wrap around
    const handleNext = () => {
        setCurrentSlide((prev) => (prev - 1 + TOTAL) % TOTAL)
        sliderRef.current?.slickNext()
    }

    // Move to prev slide: increment index, wrap around
    const handlePrev = () => {
        setCurrentSlide((prev) => (prev + 1) % TOTAL)
        sliderRef.current?.slickPrev()
    }

    // Custom arrows that call our handlers
    function PrevArrow() {
        return (
            <button
                className="absolute left-4 top-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full border border-white bg-transparent text-white
                   transform -translate-y-1/2"
                onClick={handlePrev}
                area-label="Previous"
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
        )
    }
    function NextArrow() {
        return (
            <button
                className="absolute right-4 top-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full border border-white bg-transparent text-white
                   transform -translate-y-1/2"
                onClick={handleNext}
                area-label="Next"
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        )
    }

    const settings: Settings = {
        infinite: true,
        speed: 500,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        autoplay: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768,
                settings: { slidesToShow: 1, centerMode: false },
            },
        ],
    }

    return (
        <section className="videos relative py-18 bg-secondary text-secondary-content rounded-4xl overflow-hidden">
            <div className="container mx-auto relative">
                <Slider ref={sliderRef} {...settings}>
                    {Array.from({ length: TOTAL }).map((_, idx) => (
                        <div key={idx} className="px-4 focus:outline-none">
                            <div
                                className={`video-card relative overflow-hidden rounded-2xl transition-transform duration-300
                  ${idx === currentSlide ? 'scale-100 opacity-100' : 'scale-75 opacity-50'}`}
                            >
                                <Plyr
                                    source={{
                                        type: 'video',
                                        sources: [
                                            {
                                                src: '/videos/ad-radius.mp4',
                                                provider: 'html5',
                                            },
                                        ],
                                    }}
                                    options={{ autoplay: false, muted: false }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <FontAwesomeIcon
                                        icon={faPlay}
                                        size="3x"
                                        className="text-white opacity-80"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}
