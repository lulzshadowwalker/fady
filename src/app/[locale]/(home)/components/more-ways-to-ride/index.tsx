import Image from "next/image";
import background from "@/assets/images/more-ways-to-ride-background.png";
import { faCar, faCarSide, faGift, faIdCard, faInfoCircle, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const data = [
  { title: 'Choose Type of Ride', description: 'Pick from multiple ride classes to match your comfort and budget', icon: faCar, },
  { title: 'Gifts', description: 'Send ride credits as gift', icon: faGift, },
  { title: 'Wallet', description: 'Charge your wallet', icon: faWallet, },
  { title: 'Become a Driver', description: 'Join Fady', icon: faIdCard, },
] as const;

export function MoreWaysToRide() {
  return <section className="relative pt-20 pb-22"
    style={{
      backgroundImage: `url(${background.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >

    <div className="container mx-auto z-10">
      <h2 className="font-semibold text-[5.37rem] leading-22">More ways to ride</h2>
      <ul className="space-y-14 mt-21">
        {
          data.map(({ title, description, icon }, index) => (
            <li key={index} className="flex items-start gap-[1.875rem]">
              <FontAwesomeIcon icon={icon} size="3x" className="text-primary" />
              <div>
                <h3 className="font-bold text-5xl leading-12 mb-5">{title}</h3>
                <p className="text-lg font-semibold leading-5">{description}</p>
              </div>
            </li>
          ))
        }
      </ul>

      <div className="flex items-center gap-2 text-sm text-neutral-500 mt-7 leading-[10px]">
        <FontAwesomeIcon icon={faInfoCircle} size="sm" />
        how to download on iOS?
      </div>

      <p className="font-semibold text-[1.75rem] text-primary mt-25">more enhancements on the way</p>
    </div>
  </section>
}
