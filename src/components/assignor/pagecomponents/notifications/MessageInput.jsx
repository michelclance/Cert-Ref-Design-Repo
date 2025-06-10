'use client'

import { useState } from 'react'

export default function MessageInput() {
  const [message, setMessage] = useState('')

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
        placeholder="Enter your message..."
      ></textarea>
    </div>
  )
}
