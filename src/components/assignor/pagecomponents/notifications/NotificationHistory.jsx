'use client'

import { useState } from 'react'
import NotificationDetailsModal from './NotificationDetailsModal'

export default function NotificationHistory() {
  const recentNotifications = [
    {
      recipients: ['Referee A', 'Referee B'],
      gameId: 'GAME-001',
      message: 'Reminder: Game starts at 3 PM.',
      timestamp: 'June 8, 2025, 9:30 AM',
      sentBy: 'John Assignor',
    },
    {
      recipients: ['Referee C'],
      gameId: '',
      message: 'All games for today are cancelled due to weather.',
      timestamp: 'June 7, 2025, 6:00 AM',
      sentBy: 'John Assignor',
    },
    {
      recipients: ['Referee D', 'Referee E'],
      gameId: 'GAME-004',
      message: 'Urgent: Location has changed to Field 5.',
      timestamp: 'June 6, 2025, 2:15 PM',
      sentBy: 'John Assignor',
    },
    {
      recipients: ['Referee F'],
      gameId: 'GAME-007',
      message: 'Reminder to bring referee badge.',
      timestamp: 'June 5, 2025, 8:00 AM',
      sentBy: 'John Assignor',
    },
    {
      recipients: ['Referee G', 'Referee H'],
      gameId: 'GAME-010',
      message: 'Important tournament briefing attached.',
      timestamp: 'June 4, 2025, 3:45 PM',
      sentBy: 'John Assignor',
    },
    {
      recipients: ['Referee I'],
      gameId: '',
      message: 'Uniform update: New jerseys required starting next week.',
      timestamp: 'June 3, 2025, 1:15 PM',
      sentBy: 'John Assignor',
    },
    {
      recipients: ['Referee J', 'Referee K'],
      gameId: 'GAME-012',
      message: 'Field parking update for this weekend.',
      timestamp: 'June 2, 2025, 9:00 AM',
      sentBy: 'John Assignor',
    },
    {
      recipients: ['Referee L'],
      gameId: 'GAME-015',
      message: 'Schedule confirmation for next month.',
      timestamp: 'June 1, 2025, 10:30 AM',
      sentBy: 'John Assignor',
    }
  ]

  const [selectedNotification, setSelectedNotification] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  // Full history is now inline: showFullHistory toggles between 5 or all
  const [showFullHistory, setShowFullHistory] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleViewDetails = (notification) => {
    setSelectedNotification(notification)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setSelectedNotification(null)
    setIsModalOpen(false)
  }

  const handleToggleFullHistory = () => {
    setShowFullHistory(!showFullHistory)
  }

  // Filtering and display logic
  const lowerSearch = searchQuery.toLowerCase()
  const filteredNotifications = [...recentNotifications]
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    .filter((n) => {
      const recipientMatch = n.recipients.some((r) =>
        r.toLowerCase().includes(lowerSearch)
      )
      const messageMatch = n.message.toLowerCase().includes(lowerSearch)
      return recipientMatch || messageMatch
    })
  const notificationsToDisplay = showFullHistory
    ? filteredNotifications
    : filteredNotifications.slice(0, 5)

  return (
    <div className="mt-10">
      {recentNotifications.length === 0 ? (
        <div className="text-sm text-gray-500 italic">
          No notifications sent yet.
        </div>
      ) : (
        <>
          {recentNotifications.length > 0 && (
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="relative w-full sm:w-1/2">
                <input
                  type="text"
                  placeholder="Search by referee name or message..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full rounded-md border-gray-400 shadow-md focus:border-indigo-500 focus:ring-indigo-500 text-base px-4 py-2 pr-10"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-base"
                  >
                    ✕
                  </button>
                )}
              </div>
              {recentNotifications.length > 5 && (
                <button
                  type="button"
                  onClick={handleToggleFullHistory}
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-1 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                >
                  {showFullHistory ? 'Collapse History' : 'View Full History'}
                </button>
              )}
            </div>
          )}
          <ul className="space-y-4 px-1 sm:px-2">
            {notificationsToDisplay.length > 0 ? (
              notificationsToDisplay.map((notification, idx) => (
                <li
                  key={idx}
                  className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm py-6"
                >
                  <div className="flex justify-between items-center mb-1">
                    <div className="text-xs text-gray-400">{notification.timestamp}</div>
                    <div>
                      <button
                        type="button"
                        onClick={() =>
                          alert(`Resending notification to: ${notification.recipients.join(', ')}`)
                        }
                        className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-2 py-1 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                      >
                        Resend
                      </button>
                      <button
                        type="button"
                        onClick={() => handleViewDetails(notification)}
                        className="ml-2 inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-2 py-1 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mb-3">
                    <span className="font-medium">Recipients:</span> {notification.recipients.join(', ')}
                    {notification.gameId && (
                      <>
                        {' · '}
                        <span className="font-medium">Game ID:</span> {notification.gameId}
                      </>
                    )}
                    {' · '}
                    <span className="font-medium">Sent by:</span> {notification.sentBy}
                  </div>
                  <div className="text-sm text-gray-800 leading-relaxed">
                    <span className="font-medium">Message:</span> {notification.message}
                  </div>
                </li>
              ))
            ) : (
              <li className="text-sm text-gray-500 italic">No matching notifications found.</li>
            )}
          </ul>
        </>
      )}
      <NotificationDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        notification={selectedNotification}
      />
    </div>
  )
}