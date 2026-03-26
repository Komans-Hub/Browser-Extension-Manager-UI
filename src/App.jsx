import { useState, useEffect, useCallback } from 'react'
import rawData from './assets/data.json'
import { Header, FilterBar, ExtensionCard, EmptyState } from './Components/components'

// Seed state — attach a `removing` flag to each record for exit animations
const SEED = rawData.map((ext) => ({ ...ext, removing: false }))

// Read persisted theme preference synchronously (before first render)
// so the correct class is on <html> from the very first paint — no flash.
function getInitialDark() {
  try {
    const stored = localStorage.getItem('ext-theme')
    if (stored === 'light') return false
    if (stored === 'dark')  return true
  } catch { /* localStorage unavailable */ }
  return true // default: dark
}

export default function App() {
  const [extensions, setExtensions] = useState(SEED)
  const [filter,     setFilter]     = useState('All')
  const [isDark,     setIsDark]     = useState(getInitialDark)

  // Keep <html> class + localStorage in sync with isDark
  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark',  isDark)
    root.classList.toggle('light', !isDark)
    try { localStorage.setItem('ext-theme', isDark ? 'dark' : 'light') } catch { /* ignore */ }
  }, [isDark])

  // Toggle a single extension's active state
  const handleToggle = useCallback((id) => {
    setExtensions((prev) =>
      prev.map((e) => e.id === id ? { ...e, active: !e.active } : e)
    )
  }, [])

  // Animate out, then remove from state
  const handleRemove = useCallback((id) => {
    setExtensions((prev) =>
      prev.map((e) => e.id === id ? { ...e, removing: true } : e)
    )
    setTimeout(() => {
      setExtensions((prev) => prev.filter((e) => e.id !== id))
    }, 340)
  }, [])

  // Derived: what the grid actually renders
  const filtered = extensions.filter((e) => {
    if (filter === 'Active')   return e.active
    if (filter === 'Inactive') return !e.active
    return true
  })

  const activeCount = extensions.filter((e) => e.active).length

  return (
    <div className="min-h-screen dark:bg-[#0D1117] bg-[#F0F4F8] transition-colors duration-300">
      <Header isDark={isDark} onToggleTheme={() => setIsDark((d) => !d)} />

      <main className="max-w-5xl mx-auto px-5 pt-6 pb-16">

        {/* ── Title row ── */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-[22px] font-bold tracking-tight dark:text-[#F8FAFC] text-gray-900 m-0">
              Extensions List
            </h1>
            <p className="text-sm mt-1 dark:text-[#8B9AB1] text-gray-500 m-0">
              {activeCount} of {extensions.length} active
            </p>
          </div>
          <FilterBar activeFilter={filter} onFilterChange={setFilter} />
        </div>

        {/* ── Extensions grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.length === 0
            ? <EmptyState filter={filter} />
            : filtered.map((ext, i) => (
                <ExtensionCard
                  key={ext.id}
                  extension={ext}
                  onToggle={handleToggle}
                  onRemove={handleRemove}
                  index={i}
                />
              ))
          }
        </div>

      </main>
    </div>
  )
}
