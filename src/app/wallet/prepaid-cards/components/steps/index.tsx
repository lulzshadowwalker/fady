import background from "@/assets/logo-background.png";
import Image from "next/image";

const steps = [
  'Buy a card',
  'Open the app',
  'Enter the code',
  'Done!',
];

export function Steps() {
  return (
    <section className="min-h-screen container mx-auto relative pt-12">
      <Image src={background} alt="" fill className="-z-50" />

      <h1 className="uppercase font-semibold text-center max-w-[740px] mx-auto leading-[90px] text-[5.3rem] mb-8 max-lg:text-4xl max-lg:mb-2">Charge Your Wallet</h1>
      <p className="max-w-prose text-center text-[2rem] font-medium leading-12 mx-auto max-lg:text-3xl">
        Use prepaid recharge cards to top up your wallet easily
      </p>

      <ul className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 mt-26 px-4">
        {
          steps.map((step, index) => (
            <li className="card basis-0 grow max-w-full flex flex-col items-center justify-center gap-4 min-w-fit" key={index}>
              <span className="font-semibold text-[3rem] leading-9 text-center">{index + 1}</span>
              <span className="text-[1.375rem] leading-9 text-center"> {step}</span>
            </li>
          ))
        }
      </ul>
    </section>
  )
}
