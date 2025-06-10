"use client"
import { useState } from 'react'
import GameCard from '@/components/referee/pagecomponents/GameCard'

export default function ClaimedGamesPage() {
  const claimedGames = [
    {
      id: 1,
      gameId: 'GAME-001',
      date: 'Sat June 8, 2:00 PM',
      location: 'Central Park Field #4',
      league: 'U-16 Girls',
      homeTeam: 'Central Park Lions',
      awayTeam: 'Riverside Hawks',
      duration: '90 min',
      claimedPosition: 'Center Referee',
      fee: '$45',
      referees: [
        { name: 'Alex Johnson', role: 'Assistant Referee', phone: '555-123-4567' },
        { name: 'Maria Gomez', role: 'Assistant Referee', phone: '555-987-6543' },
      ],
    },
    {
      id: 2,
      gameId: 'GAME-002',
      date: 'Sun June 9, 4:00 PM',
      location: 'Brooklyn Tech Field',
      league: 'U-12 Boys',
      homeTeam: 'Brooklyn Bulldogs',
      awayTeam: 'Queens Kings',
      duration: '60 min',
      claimedPosition: 'Assistant Referee',
      fee: '$30',
      referees: [
        { name: 'John Smith', role: 'Center Referee', phone: '555-321-6789' },
        { name: 'Emily Chen', role: 'Assistant Referee', phone: '555-654-9870' },
      ],
    },
    {
      id: 3,
      gameId: 'GAME-003',
      date: 'Tue June 11, 5:00 PM',
      location: 'Randall’s Island Field 7',
      league: 'U-10 Girls',
      homeTeam: 'Randall Rockets',
      awayTeam: 'Harlem Stars',
      duration: '50 min',
      claimedPosition: 'Center Referee',
      fee: '$35',
      referees: [
        { name: 'Liam Patel', role: 'Assistant Referee', phone: '555-789-1234' },
        { name: 'Sophia Martinez', role: 'Assistant Referee', phone: '555-852-9630' },
      ],
    },
  ]

  const [searchTerm, setSearchTerm] = useState("")

  const filteredGames = claimedGames.filter((game) =>
    game.gameId.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <div className="flex flex-wrap items-end justify-between mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Claimed Games</h1>
          <p className="mt-2 text-gray-600">Here are the games you claimed.</p>
        </div>
        <div>
          <input
            type="search"
            placeholder="Search by Game ID"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-64 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredGames.map((game) => (
          <GameCard key={game.id} game={game} variant="claimed" />
        ))}
      </div>
    </>
  )
}

// TODO add contact info for other refs Claimed games variant