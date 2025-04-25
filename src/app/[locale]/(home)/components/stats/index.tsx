'use client'

import { useStats } from '@/lib/context/stats-context'
import Marquee from 'react-fast-marquee'

export function Stats() {
    const { stats } = useStats()

    return (
        <section>
            <h2 className="sr-only">Stats</h2>

            <Marquee
                autoFill
                speed={30}
                className="py-24 [mask-image:linear-gradient(to_right,transparent,black,transparent)]"
            >
                <div className="mx-8">
                    <span className="text-8xl leading-8 font-light">
                        {stats?.driverCount ?? '...'}+
                    </span>
                    <p className="text-xl leading-5 font-semibold mt-4 text-center">
                        Drivers
                    </p>
                </div>

                <div className="mx-8">
                    <span className="text-8xl leading-8 font-light">
                        {stats?.customerCount ?? '...'}+
                    </span>
                    <p className="text-xl leading-5 font-semibold mt-4 text-center">
                        Customers
                    </p>
                </div>

                <div className="mx-8">
                    <span className="text-8xl leading-8 font-light">
                        {stats?.rideCount ?? '...'}+
                    </span>
                    <p className="text-xl leading-5 font-semibold mt-4 text-center">
                        Rides with Fady
                    </p>
                </div>

                <div className="mx-8">
                    <span className="text-8xl leading-8 font-light">1015+</span>
                    <p className="text-xl leading-5 font-semibold mt-4 text-center">
                        Downloads on the Playstore
                    </p>
                </div>
            </Marquee>
        </section>
    )
}
