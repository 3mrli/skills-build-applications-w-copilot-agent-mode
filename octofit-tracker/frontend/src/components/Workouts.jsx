import ResourceTable from './ResourceTable.jsx'

const apiEndpoint = import.meta.env.VITE_CODESPACE_NAME ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/` : '/api/workouts/'

export default function Workouts() {
  return <ResourceTable resource="workouts" endpoint={apiEndpoint} title="Workouts" description="A starting point for your next strong, steady session." columns={[{ key: 'name', label: 'Workout' }, { key: 'difficulty', label: 'Level' }, { key: 'duration', label: 'Minutes' }, { key: 'description', label: 'Details' }]} />
}
