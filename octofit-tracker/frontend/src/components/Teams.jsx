import ResourceTable from './ResourceTable.jsx'

export default function Teams() {
  return <ResourceTable resource="teams" title="Teams" description="Find your crew and keep each other moving." columns={[{ key: 'name', label: 'Team' }, { key: 'memberIds', label: 'Members' }, { key: 'createdAt', label: 'Created' }]} />
}
