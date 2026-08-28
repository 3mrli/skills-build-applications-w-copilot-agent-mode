import ResourceTable from './ResourceTable.jsx'

const apiEndpoint = import.meta.env.VITE_CODESPACE_NAME ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/` : '/api/teams/'

export default function Teams() {
  return <ResourceTable resource="teams" endpoint={apiEndpoint} title="Teams" description="Find your crew and keep each other moving." columns={[{ key: 'name', label: 'Team' }, { key: 'memberIds', label: 'Members' }, { key: 'createdAt', label: 'Created' }]} />
}
