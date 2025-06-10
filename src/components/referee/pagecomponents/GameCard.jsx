import { useState } from 'react'

export default function GameCard({ game, variant = 'available' }) {
  const isClaimedOrFull = game.status === 'Claimed' || game.status === 'Full'
  const statusLabel = game.status || 'Available'

  const [selectedPosition, setSelectedPosition] = useState('')
  const [showPositionOptions, setShowPositionOptions] = useState(false)

  if (variant === 'claimed') {
    return (
      <li
        key={game.id}
        className="col-span-1 flex flex-col justify-between divide-y divide-gray-200 rounded-lg bg-white shadow-sm ring-1 ring-gray-200 relative"
      >
        <div className="flex flex-1 flex-col p-4 text-left">
          {/* Claimed badge */}
          <div className="absolute top-2 right-2 flex space-x-1">
            <span className="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800 ring-1 ring-inset ring-gray-300">
              Claimed
            </span>
          </div>

          <h3 className="text-lg font-semibold text-gray-900">{game.date}</h3>
          <p className="text-sm text-gray-500">Game ID: {game.gameId}</p>
          <p className="mt-1 text-sm text-gray-600">
            {game.location}
          </p>

          <div className="mt-2 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-600/20">
              {game.league}
            </span>
            <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800 ring-1 ring-gray-300">
              {game.homeTeam} vs {game.awayTeam}
            </span>
          </div>

          <p className="mt-2 text-sm text-gray-600">Duration: {game.duration}</p>

          <p className="mt-4 text-sm text-gray-600">
            Position: <span className="font-medium text-gray-800">{game.claimedPosition}</span>
          </p>

          <p className="mt-4 text-xl font-bold text-green-600">{game.fee}</p>

          {/* Directions Button */}
          <div className="mt-4">
            <button
              type="button"
              onClick={() => console.log(`Opening directions for game ${game.id}`)}
              className="w-full rounded-md border border-indigo-600 bg-white px-4 py-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-50"
              aria-label={`Get directions to game ${game.id}`}
            >
              Directions
            </button>
          </div>

          {game.referees && game.referees.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Assigned Referees:</h4>
              <ul className="space-y-2">
                {game.referees.map((ref, index) => (
                  <li key={index} className="flex items-center justify-between rounded-md border px-3 py-2 text-sm text-gray-700 bg-gray-50">
                    <span>{ref.name} — {ref.role}</span>
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={() => console.log(`Messaging ${ref.name}`)}
                        className="text-indigo-600 hover:text-indigo-800"
                        aria-label={`Message ${ref.name}`}
                      >
                        💬
                      </button>
                      <button
                        type="button"
                        onClick={() => console.log(`Calling ${ref.name} at ${ref.phone}`)}
                        className="text-indigo-600 hover:text-indigo-800"
                        aria-label={`Call ${ref.name}`}
                      >
                        📞
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </li>
    )
  }

  // Default "available" variant layout
  return (
    <li
      key={game.id}
      className="col-span-1 flex flex-col justify-between divide-y divide-gray-200 rounded-lg bg-white shadow-sm ring-1 ring-gray-200 relative"
    >
      <div className="flex flex-1 flex-col p-4 text-left">
        {/* Status badges */}
        <div className="absolute top-2 right-2 flex space-x-1">
          {isClaimedOrFull && (
            <span className="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800 ring-1 ring-inset ring-gray-300">
              {statusLabel}
            </span>
          )}
          {game.isNew && (
            <span className="inline-flex items-center rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 ring-1 ring-inset ring-green-300">
              New
            </span>
          )}
          {game.isUrgent && (
            <span className="inline-flex items-center rounded bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800 ring-1 ring-inset ring-red-300">
              Urgent
            </span>
          )}
        </div>

        {/* Primary Info */}
        <h3 className="text-lg font-semibold text-gray-900">{game.date}</h3>
        <p className="text-xs text-gray-500 mb-2">Game ID: {game.gameId}</p>

        <p className="text-md font-medium text-gray-800 mb-1">
          {game.homeTeam} <span className="text-gray-500">vs</span> {game.awayTeam}
        </p>

        <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-600/20 mb-3">
          {game.league}
        </span>

        {/* Location + Directions */}
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm text-gray-600">{game.location}</p>
          <button
            type="button"
            onClick={() => console.log(`Opening directions for game ${game.id}`)}
            className="text-indigo-600 text-xs underline hover:text-indigo-800"
            aria-label={`Get directions to game ${game.id}`}
          >
            Directions
          </button>
        </div>

        {/* Duration + Slots */}
        <div className="flex justify-between text-sm text-gray-600 mb-4">
          <p>Duration: {game.duration}</p>
          <p>
            Slots Remaining:{' '}
            {game.positionsAvailable.reduce(
              (total, p) => total + p.slotsRemaining,
              0
            )}
          </p>
        </div>

        {/* Select Position */}
        <div className="mb-4">
          {!showPositionOptions ? (
            <button
              type="button"
              onClick={() => setShowPositionOptions(true)}
              className="w-full rounded-md border border-indigo-600 bg-white px-4 py-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-50"
            >
              Select Position
            </button>
          ) : (
            <div className="flex flex-col gap-2 mt-2">
              {game.positionsAvailable.map((position) => (
                <label key={position.name} className="flex items-center text-sm text-gray-600">
                  <input
                    type="radio"
                    name={`position-${game.id}`}
                    value={position.name}
                    checked={selectedPosition === position.name}
                    onChange={() => setSelectedPosition(position.name)}
                    className="mr-2"
                  />
                  {position.name} — {position.fee} — {position.slotsRemaining} slot(s) remaining
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Claim Game */}
        <div>
          <button
            type="button"
            disabled={isClaimedOrFull || !selectedPosition}
            className={`w-full rounded-md px-4 py-2 text-sm font-semibold ${
              isClaimedOrFull || !selectedPosition
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            } transition`}
            aria-label={`Claim game ${game.id}`}
            onClick={() =>
              console.log(`Claiming game ${game.id} as ${selectedPosition}`)
            }
          >
            {isClaimedOrFull
              ? 'Unavailable'
              : !selectedPosition
              ? 'Select Position to Claim'
              : 'Claim Game'}
          </button>
        </div>
      </div>
    </li>
  )
}
