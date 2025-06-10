'use client'

import { useState } from 'react'
import GameDetailsModal from '@/components/assignor/pagecomponents/games/GameDetailsModal'
import RefereeModal from '@/components/assignor/pagecomponents/roster/RefereeModal'

export default function AssignmentsFeedPage() {
  const activityFeed = [
    {
      time: '10:15 AM',
      refereeName: 'Referee A',
      action: 'claimed',
      gameId: 'GAME-004',
      type: 'Claim',
      contract: 'U12 City League',
    },
    {
      time: '9:45 AM',
      refereeName: 'Referee B',
      action: 'canceled',
      gameId: 'GAME-003',
      type: 'Cancellation',
      contract: 'High School State Championship',
    },
    {
      time: '9:15 AM',
      refereeName: 'Referee C',
      action: 'claimed',
      gameId: 'GAME-002',
      type: 'Claim',
      contract: 'Adult Premier League',
    },
    {
      time: '8:50 AM',
      refereeName: 'Referee D',
      action: 'manually assigned Referee D to',
      gameId: 'GAME-005',
      type: 'Manual Assignment',
      contract: 'U12 City League',
    },
  ]
  const referees = [
    {
      name: 'Referee A',
      email: 'refa@example.com',
      phone: '555-123-4567',
      rank: 'Regional Referee',
      contracts: ['U12 City League', 'Adult Premier League'],
      recentActivity: [
        'Worked GAME-001 on June 8',
        'Claimed GAME-004 on June 9',
        'Canceled GAME-003 on June 7',
      ],
    },
    {
      name: 'Referee B',
      email: 'refb@example.com',
      phone: '555-987-6543',
      rank: 'National Referee',
      contracts: ['High School State Championship'],
      recentActivity: [
        'Worked GAME-002 on June 8',
        'Claimed GAME-005 on June 9',
        'Worked GAME-006 on June 7',
      ],
    },
    {
      name: 'Referee C',
      email: 'refc@example.com',
      phone: '555-555-1212',
      rank: 'Regional Referee',
      contracts: ['Adult Premier League'],
      recentActivity: [
        'Claimed GAME-002 on June 9',
        'Canceled GAME-007 on June 7',
      ],
    },
    {
      name: 'Referee D',
      email: 'refd@example.com',
      phone: '555-321-4321',
      rank: 'National Referee',
      contracts: ['U12 City League'],
      recentActivity: [
        'Manually assigned to GAME-005 on June 9',
      ],
    },
  ]

  const [activityTypeFilter, setActivityTypeFilter] = useState('All')
  const [refereeSearch, setRefereeSearch] = useState('')
  const [gameSearch, setGameSearch] = useState('')
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
    {
      id: 'GAME-005',
      date: 'June 13, 6:00 PM',
      teams: 'Harlem Knights vs Brooklyn Legends',
      coverage: 'Unassigned',
      referees: [],
      contract: 'U12 City League',
    },
  ]

  const filteredFeed = activityFeed.filter((item) => {
    const matchesContract =
      contractFilter === 'All' || item.contract === contractFilter
    const matchesType =
      activityTypeFilter === 'All' || item.type === activityTypeFilter
    const matchesReferee = item.refereeName
      .toLowerCase()
      .includes(refereeSearch.toLowerCase())
    const matchesGame = item.gameId
      .toLowerCase()
      .includes(gameSearch.toLowerCase())

    return matchesContract && matchesType && matchesReferee && matchesGame
  })

  const typeColor = (type) => {
    switch (type) {
      case 'Claim':
        return 'text-green-700'
      case 'Cancellation':
        return 'text-red-700'
      case 'Manual Assignment':
        return 'text-blue-700'
      default:
        return 'text-gray-700'
    }
  }

  const [selectedGameId, setSelectedGameId] = useState(null)
  const [selectedReferee, setSelectedReferee] = useState(null)

  return (
    <>
      <h1 className="text-3xl font-bold mb-2">Assignments Feed</h1>
      <p className="text-gray-600 mb-6">Recent referee assignment activity</p>

      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Filter by Activity Type
          </label>
          <select
            value={activityTypeFilter}
            onChange={(e) => setActivityTypeFilter(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
          >
            <option value="All">All</option>
            <option value="Claim">Claim</option>
            <option value="Cancellation">Cancellation</option>
            <option value="Manual Assignment">Manual Assignment</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Search by Referee
          </label>
          <input
            type="text"
            value={refereeSearch}
            onChange={(e) => setRefereeSearch(e.target.value)}
            placeholder="Enter referee name"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Search by Game ID
          </label>
          <input
            type="text"
            value={gameSearch}
            onChange={(e) => setGameSearch(e.target.value)}
            placeholder="Enter game ID"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
          />
        </div>
      </div>

      {[...new Set(filteredFeed.map((item) => item.contract))].map((contractName) => (
        <div key={contractName} className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">{contractName}</h2>
          <div className="space-y-2">
            {filteredFeed
              .filter((item) => item.contract === contractName)
              .map((item, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-md bg-white shadow-sm text-sm text-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <span className="font-medium">{item.time}</span> -{' '}
                    <span
                      onClick={() =>
                        setSelectedReferee(
                          referees.find((ref) => ref.name === item.refereeName) || null
                        )
                      }
                      className="font-semibold text-blue-600 cursor-pointer hover:underline"
                    >
                      {item.refereeName}
                    </span>{' '}
                    <span className={typeColor(item.type)}>{item.action}</span>{' '}
                    <span
                      onClick={() => setSelectedGameId(item.gameId)}
                      className="text-indigo-600 font-semibold cursor-pointer hover:underline"
                    >
                      {item.gameId}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}

      <GameDetailsModal
        isOpen={!!selectedGameId}
        game={games.find((g) => g.id === selectedGameId) || null}
        onClose={() => setSelectedGameId(null)}
      />

      <RefereeModal
        referee={selectedReferee}
        onClose={() => setSelectedReferee(null)}
      />
    </>
  )
}