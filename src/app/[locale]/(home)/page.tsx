import { Hero } from './components/hero'
import { InfoCard } from './components/info-card'
import { Passengers } from './components/passengers'
import { Drivers } from './components/drivers'
import { Stats } from './components/stats'
import { MoreWaysToRide } from './components/more-ways-to-ride'

export default function Home() {
    return (
        <main>
            <Hero />
            <div className="max-w-7xl h-[2px] bg-base-content-300/60 mt-12 mb-24 mx-auto rounded-md" />
            <InfoCard />

            <div className="bg-secondary text-secondary-content">
                <Stats />
                <Passengers />
                <Drivers />
            </div>

            <MoreWaysToRide />
        </main>
    )
}
