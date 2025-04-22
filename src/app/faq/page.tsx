import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const faqs = [
    { question: 'How to download the App?', answer: 'Download the app from the App Store or Google Play Store.' },
    {
        question: 'How do I charge my wallet?',
        answer: 'You can top up your wallet using prepaid cards. Simply buy a card, enter the code in the app, and the amount will be added to your wallet.'
    },
    {
        question: 'Where can I buy a recharge card?',
        answer: 'Recharge cards are available at most convenience stores and online.'
    },
    {
        question: 'What if my recharged card doesn\'t work?',
        answer: 'If your recharge card doesn\'t work, please contact customer support with your card details.'
    }
] as const

export default function Faq() {
    return (
        <main className="min-h-screen bg-secondary text-secondary-content">
            <div className="container mx-auto pt-12 pb-30">
                <h1 className="max-w-prose text-center font-semibold leading-22 text-[5.3rem] mb-12 mx-auto max-lg:text-4xl max-lg:mb-0">FAQ’s</h1>
                <p className="max-w-prose text-center text-[2rem] font-medium leading-12 mx-auto max-lg:text-3xl">Frequently Asked
                    Questions</p>
                <div className="mt-12">
                    {faqs.map(({ question, answer }, index) => (
                        <details name="faq" key={index}
                                 className="border-t border-b border-secondary-content px-4 py-7">
                            <summary
                                className="max-w-280 mx-auto font-semibold text-[1.75rem] leading-12 flex items-center justify-between outline-none max-lg:text-2xl">
                                {question}
                                <FontAwesomeIcon icon={faAngleDown} className="icon" />
                            </summary>
                            <div
                                className="text-2xl font-medium leading-7 text-start text-secondary bg-secondary-content rounded-[5px] py-9 mt-6 mb-12 max-lg:px-4 max-lg:text-xl">
                                <div className="max-w-280 mx-auto">
                                    {answer}
                                </div>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </main>
    )
}