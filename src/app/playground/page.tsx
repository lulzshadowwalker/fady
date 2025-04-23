'use client'

import { useStats } from "@/lib/context/stats-context"
import { InteractiveGrid } from "@/shared/interactive-grid";
import React from 'react';


export default function Playground() {
  const { stats } = useStats();
  console.log(stats);

  const variants = [
    'primary',
    'primary-content',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
  ]

  return (
    <main className="min-h-screen p-8 bg-gray-200 space-y-8">
      <h1 className="text-2xl font-bold mb-4">Button Playground</h1>

      {variants.map((variant) => (
        <div key={variant}>
          <h2 className="text-lg font-semibold capitalize mb-2">
            {variant} buttons
          </h2>
          <div className="flex flex-wrap gap-4">
            <button
              className={`btn btn-${variant}`}
              onClick={() => console.log('Clicked')}
            >
              .btn .btn-{variant}
            </button>
            <button
              className={`btn btn-outline btn-${variant}`}
              onClick={() => console.log('Clicked')}
            >
              .btn .btn-outline .btn-{variant}
            </button>
          </div>
        </div>
      ))}

      <h1 className="text-2xl font-bold mb-4">Boxes Grid</h1>
      <div className="min-h-screen relative">
        <InteractiveGrid />
      </div>
    </main>
  )
}

