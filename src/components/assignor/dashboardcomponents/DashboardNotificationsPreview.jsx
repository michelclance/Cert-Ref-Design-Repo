

'use client'

import React from 'react'
import Link from 'next/link'

const sampleNotifications = [
  {
    timestamp: 'June 8, 2025, 9:30 AM',
    recipients: ['Referee A', 'Referee B'],
    message: 'Reminder: Game starts at 3 PM.',
  },
  {
    timestamp: 'June 7, 2025, 6:00 AM',
    recipients: ['Referee C'],
    message: 'All games for today are cancelled due to weather.',
  },
  {
    timestamp: 'June 6, 2025, 2:15 PM',
    recipients: ['Referee D', 'Referee E'],
    message: 'Urgent: Location has changed to Field 5.',
  },
  {
    timestamp: 'June 5, 2025, 8:00 AM',
    recipients: ['Referee F'],
    message: 'Reminder to bring referee badge.',
  },
  {
    timestamp: 'June 4, 2025, 3:45 PM',
    recipients: ['Referee G', 'Referee H'],
    message: 'Important tournament briefing attached.',
  },
]

export default function DashboardNotificationsPreview() {
  const recentNotifications = sampleNotifications
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    .slice(0, 3)

  return (
    <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Notifications</h2>
      <ul className="divide-y divide-gray-200 mb-4">
        {recentNotifications.map((notification, idx) => (
          <li key={idx} className="py-3">
            <div className="text-xs text-gray-500 mb-1">{notification.timestamp}</div>
            <div className="text-sm text-gray-800 mb-1">
              <span className="font-medium">Recipients:</span> {notification.recipients.join(', ')}
            </div>
            <div className="text-sm text-gray-700">{notification.message}</div>
          </li>
        ))}
      </ul>
      <div className="text-right">
        <Link
          href="/assignor-view/notifications"
          className="text-indigo-600 text-sm font-medium hover:underline"
        >
          View All Notifications →
        </Link>
      </div>
    </div>
  )
}