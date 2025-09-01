import DashboardNav from '../components/DashboardNav/DashboardNav'

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <DashboardNav />
      <main>{children}</main>
    </div>
  )
}

export default DashboardLayout