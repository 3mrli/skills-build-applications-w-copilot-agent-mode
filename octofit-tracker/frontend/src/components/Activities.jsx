import ResourceTable from './ResourceTable.jsx'

export default function Activities() {
  return <ResourceTable resource="activities" title="Activities" description="A live record of the work your community is putting in." columns={[{ key: 'type', label: 'Activity' }, { key: 'duration', label: 'Minutes' }, { key: 'date', label: 'Date' }, { key: 'userId', label: 'Athlete' }]} />
}
