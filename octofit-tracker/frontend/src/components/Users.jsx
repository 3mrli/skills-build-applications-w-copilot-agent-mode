import ResourceTable from './ResourceTable.jsx'

const apiEndpoint = import.meta.env.VITE_CODESPACE_NAME ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/` : '/api/users/'

export default function Users() {
  return <ResourceTable resource="users" endpoint={apiEndpoint} title="Users" description="The OctoFit community, ready for its next challenge." columns={[{ key: 'username', label: 'Username' }, { key: 'email', label: 'Email' }, { key: 'teamId', label: 'Team' }]} />
}
