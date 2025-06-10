'use client'

import RecipientSelector from './RecipientSelector'
import GameSelector from './GameSelector'
import MessageInput from './MessageInput'
import NotificationHistory from './NotificationHistory'

export default function NotificationForm() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Notifications</h1>
      <p className="text-gray-600 mb-6">
        Send important alerts to your referees quickly and easily.
      </p>

      <div className="bg-white rounded shadow p-6 space-y-4 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Send Push Notification</h2>
        <p className="text-sm text-gray-500 mb-4">
          Select recipients, Game (optional), and message to send a push notification.
        </p>
        
        <RecipientSelector />
        <GameSelector />
        <MessageInput />

        <div className="flex space-x-2">
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
            onClick={() => alert('Notification sent! (simulated)')}
          >
            Send Notification
          </button>
          <button
            type="button"
            className="rounded-md bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200"
            onClick={() => alert('Clearing selections (simulated)')}
          >
            Clear Selections
          </button>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Recent Notifications</h2>
        <p className="text-sm text-gray-500 mb-4">
          Log of notifications sent from this account.
        </p>
        <NotificationHistory />
      </div>
    </div>
  )
}