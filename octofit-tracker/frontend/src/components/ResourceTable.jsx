import { useResource } from './api.js'

function displayValue(value) {
  if (value === null || value === undefined || value === '') return '-'
  if (typeof value === 'object') return value.name || value.username || value._id || JSON.stringify(value)
  return String(value)
}

export default function ResourceTable({ resource, title, description, columns }) {
  const { data, loading, error } = useResource(resource)

  return (
    <section className="resource-view">
      <div className="section-heading">
        <div><p className="eyebrow">OctoFit data</p><h1>{title}</h1><p className="lead">{description}</p></div>
        <span className="record-count">{data.length} {data.length === 1 ? 'record' : 'records'}</span>
      </div>
      <div className="data-surface">
        {loading && <p className="state-message">Loading {title.toLowerCase()}...</p>}
        {error && <p className="state-message error-message">{error}. Check that the API is running.</p>}
        {!loading && !error && data.length === 0 && <p className="state-message">No {title.toLowerCase()} yet.</p>}
        {!loading && !error && data.length > 0 && (
          <div className="table-scroll"><table><thead><tr>{columns.map((column) => <th key={column.key}>{column.label}</th>)}</tr></thead><tbody>
            {data.map((item, index) => <tr key={item._id || item.id || index}>{columns.map((column) => <td key={column.key}>{displayValue(item[column.key])}</td>)}</tr>)}
          </tbody></table></div>
        )}
      </div>
    </section>
  )
}
