'use client'

import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const router = useRouter()

  const handleNavigation = (path) => {
    router.push(path)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Choose Workflow</h1>
      <div className="flex flex-col gap-4 w-full max-w-md">
        <button
          onClick={() => handleNavigation('/assignor-view')}
          className="w-full rounded bg-indigo-600 px-6 py-3 text-white text-lg font-semibold hover:bg-indigo-700 transition"
        >
          Assignor Workflow
        </button>
        <button
          onClick={() => handleNavigation('/referee-view')}
          className="w-full rounded bg-green-600 px-6 py-3 text-white text-lg font-semibold hover:bg-green-700 transition"
        >
          Referee Workflow
        </button>
        <button
          onClick={() => handleNavigation('/league-dashboard')}
          className="w-full rounded bg-blue-600 px-6 py-3 text-white text-lg font-semibold hover:bg-blue-700 transition"
        >
          League Workflow
        </button>
      </div>
    </main>
  )
}