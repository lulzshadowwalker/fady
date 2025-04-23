import { faPlay, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Guide() {
  return <section className="bg-primary text-primary-content my-12 max-lg:my-6">
    <div className="container mx-auto flex flex-col items-center justify-stretch gap-34 max-lg:gap-12 py-12">
      <div className="flex items-center justify-between gap-4 max-w-223 w-full px-4">
        <FontAwesomeIcon icon={faPlay} size="3x" className="max-lg:!text-4xl" />
        <h2 className="font-semibold text-[3rem] leading-9 text-center max-lg:text-2xl">Watch how to charge your wallet</h2>
        <FontAwesomeIcon icon={faWallet} size="3x" className="max-lg:!text-4xl" />
      </div>

      <button className="btn btn-outline btn-primary-content max-w-68 w-full py-5 font-bold text-[1.5rem] max-lg:text-[1rem] max-lg:py-3">Play video</button>
    </div>
  </section>
}
