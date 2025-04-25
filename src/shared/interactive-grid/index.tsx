'use client'

import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

const BOX_SIZE = 40
const GAP = 4
const RADIUS = 280

function getRandomColor() {
    const colors = [
        'secondary',
        'base',
        'primary',
        'transparent',
        'transparent',
        'transparent',
    ]
    return colors[Math.floor(Math.random() * colors.length)]
}

export function InteractiveGrid() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [boxes, setBoxes] = useState<string[][]>([])
    const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
        x: -9999,
        y: -9999,
    })

    useEffect(() => {
        const container = containerRef.current
        if (!container) return
        const width = container.offsetWidth
        const height = container.offsetHeight
        const cols = Math.floor((width + GAP) / (BOX_SIZE + GAP))
        const rows = Math.floor((height + GAP) / (BOX_SIZE + GAP))

        const newBoxes = Array.from({ length: rows }, () =>
            Array.from({ length: cols }, () => getRandomColor())
        )
        setBoxes(newBoxes)
    }, [])

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect()
        if (!rect) return
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            <div
                className="absolute inset-0 grid"
                style={{
                    gridTemplateColumns: `repeat(auto-fit, minmax(${BOX_SIZE}px, ${BOX_SIZE}px))`,
                    gap: `${GAP}px`,
                }}
            >
                {boxes.flatMap((row, rowIndex) =>
                    row.map((color, colIndex) => {
                        const x = colIndex * (BOX_SIZE + GAP) + BOX_SIZE / 2
                        const y = rowIndex * (BOX_SIZE + GAP) + BOX_SIZE / 2
                        const dx = mousePos.x - x
                        const dy = mousePos.y - y
                        const dist = Math.sqrt(dx * dx + dy * dy)
                        const opacity = Math.max(0, 1 - dist / RADIUS)

                        return (
                            <div
                                key={`${rowIndex}-${colIndex}`}
                                className={clsx(
                                    'w-10 h-10 rounded-none transition-opacity duration-200',
                                    {
                                        'bg-secondary/70':
                                            color === 'secondary',
                                        'bg-primary/70': color === 'primary',
                                        'bg-base/70': color === 'base',
                                        'bg-transparent':
                                            color === 'transparent',
                                    }
                                )}
                                style={{ opacity }}
                            ></div>
                        )
                    })
                )}
            </div>
        </div>
    )
}
