"use client"
import { useState } from 'react'
import RefereeModal from '@/components/assignor/pagecomponents/roster/RefereeModal'

export default function RosterPage() {
  const ranks = ['All', 'National Referee', 'Regional Referee']
  const contracts = ['All', 'U12 City League', 'High School State Championship', 'Adult Premier League']

  const [nameFilter, setNameFilter] = useState('')
  const [rankFilter, setRankFilter] = useState('All')
  const [contractFilter, setContractFilter] = useState('All')
  const [selectedReferee, setSelectedReferee] = useState(null)


  const referees = [
    {
      name: 'Jane Cooper',
      email: 'janecooper@example.com',
      phone: '+1-202-555-0170',
      rank: 'Regional Referee',
      contracts: ['U12 City League', 'Adult Premier League'],
      recentActivity: [
        'Worked GAME-001 on June 8',
        'Claimed GAME-004 on June 9',
        'Canceled GAME-003 on June 7',
      ],
      certificationFileName: '',
      certificationExpiration: '',
    },
    {
      name: 'John Smith',
      email: 'johnsmith@example.com',
      phone: '+1-202-555-0123',
      rank: 'National Referee',
      contracts: ['High School State Championship'],
      recentActivity: [
        'Worked GAME-002 on June 8',
        'Claimed GAME-005 on June 9',
        'Worked GAME-006 on June 7',
      ],
      certificationFileName: '',
      certificationExpiration: '',
    },
  ]

  const filteredReferees = referees.filter((ref) => {
    const matchesName = ref.name.toLowerCase().includes(nameFilter.toLowerCase())
    const matchesRank = rankFilter === 'All' || ref.rank === rankFilter
    const matchesContract =
      contractFilter === 'All' || ref.contracts.includes(contractFilter)

    return matchesName && matchesRank && matchesContract
  })

  return (
    <>
      <h1 className="text-3xl font-bold mb-2">Roster</h1>
      <p className="text-gray-600 mb-6">Manage your active referees</p>

      <div className="flex flex-col sm:flex-row sm:items-end sm:space-x-4 mb-6">
        <div className="w-full sm:w-1/3">
          <label className="block text-sm font-medium text-gray-700 mb-1">Search by Name</label>
          <input
            type="text"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
            placeholder="Enter referee name"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div className="w-full sm:w-1/4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Rank</label>
          <select
            value={rankFilter}
            onChange={(e) => setRankFilter(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            {ranks.map((rank) => (
              <option key={rank} value={rank}>{rank}</option>
            ))}
          </select>
        </div>
        <div className="w-full sm:w-1/4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Contract</label>
          <select
            value={contractFilter}
            onChange={(e) => setContractFilter(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            {contracts.map((contract) => (
              <option key={contract} value={contract}>{contract}</option>
            ))}
          </select>
        </div>
        <div className="w-full sm:w-auto mt-4 sm:mt-0">
          <button
            type="button"
            className="w-full sm:w-auto px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded shadow-sm hover:bg-indigo-500"
          >
            Add Referee
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredReferees.map((ref, index) => (
          <div
            key={index}
            className="p-4 border rounded-md bg-white shadow-sm space-y-2"
          >
            <p
              className="text-sm text-indigo-600 font-semibold cursor-pointer hover:underline"
              onClick={() => setSelectedReferee(ref)}
            >
              Referee Name: {ref.name}
            </p>
            <p className="text-sm text-gray-600">Email: {ref.email}</p>
            <p className="text-sm text-gray-600">Phone: {ref.phone}</p>
            <p className="text-sm text-gray-600">Rank: {ref.rank}</p>
            <p className="text-sm text-gray-600">Contracts: {ref.contracts.join(', ')}</p>
            <div className="mt-2">
              <p className="text-xs text-gray-500 mb-1">Recent Activity:</p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {ref.recentActivity.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <RefereeModal
        referee={selectedReferee}
        onClose={() => setSelectedReferee(null)}
      />
    </>
  )
}