'use client'

import { useEffect, useState } from 'react'

const SECRET = process.env.NEXT_PUBLIC_EASTER_EGG_KEY || ''
const MAX_LENGTH = SECRET.length

export default function EasterEggTrigger() {
    const [buffer, setBuffer] = useState('')
    const [matches, setMatches] = useState(0)
    const [Component, setComponent] = useState<React.FC | null>(null)

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (!SECRET || Component) return

            const next = (buffer + e.key).slice(-MAX_LENGTH)
            if (next === SECRET) {
                const m = matches + 1
                setMatches(m)
                setBuffer('')
                if (m >= 3) {
                    // 🎉 dynamically import the heavy EasterEgg component
                    import('@/shared/easter-egg')
                        .then((mod) => setComponent(() => mod.default))
                        .catch(console.error)
                }
            } else {
                setBuffer(next)
            }
        }

        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [buffer, matches, Component])

    // once loaded, render it
    return Component ? <Component /> : null
}
