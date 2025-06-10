'use client'

import { useEffect, useState } from 'react'

export default function RefereeModal({ referee, onClose }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [rank, setRank] = useState('')
  const [notes, setNotes] = useState('')
  const [certificationFileName, setCertificationFileName] = useState('')
  const [certificationExpiration, setCertificationExpiration] = useState('')

  useEffect(() => {
    if (referee) {
      const nameParts = referee.name.split(' ')
      setFirstName(nameParts[0] || '')
      setLastName(nameParts[1] || '')
      setEmail(referee.email || '')
      setPhone(referee.phone || '')
      setCity(referee.city || '')
      setState(referee.state || '')
      setRank(referee.rank || '')
      setNotes(referee.notes || '')
      setCertificationFileName(referee.certificationFileName || '')
      setCertificationExpiration(referee.certificationExpiration || '')
    }
  }, [referee])

  if (!referee) return null

  const handleSave = () => {
    const updatedReferee = {
      ...referee,
      name: `${firstName} ${lastName}`,
      email,
      phone,
      city,
      state,
      rank,
      notes,
      certificationFileName,
      certificationExpiration,
    }
    console.log('Saved referee:', updatedReferee)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-2 py-6 sm:px-2">
      <div className="bg-white p-4 rounded shadow-lg w-full max-w-2xl max-h-screen overflow-y-auto relative space-y-3">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">
          Referee Profile - {firstName} {lastName}
        </h3>
        <div className="space-y-1.5 text-sm text-gray-700">
          {/* Certification Document Section */}
          <div>
            <p className="font-medium mb-1">Certification Document:</p>
            {certificationFileName ? (
              <div className="mb-2 space-y-2">
                <div className="flex items-center justify-between text-sm text-gray-700 border rounded px-3 py-2">
                  <a href="#" className="text-indigo-600 hover:underline">
                    {certificationFileName}
                  </a>
                  <button
                    type="button"
                    onClick={() => setCertificationFileName('')}
                    className="text-xs text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ) : (
              <div
                className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded px-4 py-6 text-center text-gray-500 cursor-pointer hover:border-indigo-500 hover:text-indigo-600 mb-2"
                onClick={() => setCertificationFileName('USSoccer_Certification.pdf')}
              >
                <p className="mb-1 font-medium">Drag and drop your certification here</p>
                <p className="text-sm">or click to upload</p>
              </div>
            )}
            <div className="mt-2">
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Expiration Date
              </label>
              <input
                type="date"
                value={certificationExpiration}
                onChange={(e) => setCertificationExpiration(e.target.value)}
                className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
              />
            </div>
          </div>
          {/* End Certification Document Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                First Name
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Last Name
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Phone
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                City
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                State
              </label>
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Rank
              </label>
              <select
                value={rank}
                onChange={(e) => setRank(e.target.value)}
                className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
              >
                <option value="National Referee">National Referee</option>
                <option value="Regional Referee">Regional Referee</option>
                <option value="Local Referee">Local Referee</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Contracts
            </label>
            <p className="text-sm text-gray-700">
              {referee.contracts.join(', ')}
            </p>
          </div>
          <div>
            <p className="font-medium mb-1">Recent Activity:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {referee.recentActivity.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Notes
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
              rows={3}
            />
          </div>
        </div>
        <div className="flex justify-end space-x-2 pt-4">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500"
          >
            Save Changes
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}