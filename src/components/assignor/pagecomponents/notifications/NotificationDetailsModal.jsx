

'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function NotificationDetailsModal({ isOpen, onClose, notification }) {
  if (!notification) return null

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 mb-4"
                >
                  Notification Details
                </Dialog.Title>

                <div className="space-y-3 text-sm text-gray-700">
                  {notification.message.includes('\n\n') ? (
                    <div className="space-y-2 max-h-96 overflow-y-auto">
                      {notification.message.split('\n\n').map((entry, idx) => {
                        const [timestampPart, rest] = entry.split(' - ', 2)
                        const gameIdMatch = rest?.match(/(GAME-\d+)/)
                        const messagePart = rest?.replace(gameIdMatch?.[0] || '', '').trim()
                        return (
                          <div
                            key={idx}
                            className="rounded border border-gray-200 bg-gray-50 p-3 text-gray-800 text-sm shadow-sm space-y-1"
                          >
                            <div className="text-xs text-gray-500">{timestampPart}</div>
                            {gameIdMatch && (
                              <div className="font-semibold text-indigo-600">{gameIdMatch[0]}</div>
                            )}
                            <div>{messagePart}</div>
                          </div>
                        )
                      })}
                    </div>
                  ) : (
                    <>
                      <div>
                        <span className="font-medium">Timestamp:</span> {notification.timestamp}
                      </div>
                      <div>
                        <span className="font-medium">Recipients:</span>
                        <ul className="list-disc list-inside mt-1 ml-4 text-gray-800">
                          {notification.recipients.map((recipient, idx) => (
                            <li key={idx}>{recipient}</li>
                          ))}
                        </ul>
                      </div>
                      {notification.gameId && (
                        <div>
                          <span className="font-medium">Game ID:</span> {notification.gameId}
                        </div>
                      )}
                      <div>
                        <span className="font-medium">Sent by:</span> {notification.sentBy}
                      </div>
                      <div>
                        <span className="font-medium">Message:</span>
                        <div className="mt-1 rounded border border-gray-200 bg-gray-50 p-3 text-gray-800 whitespace-pre-wrap">
                          {notification.message}
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}