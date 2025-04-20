"use client";

import Marquee from "react-fast-marquee";

export function Stats() {
  return (
    <section>
      <h2 className="sr-only">Stats</h2>

      <Marquee
        autoFill
        speed={30}
        className="py-24 [mask-image:linear-gradient(to_right,transparent,black,transparent)]"
      >
        {Array(15).fill(0).map((_, index) => (
          <div key={index} className="mx-8">
            <span className="text-8xl leading-8 font-light">1500+</span>
            <p className="text-xl leading-5 font-semibold mt-4">downloads on PlayMarket only</p>
          </div>
        ))}
      </Marquee>
    </section>
  )
}
