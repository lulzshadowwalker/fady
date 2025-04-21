import { tido } from "@/assets/fonts/tido";
import { cn } from "@/lib/cn";
import { faAppStoreIos } from "@fortawesome/free-brands-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Hero() {
  return <section className="container mx-auto mt-12 flex gap-4 justify-between">
        <div>
          <h1 className={cn(tido.className, "text-[7.1rem] font-bold leading-[125px] uppercase text-base-content")}>Welcome<br />to Fady</h1>
          <p className="text-3xl leading-[50px] font-medium">Future Youth App</p>

          <div className="grid grid-cols-2 gap-[0.65rem] max-w-fit mt-8">
            <button className="btn btn-primary flex items-center gap-2 text-lg">
              <FontAwesomeIcon icon={faAppStoreIos} size="2x" />  Download
            </button>

            <button className="btn btn-primary flex items-center gap-2 text-lg">
              <FontAwesomeIcon icon={faAppStoreIos} size="2x" />  Download
            </button>

            <button className="btn btn-primary flex items-center gap-2 text-lg">
              <FontAwesomeIcon icon={faAppStoreIos} size="2x" />  Download
            </button>

            <button className="btn btn-primary flex items-center gap-2 text-lg">
              <FontAwesomeIcon icon={faAppStoreIos} size="2x" />  Download
            </button>
          </div>

          <div className="flex items-center gap-2 text-sm text-neutral-500 mt-4 leading-[10px]">
            <FontAwesomeIcon icon={faInfoCircle} size="sm" />
            how to download on iOS?
          </div>
        </div>

        <div className="max-w-2xl bg-gray-400 animate-pulse w-full self-start aspect-square card">hui</div>
      </section>
}
