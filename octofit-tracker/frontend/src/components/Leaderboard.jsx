import ResourceTable from './ResourceTable.jsx'

const apiEndpoint = import.meta.env.VITE_CODESPACE_NAME ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/` : '/api/leaderboard/'

export default function Leaderboard() {
  return <ResourceTable resource="leaderboard" endpoint={apiEndpoint} title="Leaderboard" description="Friendly competition, measured one workout at a time." columns={[{ key: 'userId', label: 'Athlete' }, { key: 'points', label: 'Points' }, { key: 'createdAt', label: 'Updated' }]} />
}
