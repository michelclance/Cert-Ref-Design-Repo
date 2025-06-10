'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import GameDetailsModal from '@/components/assignor/pagecomponents/games/GameDetailsModal'

export default function GamesPage() {
  const searchParams = useSearchParams()
  const filter = searchParams.get('filter')
  const viewLabel = filter === 'unassigned' ? 'Unassigned Games' : 'All Games'

  const [contractFilter, setContractFilter] = useState('All')

  const games = [
    {
      id: 'GAME-001',
      date: 'June 9, 2:00 PM',
      teams: 'Central Park Lions vs Riverside Hawks',
      coverage: 'Full',
      referees: ['Referee A (Center)', 'Referee B (AR1)', 'Referee C (AR2)'],
      contract: 'U12 City League',
    },
    {
      id: 'GAME-002',
      date: 'June 10, 4:00 PM',
      teams: 'Brooklyn Bulldogs vs Queens Kings',
      coverage: 'Partial',
      referees: ['Referee D (Center)', 'Referee E (AR1)'],
      contract: 'High School State Championship',
    },
    {
      id: 'GAME-003',
      date: 'June 11, 5:00 PM',
      teams: 'Queens United vs Manhattan Warriors',
      coverage: 'Unassigned',
      referees: [],
      contract: 'Adult Premier League',
    },
    {
      id: 'GAME-004',
      date: 'June 12, 3:00 PM',
      teams: 'Bronx Strikers vs Staten Islanders',
      coverage: 'Unassigned',
      referees: [],
      contract: 'U12 City League',
    },
  ]

  const [searchQuery, setSearchQuery] = useState('')

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedGame, setSelectedGame] = useState(null)

  const handleGameCardClick = (game) => {
    setSelectedGame(game)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedGame(null)
  }

  const filteredGames = games
    .filter(
      (game) =>
        contractFilter === 'All' || game.contract === contractFilter
    )
    .filter((game) =>
      filter === 'unassigned' ? game.coverage === 'Unassigned' : true
    )
    .filter((game) =>
      game.id.toLowerCase().includes(searchQuery.toLowerCase())
    )

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-1">Games</h1>
          <p className="text-gray-600">Viewing: {viewLabel}</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end sm:space-x-4 mb-6">
        <div className="w-full sm:w-1/3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Filter by Contract
          </label>
          <select
            value={contractFilter}
            onChange={(e) => setContractFilter(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="All">All</option>
            <option value="U12 City League">U12 City League</option>
            <option value="High School State Championship">High School State Championship</option>
            <option value="Adult Premier League">Adult Premier League</option>
          </select>
        </div>

        <div className="w-full sm:w-1/3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Search by Game ID
          </label>
          <input
            type="text"
            placeholder="Search by Game ID"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredGames.map((game) => (
          <div
            key={game.id}
            onClick={() => handleGameCardClick(game)}
            className="cursor-pointer p-4 border rounded-md bg-white shadow-sm flex flex-col justify-between h-full hover:bg-gray-50 transition"
          >
            <p className="text-sm text-gray-600 font-medium">{game.id}</p>
            <p className="text-sm text-gray-600">{game.date}</p>
            <p className="text-sm text-gray-600">{game.teams}</p>
            <p
              className={`text-sm font-medium ${
                game.coverage === 'Full'
                  ? 'text-green-700'
                  : game.coverage === 'Partial'
                  ? 'text-yellow-700'
                  : 'text-red-700'
              }`}
            >
              Coverage: {game.coverage}
            </p>
            <div className="mt-2">
              <p className="text-xs text-gray-500 mb-1">Assigned Referees:</p>
              {game.referees.length > 0 ? (
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {game.referees.map((ref, index) => (
                    <li key={index}>{ref}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">No referees assigned</p>
              )}
            </div>
            <div className="mt-auto pt-4">
              <button
                type="button"
                className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
              >
                Assign Referees
              </button>
            </div>
          </div>
        ))}
      </div>

      <GameDetailsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        game={selectedGame}
      />
    </>
  )
}