import * as React from 'react'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

export async function fetchResource(resource) {
  const response = await fetch(`${apiBaseUrl}/api/${resource}/`)
  if (!response.ok) throw new Error(`Unable to load ${resource} (${response.status})`)
  const payload = await response.json()
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload.results)) return payload.results
  if (Array.isArray(payload.items)) return payload.items
  if (Array.isArray(payload.data)) return payload.data
  return []
}

export function useResource(resource) {
  const [state, setState] = React.useState({ data: [], loading: true, error: '' })

  React.useEffect(() => {
    let active = true
    fetchResource(resource)
      .then((data) => active && setState({ data, loading: false, error: '' }))
      .catch((error) => active && setState({ data: [], loading: false, error: error.message }))
    return () => { active = false }
  }, [resource])

  return state
}
