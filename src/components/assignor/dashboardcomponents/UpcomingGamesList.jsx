export default function UpcomingGamesList() {
  return (
    <div className="space-y-2">
      <div className="p-4 border rounded-md bg-white shadow-sm">
        <p className="text-sm text-gray-600">GAME-001 | June 9, 2:00 PM | Central Park Lions vs Riverside Hawks</p>
        <p className="text-sm font-medium text-green-700 mt-1">Coverage: Full</p>
      </div>
      <div className="p-4 border rounded-md bg-white shadow-sm">
        <p className="text-sm text-gray-600">GAME-002 | June 10, 4:00 PM | Brooklyn Bulldogs vs Queens Kings</p>
        <p className="text-sm font-medium text-yellow-700 mt-1">Coverage: Partial</p>
      </div>
    </div>
  )
}
