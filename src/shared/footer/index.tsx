import Image from 'next/image'
import logo from '@/assets/images/logo-vertical.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAppStoreIos,
  faFacebook,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-content py-20">
      <div className="container mx-auto flex items-center justify-between gap-4 max-w-[66.25rem]">
        <Image src={logo} alt="fady vertical logo" width={60} />

        <div className="grid grid-cols-2 gap-[0.65rem]">
          <button className="btn btn-secondary bg-black flex items-center gap-2 text-lg">
            <FontAwesomeIcon icon={faAppStoreIos} size="2x" />  Download
          </button>

          <button className="btn btn-secondary bg-black flex items-center gap-2 text-lg">
            <FontAwesomeIcon icon={faAppStoreIos} size="2x" />  Download
          </button>

          <button className="btn btn-secondary bg-black flex items-center gap-2 text-lg">
            <FontAwesomeIcon icon={faAppStoreIos} size="2x" />  Download
          </button>

          <button className="btn btn-secondary bg-black flex items-center gap-2 text-lg">
            <FontAwesomeIcon icon={faAppStoreIos} size="2x" />  Download
          </button>
        </div>

        <ul className="flex items-start flex-col gap-5">
          <li className="animate-underline animate-underline-secondary-content">About us</li>
          <li className="animate-underline animate-underline-secondary-content">Fady Passengers</li>
          <li className="animate-underline animate-underline-secondary-content">Fady Drivers</li>
          <li className="animate-underline animate-underline-secondary-content">Services</li>
          <li className="animate-underline animate-underline-secondary-content">Wallet</li>
        </ul>

        <ul className="flex flex-col gap-5 items-start">
          <li className="animate-underline animate-underline-secondary-content">FAQ</li>
          <li className="animate-underline animate-underline-secondary-content">Help</li>
          <li className="animate-underline animate-underline-secondary-content">Terms and Conditions</li>
        </ul>

        <ul className="space-y-4">
          <li>
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </li>
          <li>
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </li>
        </ul>
      </div>
    </footer>
  )
}
