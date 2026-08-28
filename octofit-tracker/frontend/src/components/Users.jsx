import ResourceTable from './ResourceTable.jsx'

export default function Users() {
  return <ResourceTable resource="users" title="Users" description="The OctoFit community, ready for its next challenge." columns={[{ key: 'username', label: 'Username' }, { key: 'email', label: 'Email' }, { key: 'teamId', label: 'Team' }]} />
}
