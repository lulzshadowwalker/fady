"use client";

import Slider from "react-slick";

export function CardSelection() {
  return (
    <section className="mt-36 max-lg:mt-12">
      <h2 className="max-w-185 mx-auto px-4 py-5 text-center font-semibold text-[3rem] leading-9 bg-secondary text-secondary-content rounded-t-[5px]">Select your card type</h2>

      <div className="bg-secondary px-4 pb-12 mb-12">
        <Slider className="py-8" infinite speed={500} slidesToShow={3} slidesToScroll={1} centerPadding="0" centerMode dots arrows={false} autoplay pauseOnHover={false} responsive={[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}>
          {
            Array(15).fill(0).map((_, index) => (
              <div className="px-5" key={index}>
                <div className="max-w-full card aspect-square flex items-center justify-center flex-col text-[1.5rem] leading-7">One</div>
              </div>
            ))
          }
        </Slider>
      </div>
    </section>
  )
}
