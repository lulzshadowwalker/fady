'use client'

import { faInfoCircle, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { HTMLAttributes, HTMLProps, useRef } from "react"
import Plyr from "plyr-react"
import "plyr-react/plyr.css"
import { cn } from "@/lib/cn"

export function IosDownloadGuide({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDialogElement>(null)
  const playerRef = useRef<any>(null)

  function open() {
    if (ref.current) ref.current.showModal()
  }

  function handleClose() {
    playerRef.current.plyr.stop();
  }

  return (
    <>
      <div className={cn("flex items-center gap-2 text-sm text-neutral-500 mt-4 leading-[10px] cursor-pointer relative", className)} onClick={open} {...rest}>
        <div className="w-3 h-3 rounded-full bg-neutral-500/40 absolute start-0 -z-10 animate-ping duration-[4s]"></div>
        <FontAwesomeIcon icon={faInfoCircle} size="sm" />
        how to download on iOS?
      </div>

      <dialog className="modal modal-center" ref={ref} onClose={handleClose}>
        <div className="modal-box">
          <form method="dialog">
            <button className="modal-close btn">
              <FontAwesomeIcon icon={faXmark} size="lg" />
            </button>
          </form>

          <h3 className="text-lg font-bold">Ios Download Guide</h3>
          <p className="py-4">Watch video below</p>

          <Plyr ref={playerRef}
            source={{
              type: "video",
              sources: [
                {
                  src: "/videos/ad-radius.mp4",
                  provider: "html5",
                },
              ],
            }}
            options={{
              autoplay: false,
              muted: false,
            }}
          />

          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary">Got it!</button>
            </form>
          </div>

          <form method="dialog" className="modal-backdrop">
            <button></button>
          </form>
        </div>
      </dialog>
    </>
  )
}
