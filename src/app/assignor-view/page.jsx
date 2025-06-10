import SummaryCards from '@/components/assignor/dashboardcomponents/SummaryCards'
import UpcomingGamesList from '@/components/assignor/dashboardcomponents/UpcomingGamesList'
import DashboardNotificationsPreview from '@/components/assignor/dashboardcomponents/DashboardNotificationsPreview'
import DashboardAlertsSummary from '@/components/assignor/dashboardcomponents/DashboardAlertsSummary'

export default function AssignorDashboardPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Summary Cards */}
      <section className="mb-8">
        <SummaryCards />
      </section>

      {/* Alerts Summary */}
      <section className="mb-8">
        <DashboardAlertsSummary />
      </section>

      {/* Upcoming Games */}
      <section className="mb-8">
        <UpcomingGamesList />
      </section>

      {/* Notifications Preview */}
      <section>
        <DashboardNotificationsPreview />
      </section>
    </>
  )
}