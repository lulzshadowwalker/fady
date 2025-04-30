'use client'

import { getStats } from '@/lib/actions/stats'
import { createContext, useContext, useEffect, useState } from 'react'
import { Stats } from '../contract/stats-repository'

type State = {
    stats?: Stats
}


const StatsContext = createContext<(State) | null>(null)

export function StatsProvider({ children }: { children: React.ReactNode }) {
    const [stats, setStats] = useState<Stats>()

    useEffect(() => {
        getStats().then(setStats)
    }, [])

    return (
        <StatsContext.Provider value={{ stats }}>
            {children}
        </StatsContext.Provider>
    )
}

export function useStats(): State {
    const context = useContext(StatsContext)

    if (!context) {
        throw new Error('useStats must be used within a StatsProvider')
    }

    return context
}
