import { NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

const navigation = [
  { label: 'Overview', to: '/' }, { label: 'Activities', to: '/activities' },
  { label: 'Leaderboard', to: '/leaderboard' }, { label: 'Teams', to: '/teams' },
  { label: 'Users', to: '/users' }, { label: 'Workouts', to: '/workouts' },
]

function Overview() {
  return (
    <section className="welcome-panel">
      <p className="eyebrow">Mergington High School</p>
      <h1>Move together.<br />Go further.</h1>
      <p className="lead">Track activity, celebrate consistency, and keep your team in motion.</p>
      <div className="overview-links">
        <NavLink className="primary-link" to="/activities">Log an activity <span aria-hidden="true">-&gt;</span></NavLink>
        <NavLink className="text-link" to="/leaderboard">See the leaderboard</NavLink>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <NavLink className="brand" to="/" aria-label="OctoFit Tracker home"><span className="brand-mark">O</span><span>OctoFit <em>Tracker</em></span></NavLink>
        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map((item) => <NavLink key={item.to} to={item.to} end={item.to === '/'}>{item.label}</NavLink>)}
        </nav>
        <span className="status-pill"><span /> API connected</span>
      </header>
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Overview />} /><Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} /><Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} /><Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
