import Image from 'next/image'
import logo from '@/assets/logo.png'

export function Header() {
    return (
        <header className="bg-base text-base-content py-5">
            <nav className="container mx-auto">
                <ul className="flex items-center gap-6">
                    <li className="me-auto">
                        <Image src={logo} alt="fady logo" width={118} />
                    </li>

                    <li className="animate-underline">Contact</li>
                    <li className="animate-underline">Support</li>
                    <li className="animate-underline">About Us</li>
                    <li className="animate-underline">Wallet</li>

                    <li>
                        <button className="btn btn-outline btn-primary">
                            Download
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
