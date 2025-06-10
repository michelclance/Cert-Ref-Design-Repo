export default function SummaryCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="p-4 border rounded-md bg-white shadow-sm">
        <p className="text-sm text-gray-500 mb-1">Games this Week</p>
        <p className="text-2xl font-bold text-gray-900">24</p>
      </div>
      <a
        href="/assignor-view/games?filter=unassigned"
        className="block p-4 border rounded-md bg-white shadow-sm hover:bg-gray-50 transition"
      >
        <p className="text-sm text-gray-500 mb-1">Unassigned Games</p>
        <p className="text-2xl font-bold text-gray-900">3</p>
      </a>
      <div className="p-4 border rounded-md bg-white shadow-sm">
        <p className="text-sm text-gray-500 mb-1">Active Referees this Week</p>
        <p className="text-2xl font-bold text-gray-900">17</p>
      </div>
    </div>
  )
}