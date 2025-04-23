"use client";
import { faAppStoreIos, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";

export function Passengers() {
  return (
    <section className="container mx-auto my-25">
      <h2 className="tracking-[5%] leading-22 font-bold text-center text-[5.31rem] uppercase"><span className="text-primary">Fady</span> Passengers</h2>

      <Slider infinite speed={500} slidesToShow={1} slidesToScroll={1} centerPadding="0" centerMode dots arrows={false} autoplay className="mt-17">
        {
          Array(15).fill(0).map((_, index) => (
            <div className="px-4" key={index}>
              <div className="text-center py-12 px-4 bg-base text-base-content grid place-content-center rounded-[5px]">
                <h3 className="max-w-185 font-semibold leading-12 text-6xl mb-10 text-balance mx-auto">SmartMatch™ Rides</h3>
                <p className="max-w-185 text-2xl leading-7 mx-auto">At FADY, we believe every ride should feel personal. That’s why we use smart algorithms to match you with the best driver for your preferences — whether you enjoy a quiet trip, need to charge your phone, or just want the fastest route possible. With SmartMatch™, your journey becomes smoother, faster, and more comfortable — tailored exactly to your vibe.</p>
              </div>
            </div>
          ))
        }
      </Slider>

      <div className="flex gap-4 mt-21 px-4">
        <button className="basis-0 grow flex items-center justify-center gap-4 btn btn-primary btn-outline">
          <FontAwesomeIcon icon={faAppStoreIos} className="text-secondary-content" size="3x" />
          <div className="text-center text-secondary-content leading-tight">
            <div className="text-[2.5rem] font-semibold">Download</div>
            <div className="text-lg">for iOS</div>
          </div>
        </button>

        <button className="basis-0 grow flex items-center justify-center gap-4 btn btn-primary btn-outline">
          <FontAwesomeIcon icon={faGooglePlay} className="text-secondary-content" size="3x" />
          <div className="text-center text-secondary-content">
            <div className="text-[2.5rem] font-semibold">Download</div>
            <div className="text-lg">for Android</div>
          </div>
        </button>
      </div>

      <div className="flex items-center gap-2 text-sm text-neutral-500 mt-4 leading-[10px] mx-4">
        <FontAwesomeIcon icon={faInfoCircle} size="sm" />
        how to download on iOS?
      </div>
    </section>
  );
}
