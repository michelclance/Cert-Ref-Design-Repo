'use client'

import { useState } from 'react'

export default function GameDetailsModal({ isOpen, onClose, game }) {
  if (!isOpen || !game) return null

  const [isEditMode, setIsEditMode] = useState(false)
  const [isAssignMode, setIsAssignMode] = useState(false)
  const [formData, setFormData] = useState({
    date: game.date,
    teams: game.teams,
    coverage: game.coverage,
    notes: '',
    isUrgent: false,
  })
  const [assignedRefs, setAssignedRefs] = useState({
    center: '',
    ar1: '',
    ar2: '',
  })
  // Referee search state for filtering each dropdown
  const [refSearch, setRefSearch] = useState({
    center: '',
    ar1: '',
    ar2: '',
  })
  const [activeSearch, setActiveSearch] = useState(null)

  // List of all available referees
  const allReferees = [
    'Referee A',
    'Referee B',
    'Referee C',
    'Referee D',
    'Referee E',
    'Referee F',
  ]

  // Handler for search input changes
  const handleSearchChange = (e) => {
    const { name, value } = e.target
    setRefSearch((prev) => ({ ...prev, [name]: value }))
    setActiveSearch(name)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleAssignChange = (e) => {
    const { name, value } = e.target
    setAssignedRefs((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    console.log('Saved data:', formData)
    setIsEditMode(false)
  }

  const handleAssignSave = () => {
    console.log('Assigned referees:', assignedRefs)
    setIsAssignMode(false)
  }

  const handleCancelEdit = () => {
    setIsEditMode(false)
    setFormData({
      date: game.date,
      teams: game.teams,
      coverage: game.coverage,
      notes: '',
      isUrgent: false,
    })
  }

  const handleCancelAssign = () => {
    setIsAssignMode(false)
    setAssignedRefs({
      center: '',
      ar1: '',
      ar2: '',
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 py-6 sm:px-0">
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl p-6 space-y-4 overflow-y-auto max-h-full">
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-xl font-semibold text-gray-900">Game Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-sm"
          >
            Close
          </button>
        </div>

        <div className="space-y-2">
          {isAssignMode ? (
            <>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Assign Referees</h3>

              {/* Center Referee search and assignment */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Center Referee</label>
                <input
                  type="text"
                  name="center"
                  value={refSearch.center}
                  onChange={handleSearchChange}
                  onBlur={() => setActiveSearch(null)}
                  placeholder="Search referee..."
                  className="block w-full mb-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                />
                {refSearch.center && activeSearch === 'center' && (
                  <ul className="border rounded-md bg-white shadow-sm max-h-40 overflow-y-auto text-sm text-gray-700">
                    {allReferees
                      .filter((ref) =>
                        ref.toLowerCase().includes(refSearch.center.toLowerCase())
                      )
                      .map((ref, index) => (
                        <li
                          key={index}
                          onClick={() => {
                            setAssignedRefs((prev) => ({ ...prev, center: ref }))
                            setRefSearch((prev) => ({ ...prev, center: '' }))
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {ref}
                        </li>
                      ))}
                  </ul>
                )}
                {assignedRefs.center && (
                  <p className="mt-1 text-sm text-gray-600">Assigned: {assignedRefs.center}</p>
                )}
              </div>

              {/* Assistant Referee 1 (AR1) search and assignment */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Assistant Referee 1 (AR1)</label>
                <input
                  type="text"
                  name="ar1"
                  value={refSearch.ar1}
                  onChange={handleSearchChange}
                  onBlur={() => setActiveSearch(null)}
                  placeholder="Search referee..."
                  className="block w-full mb-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                />
                {refSearch.ar1 && activeSearch === 'ar1' && (
                  <ul className="border rounded-md bg-white shadow-sm max-h-40 overflow-y-auto text-sm text-gray-700">
                    {allReferees
                      .filter((ref) =>
                        ref.toLowerCase().includes(refSearch.ar1.toLowerCase())
                      )
                      .map((ref, index) => (
                        <li
                          key={index}
                          onClick={() => {
                            setAssignedRefs((prev) => ({ ...prev, ar1: ref }))
                            setRefSearch((prev) => ({ ...prev, ar1: '' }))
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {ref}
                        </li>
                      ))}
                  </ul>
                )}
                {assignedRefs.ar1 && (
                  <p className="mt-1 text-sm text-gray-600">Assigned: {assignedRefs.ar1}</p>
                )}
              </div>

              {/* Assistant Referee 2 (AR2) search and assignment */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Assistant Referee 2 (AR2)</label>
                <input
                  type="text"
                  name="ar2"
                  value={refSearch.ar2}
                  onChange={handleSearchChange}
                  onBlur={() => setActiveSearch(null)}
                  placeholder="Search referee..."
                  className="block w-full mb-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                />
                {refSearch.ar2 && activeSearch === 'ar2' && (
                  <ul className="border rounded-md bg-white shadow-sm max-h-40 overflow-y-auto text-sm text-gray-700">
                    {allReferees
                      .filter((ref) =>
                        ref.toLowerCase().includes(refSearch.ar2.toLowerCase())
                      )
                      .map((ref, index) => (
                        <li
                          key={index}
                          onClick={() => {
                            setAssignedRefs((prev) => ({ ...prev, ar2: ref }))
                            setRefSearch((prev) => ({ ...prev, ar2: '' }))
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {ref}
                        </li>
                      ))}
                  </ul>
                )}
                {assignedRefs.ar2 && (
                  <p className="mt-1 text-sm text-gray-600">Assigned: {assignedRefs.ar2}</p>
                )}
              </div>

              <div className="flex space-x-2 mt-4">
                <button
                  type="button"
                  onClick={handleAssignSave}
                  className="flex-1 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleCancelAssign}
                  className="flex-1 rounded-md bg-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : isEditMode ? (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date/Time</label>
                <input
                  type="text"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Teams</label>
                <input
                  type="text"
                  name="teams"
                  value={formData.teams}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Coverage</label>
                <select
                  name="coverage"
                  value={formData.coverage}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                >
                  <option value="Full">Full</option>
                  <option value="Partial">Partial</option>
                  <option value="Unassigned">Unassigned</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows="3"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                />
              </div>

              <div className="flex items-center space-x-2 mt-2">
                <input
                  type="checkbox"
                  name="isUrgent"
                  checked={formData.isUrgent}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, isUrgent: e.target.checked }))
                  }
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label className="text-sm text-gray-700">Mark as Urgent</label>
              </div>

              <div className="flex space-x-2 mt-4">
                <button
                  type="button"
                  onClick={handleSave}
                  className="flex-1 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="flex-1 rounded-md bg-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="text-sm text-gray-600 font-medium">
                Game ID: {game.id}
              </p>
              <p className="text-sm text-gray-600">Date/Time: {game.date}</p>
              <p className="text-sm text-gray-600">Teams: {game.teams}</p>
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
              {formData.isUrgent && (
                <span className="inline-block bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded mb-2">
                  Urgent
                </span>
              )}

              <div>
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

              <div className="mt-4 space-y-2">
                <button
                  type="button"
                  onClick={() => setIsEditMode(true)}
                  className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
                >
                  Edit Game Details
                </button>
                <button
                  type="button"
                  onClick={() => setIsAssignMode(true)}
                  className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
                >
                  Assign Referees
                </button>
                <button
                  type="button"
                  className="w-full rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500"
                >
                  Cancel Game
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}