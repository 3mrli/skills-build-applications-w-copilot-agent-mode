import ResourceTable from './ResourceTable.jsx'

export default function Leaderboard() {
  return <ResourceTable resource="leaderboard" title="Leaderboard" description="Friendly competition, measured one workout at a time." columns={[{ key: 'userId', label: 'Athlete' }, { key: 'points', label: 'Points' }, { key: 'createdAt', label: 'Updated' }]} />
}
