import ResourceTable from './ResourceTable.jsx'

export default function Workouts() {
  return <ResourceTable resource="workouts" title="Workouts" description="A starting point for your next strong, steady session." columns={[{ key: 'name', label: 'Workout' }, { key: 'difficulty', label: 'Level' }, { key: 'duration', label: 'Minutes' }, { key: 'description', label: 'Details' }]} />
}
