export default function AlertsList() {
  return (
    <div className="space-y-2">
      <a
        href="/assignor-view/games?filter=unassigned"
        className="block p-4 border rounded-md bg-red-50 text-sm text-red-700 border-red-200 hover:bg-red-100 transition"
      >
        Unassigned Game - GAME-002 has no Center Referee assigned.
      </a>
      <div className="p-4 border rounded-md bg-yellow-50 text-sm text-yellow-700 border-yellow-200">
        Late Cancel - Referee C canceled GAME-007 2 hours ago.
      </div>
    </div>
  )
}
