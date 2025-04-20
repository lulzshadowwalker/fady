import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import background from "@/assets/logo-background.png";
import Image from "next/image";

export default function ContactUs() {
  return (
    <main className="min-h-screen container mx-auto relative pt-12" >
      <Image src={background} alt="" fill className="-z-50" />

      <h1 className="uppercase font-semibold text-center max-w-[740px] mx-auto leading-[90px] text-[5.3rem] mb-8">We&lsquo;re here to help!</h1>

      <section className="flex gap-4 mb-32">
        <div className="card grow basis-0 shadow-none py-11 max-w-full flex flex-col items-center justify-center gap-8">
          <h2 className="font-semibold text-center text-2xl leading-[30px]">Our support team is here for you</h2>

          <button className="btn btn-primary btn-outline max-w-56 w-full font-semibold text-2xl">
            Contact us
          </button>

          <p className="text-sm font-semibold text-center leading-[20px]">For questions, complaints, or feedback</p>
        </div>

        <div className="card grow basis-0 shadow-none py-11 max-w-full flex flex-col items-center justify-center gap-8">
          <h2 className="font-semibold text-center text-2xl leading-[30px]">Follow us</h2>

          <div className="flex items-center justify-between gap-2 max-w-56 w-full">
            <a href="#" target="_blank" rel="noopener noreferrer nofollow">
              <FontAwesomeIcon icon={faWhatsapp} size="3x" className="transition-all hover:text-primary cursor-pointer" />
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer nofollow">
              <FontAwesomeIcon icon={faInstagram} size="3x" className="transition-all hover:text-primary cursor-pointer" />
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer nofollow">
              <FontAwesomeIcon icon={faFacebook} size="3x" className="transition-all hover:text-primary cursor-pointer" />
            </a>
          </div>

          <p className="text-sm font-semibold text-center leading-[20px]">Stay connected with us on social media for updates, news, and more!</p>
        </div>
      </section>
    </main>
  );
}
