const KEY = 'nasa_catalog_analytics_v1'

function load() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || { views: {}, searches: {}, types: {} }
  } catch {
    return { views: {}, searches: {}, types: {} }
  }
}

function save(data) {
  localStorage.setItem(KEY, JSON.stringify(data))
}

export function trackView(url) {
  const data = load()
  data.views[url] = (data.views[url] || 0) + 1
  save(data)
}

export function trackSearch(query) {
  if (!query) return
  const data = load()
  const key = query.trim().toLowerCase()
  data.searches[key] = (data.searches[key] || 0) + 1
  save(data)
}

export function trackType(type) {
  const data = load()
  data.types[type] = (data.types[type] || 0) + 1
  save(data)
}

export function getTopViews(limit = 6) {
  const { views } = load()
  return Object.entries(views)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
}

export function getTopSearches(limit = 6) {
  const { searches } = load()
  return Object.entries(searches)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
}

export function getTypeUsage() {
  const { types } = load()
  return types
}

