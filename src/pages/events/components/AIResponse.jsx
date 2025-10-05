/* eslint-disable no-unused-vars */
import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function AIResponse({ question, answer, onBack }) {
  return (
    <div className="p-6 space-y-4">
      <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/40 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">🤖</span>
          <span className="text-white/70 text-xs font-semibold tracking-wider">YOUR QUESTION</span>
        </div>
        <p className="text-white text-base leading-relaxed">{question}</p>
      </div>

      <div className="bg-zinc-800/60 border border-white/20 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">✨</span>
          <span className="text-cyan-400 text-xs font-semibold tracking-wider">AI ASSISTANT</span>
        </div>
        
        <div className="markdown-content text-white/90">
          <ReactMarkdown
            components={{
              h1: ({node, ...props}) => <h1 className="text-2xl font-bold text-cyan-400 mt-4 mb-3" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-xl font-bold text-cyan-400 mt-3 mb-2" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-lg font-semibold text-cyan-400 mt-3 mb-2" {...props} />,
              p: ({node, ...props}) => <p className="text-base leading-relaxed mb-3 text-white/90" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-3 space-y-1" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-3 space-y-1" {...props} />,
              li: ({node, ...props}) => <li className="text-white/90" {...props} />,
              code: ({node, inline, ...props}) => 
                inline ? (
                  <code className="bg-black/40 text-cyan-400 px-2 py-0.5 rounded text-sm" {...props} />
                ) : (
                  <code className="block bg-black/40 text-cyan-400 p-3 rounded-lg overflow-x-auto text-sm my-2" {...props} />
                ),
              pre: ({node, ...props}) => <pre className="bg-black/40 p-4 rounded-lg overflow-x-auto my-3" {...props} />,
              a: ({node, ...props}) => <a className="text-cyan-400 hover:text-cyan-300 underline" target="_blank" rel="noopener noreferrer" {...props} />,
              strong: ({node, ...props}) => <strong className="font-semibold text-white" {...props} />,
              em: ({node, ...props}) => <em className="italic text-white/90" {...props} />,
            }}
          >
            {answer}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}