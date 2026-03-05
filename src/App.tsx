import type { JSX } from 'react'
import { useStore } from './store'
import { ToolCard } from './components/ToolCard'
import type { ITool } from './components/ToolCard'

function App(): JSX.Element {

  const aiTools = useStore((state) => state.aiTools)

  return (
    <div className="space-y-8">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="mb-2">AI Tools</h1>
          <p className="text-slate-400">Discover the best tools for your next project.</p>
        </div>
        <div className="text-sm font-mono text-slate-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
          {aiTools.length} tools found
        </div>
      </header>

      {aiTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiTools.map((tool: ITool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center border-2 border-dashed border-white/5 rounded-[3rem] bg-white/[0.02]">
          <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-3xl mb-4 opacity-50">
            🔎
          </div>
          <h2 className="text-xl font-semibold text-slate-300">No tools found</h2>
          <p className="text-slate-500 mt-2">Start by adding your first tool to the collection.</p>
        </div>
      )}
    </div>
  )
}

export default App
