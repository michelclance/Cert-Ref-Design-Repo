import PaymentSummary from '@/components/assignor/pagecomponents/payment/PaymentSummary'
import OutstandingPaymentsList from '@/components/assignor/pagecomponents/payment/OutstandingPaymentsList'
import PaymentHistoryTable from '@/components/assignor/pagecomponents/payment/PaymentHistoryTable'

export default function PaymentsPage() {
  const payments = [
    {
      referee: 'Jane Cooper',
      gameId: 'GAME-001',
      amount: '$45',
      status: 'Paid',
      payoutDate: 'June 10, 2025',
    },
    {
      referee: 'John Smith',
      gameId: 'GAME-002',
      amount: '$35',
      status: 'Processing',
      payoutDate: '-',
    },
    {
      referee: 'Emily Davis',
      gameId: 'GAME-003',
      amount: '$50',
      status: 'Pending',
      payoutDate: '-',
    },
  ]

  return (
    <>
      <h1 className="text-3xl font-bold mb-2">Payments</h1>
      <p className="text-gray-600 mb-6">
        Track and manage referee payment history
      </p>

      <PaymentSummary />
      <OutstandingPaymentsList />
      <PaymentHistoryTable />
    </>
  )
}