import ResourceTable from './ResourceTable.jsx'

const apiEndpoint = import.meta.env.VITE_CODESPACE_NAME ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/` : '/api/activities/'

export default function Activities() {
  return <ResourceTable resource="activities" endpoint={apiEndpoint} title="Activities" description="A live record of the work your community is putting in." columns={[{ key: 'type', label: 'Activity' }, { key: 'duration', label: 'Minutes' }, { key: 'date', label: 'Date' }, { key: 'userId', label: 'Athlete' }]} />
}
