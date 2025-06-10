
export default function AvailabilityCard({ day, isSelected, onToggle }) {
  return (
    <button
      type="button"
      onClick={() => onToggle(day)}
      className={`flex items-center justify-center p-6 border rounded-lg shadow-sm text-sm font-medium transition ${
        isSelected
          ? 'bg-indigo-100 text-indigo-700 ring-2 ring-indigo-500'
          : 'bg-white text-gray-700 hover:bg-gray-50'
      }`}
      aria-pressed={isSelected}
    >
      {day}
    </button>
  )
}