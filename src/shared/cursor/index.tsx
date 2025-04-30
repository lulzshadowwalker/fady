'use client'

import AnimatedCursor from 'react-animated-cursor'
import { isMobile } from 'react-device-detect'

export function Cursor() {
    if (isMobile) return null

    return (
        <AnimatedCursor
            color="195,61,61"
            innerSize={8}
            outerSize={35}
            innerScale={1}
            outerScale={2}
            outerAlpha={0.4}
            innerStyle={{
                backgroundColor: '#fff',
                // mixBlendMode: 'exclusion'
            }}
        />
    )
}
