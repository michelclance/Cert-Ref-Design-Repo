'use client'

import { useState } from 'react'

export default function RecipientSelector() {
  const allReferees = ['Referee A', 'Referee B', 'Referee C', 'Referee D', 'Referee E']
  const [recipientSearch, setRecipientSearch] = useState('')
  const [selectedRecipients, setSelectedRecipients] = useState([])

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">Recipients</label>
      <div className="relative mb-2">
        <input
          type="text"
          placeholder="Search referees..."
          value={recipientSearch}
          onChange={(e) => setRecipientSearch(e.target.value)}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm pr-8"
        />
        {recipientSearch && (
          <button
            type="button"
            onClick={() => setRecipientSearch('')}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm"
          >
            ✕
          </button>
        )}
      </div>
      {recipientSearch && (
        <div className="absolute z-10 mt-1 w-full max-h-48 overflow-y-auto rounded-md border border-gray-300 bg-white shadow-lg">
          {allReferees
            .filter((ref) => ref.toLowerCase().includes(recipientSearch.toLowerCase()) && !selectedRecipients.includes(ref))
            .map((ref) => (
              <div
                key={ref}
                onClick={() => {
                  setSelectedRecipients([...selectedRecipients, ref])
                  setRecipientSearch('')
                }}
                className="cursor-pointer px-3 py-2 hover:bg-indigo-100 text-sm text-gray-700"
              >
                {ref}
              </div>
            ))}
          {allReferees.filter((ref) => ref.toLowerCase().includes(recipientSearch.toLowerCase()) && !selectedRecipients.includes(ref)).length === 0 && (
            <div className="px-3 py-2 text-xs text-gray-400">No matching referees</div>
          )}
        </div>
      )}
      {selectedRecipients.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedRecipients.map((ref) => (
            <span
              key={ref}
              className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700"
            >
              {ref}
              <button
                type="button"
                onClick={() => setSelectedRecipients(selectedRecipients.filter((r) => r !== ref))}
                className="ml-1 text-indigo-500 hover:text-indigo-700"
              >
                ✕
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  )
}