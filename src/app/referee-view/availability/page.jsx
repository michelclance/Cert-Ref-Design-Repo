'use client'

import { useState } from 'react'

export default function AvailabilityPage() {
  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]

  const [availableDays, setAvailableDays] = useState([])

  const handleCheckboxChange = (day) => {
    setAvailableDays((prevDays) => {
      const isSelected = prevDays.includes(day)
      const updatedDays = isSelected
        ? prevDays.filter((d) => d !== day)
        : [...prevDays, day]

      console.log('Selected Days:', updatedDays)
      return updatedDays
    })
  }

  return (
    <>
      <h1 className="text-3xl font-bold">Availability</h1>
      <p className="mt-4 text-gray-600">Select the days you are available.</p>

      <div className="mt-6 flex flex-col gap-2">
        {daysOfWeek.map((day) => (
          <label key={day} className="flex items-center text-sm text-gray-700">
            <input
              type="checkbox"
              className="mr-2"
              checked={availableDays.includes(day)}
              onChange={() => handleCheckboxChange(day)}
            />
            {day}
          </label>
        ))}
      </div>
    </>
  )
}