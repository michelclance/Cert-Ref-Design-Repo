

'use client'

export default function PayNowConfirmationModal({ isOpen, onClose, paymentData }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4 py-8 sm:px-4">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md relative space-y-4">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
        <h2 className="text-lg font-semibold text-gray-900">Confirm Payment</h2>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <span className="font-medium">Referee:</span> {paymentData.referee}
          </p>
          <p>
            <span className="font-medium">Game ID:</span> {paymentData.gameId}
          </p>
          <p>
            <span className="font-medium">Amount:</span> {paymentData.amount}
          </p>
        </div>
        <div className="flex justify-end space-x-2 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              // Simulate Stripe Checkout trigger
              alert('Proceeding to Stripe Checkout (simulated)')
              onClose()
            }}
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  )
}