import { useLocation } from 'react-router-dom'
import Dashboard from '../components/Dashboard/Dashboard'

const DashboardPage = () => {
  const location = useLocation()
  const role = location.state?.role || 'user'

  return <Dashboard role={role} />
}

export default DashboardPage