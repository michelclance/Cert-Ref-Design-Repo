'use client'

import { useState, useEffect } from 'react'
import AvailabilityCard from '@/components/referee/pagecomponents/AvailabilityCard'

export default function ProfilePage() {
  const [availableDays, setAvailableDays] = useState([])
  const [formIsDirty, setFormIsDirty] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [stateVal, setStateVal] = useState('')
  const rank = 'Level 5'

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (formIsDirty) {
        e.preventDefault()
        e.returnValue = ''
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [formIsDirty])

  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]

  const handleToggleDay = (day) => {
    setAvailableDays((prevDays) => {
      const isSelected = prevDays.includes(day)
      const updatedDays = isSelected
        ? prevDays.filter((d) => d !== day)
        : [...prevDays, day]

      setFormIsDirty(true)
      return updatedDays
    })
  }

  const handleSave = async () => {
    setIsSaving(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const payload = {
        firstName,
        lastName,
        email,
        phone,
        city,
        state: stateVal,
        rank,
        availableDays,
      }

      console.log('Saving profile:', payload)

      setShowToast(true)
      setFormIsDirty(false)
    } catch (err) {
      console.error('Error saving profile:', err)
    } finally {
      setIsSaving(false)
      setTimeout(() => setShowToast(false), 3000)
    }
  }

  return (
    <form className="">
      <div className="px-4 py-6 space-y-8">
        <div className="border-b border-gray-900/10 pb-4">
          <h2 className="text-base/7 font-semibold text-gray-900">Availability</h2>
          <p className="mt-0.5 text-sm/6 text-gray-600">Select the days you are available to officiate games.</p>

          <div className="mt-1 grid grid-cols-7 gap-1 text-xs">
            {daysOfWeek.map((day) => (
              <AvailabilityCard
                key={day}
                day={day}
                isSelected={availableDays.includes(day)}
                onToggle={handleToggleDay}
              />
            ))}
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-4">
          <h2 className="text-base/7 font-semibold text-gray-900">Personal Information</h2>
          <p className="mt-0.5 text-sm/6 text-gray-600">Keep your information up to date so leagues can contact you.</p>

          <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value)
                    setFormIsDirty(true)
                  }}
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value)
                    setFormIsDirty(true)
                  }}
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setFormIsDirty(true)
                  }}
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="phone-number" className="block text-sm/6 font-medium text-gray-900">
                Phone number
              </label>
              <div className="mt-2">
                <input
                  id="phone-number"
                  name="phone-number"
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value)
                    setFormIsDirty(true)
                  }}
                  autoComplete="tel"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
                City
              </label>
              <div className="mt-2">
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value)
                    setFormIsDirty(true)
                  }}
                  autoComplete="address-level2"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="state" className="block text-sm/6 font-medium text-gray-900">
                State
              </label>
              <div className="mt-2">
                <input
                  id="state"
                  name="state"
                  type="text"
                  value={stateVal}
                  onChange={(e) => {
                    setStateVal(e.target.value)
                    setFormIsDirty(true)
                  }}
                  autoComplete="address-level1"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="rank" className="block text-sm/6 font-medium text-gray-900">
                Referee Rank
              </label>
              <div className="mt-2">
                <input
                  id="rank"
                  name="rank"
                  type="text"
                  value={rank}
                  disabled
                  className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-end gap-x-4">
          <button
            type="button"
            onClick={() => {
              setFormIsDirty(false)
            }}
            className="text-sm font-semibold text-gray-900"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={isSaving}
            onClick={handleSave}
            className={`rounded-md px-3 py-2 text-sm font-semibold shadow ${
              isSaving ? 'bg-gray-400 text-white' : 'bg-indigo-600 text-white hover:bg-indigo-500'
            }`}
          >
            {isSaving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>

      {showToast && (
        <div className="fixed bottom-20 right-6 rounded-md bg-green-100 px-4 py-2 text-sm text-green-800 shadow">
          Profile updated!
        </div>
      )}
    </form>
  )
}
