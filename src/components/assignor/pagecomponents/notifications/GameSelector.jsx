

'use client'

import { useState } from 'react'

export default function GameSelector() {
  const gameIds = ['GAME-001', 'GAME-002', 'GAME-003', 'GAME-004', 'GAME-005']
  const [selectedGameId, setSelectedGameId] = useState('')

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Game ID (optional)</label>
      <select
        value={selectedGameId}
        onChange={(e) => setSelectedGameId(e.target.value)}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
      >
        <option value="">Select a game</option>
        {gameIds.map((id) => (
          <option key={id} value={id}>
            {id}
          </option>
        ))}
      </select>
    </div>
  )
}