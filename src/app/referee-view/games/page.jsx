"use client"
import { useState } from "react"
import GameCard from "@/components/referee/pagecomponents/GameCard"

  export default function AvailableGamesPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const games = [
      {
        id: 1,
        gameId: 'GAME-001',
        date: 'Sat June 8, 2:00 PM',
        location: 'Central Park Field #4',
        league: 'U-16 Girls',
        homeTeam: 'Central Park Lions',
        awayTeam: 'Riverside Hawks',
        duration: '90 min',
        status: 'Available',
        isNew: true,
        isUrgent: false,
        positionsAvailable: [
          { name: 'Center Referee', slotsRemaining: 1, fee: '$45' },
          { name: 'Assistant Referee', slotsRemaining: 2, fee: '$35' },
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
        status: 'Available',
        isNew: false,
        isUrgent: false,
        positionsAvailable: [
          { name: 'Center Referee', slotsRemaining: 1, fee: '$40' },
          { name: 'Assistant Referee', slotsRemaining: 2, fee: '$30' },
        ],
      },
      {
        id: 3,
        gameId: 'GAME-003',
        date: 'Mon June 10, 6:00 PM',
        location: 'Queens Park North',
        league: 'U-14 Boys',
        homeTeam: 'Queens Panthers',
        awayTeam: 'Bronx Warriors',
        duration: '80 min',
        status: 'Claimed',
        isNew: false,
        isUrgent: true,
        positionsAvailable: [
          { name: 'Center Referee', slotsRemaining: 0, fee: '$50' },
          { name: 'Assistant Referee', slotsRemaining: 0, fee: '$40' },
        ],
      },
      {
        id: 4,
        gameId: 'GAME-004',
        date: 'Tue June 11, 5:00 PM',
        location: 'Randall’s Island Field 7',
        league: 'U-10 Girls',
        homeTeam: 'Randall Rockets',
        awayTeam: 'Harlem Stars',
        duration: '50 min',
        status: 'Available',
        isNew: true,
        isUrgent: true,
        positionsAvailable: [
          { name: 'Center Referee', slotsRemaining: 1, fee: '$35' },
          { name: 'Assistant Referee', slotsRemaining: 2, fee: '$25' },
        ],
      },
      {
        id: 5,
        gameId: 'GAME-005',
        date: 'Wed June 12, 3:00 PM',
        location: 'Prospect Park Field 1',
        league: 'U-18 Boys',
        homeTeam: 'Prospect United',
        awayTeam: 'Staten Islanders',
        duration: '90 min',
        status: 'Full',
        isNew: false,
        isUrgent: false,
        positionsAvailable: [
          { name: 'Center Referee', slotsRemaining: 0, fee: '$55' },
          { name: 'Assistant Referee', slotsRemaining: 0, fee: '$40' },
        ],
      },
      {
        id: 6,
        gameId: 'GAME-006',
        date: 'Thu June 13, 7:00 PM',
        location: 'Van Cortlandt Park Field 2',
        league: 'U-15 Girls',
        homeTeam: 'Van Cortlandt Violets',
        awayTeam: 'Manhattan Falcons',
        duration: '80 min',
        status: 'Available',
        isNew: false,
        isUrgent: false,
        positionsAvailable: [
          { name: 'Center Referee', slotsRemaining: 1, fee: '$45' },
          { name: 'Assistant Referee', slotsRemaining: 2, fee: '$35' },
        ],
      },
      {
        id: 7,
        gameId: 'GAME-007',
        date: 'Fri June 14, 6:30 PM',
        location: 'McCarren Park Field 5',
        league: 'U-17 Boys',
        homeTeam: 'McCarren Wolves',
        awayTeam: 'Brooklyn Knights',
        duration: '90 min',
        status: 'Claimed',
        isNew: false,
        isUrgent: false,
        positionsAvailable: [
          { name: 'Center Referee', slotsRemaining: 0, fee: '$50' },
          { name: 'Assistant Referee', slotsRemaining: 1, fee: '$40' },
        ],
      },
      {
        id: 8,
        gameId: 'GAME-008',
        date: 'Sat June 15, 10:00 AM',
        location: 'Flushing Meadows Field 3',
        league: 'U-9 Coed',
        homeTeam: 'Flushing Flames',
        awayTeam: 'Queens United',
        duration: '45 min',
        status: 'Available',
        isNew: true,
        isUrgent: false,
        positionsAvailable: [
          { name: 'Center Referee', slotsRemaining: 1, fee: '$30' },
          { name: 'Assistant Referee', slotsRemaining: 2, fee: '$25' },
        ],
      },
    ]
    const filteredGames = games.filter((game) =>
      game.gameId.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
      <>
        <div className="flex flex-wrap items-end justify-between mb-6 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Available Games</h1>
            <p className="mt-2 text-gray-600">Here are the games you can claim.</p>
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
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </>
    )
  }

// TODO (post-prototype): filter out games where status is 'Claimed' or 'Full' from Available Games page
// TODO (post-prototype): Urgent Games are placed first in GameCard list
// For prototype purposes, we are leaving these visible to validate UX with team.