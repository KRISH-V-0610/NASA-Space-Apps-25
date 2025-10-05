import React, { useState } from 'react'
import axios from 'axios'

const API_BASE_URL = "https://nasa-25-terranaut.onrender.com";

export default function Chatbot({ year, selectedEvent, onResponse }) {
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!prompt.trim()) return
    
    const userQuestion = prompt.trim()
    setLoading(true)
    setPrompt('') // Clear input immediately
    
    try {
      // Build context from event and year
      let context = `Current year filter: ${year}. `
      if (selectedEvent) {
        context += `Selected event: ${selectedEvent.title} (${selectedEvent.type}) in ${selectedEvent.region}, ${selectedEvent.year}. `
      }
      
      const response = await axios.post(`${API_BASE_URL}/v1/ask`, {
        question: userQuestion,
        context: context,
        temperature: 0.2,
        return_sources: true
      })

      if (response.data.ok) {
        onResponse?.(response.data.message_markdown, userQuestion)
      } else {
        onResponse?.("I apologize, but I encountered an issue processing your question. Please try again.", userQuestion)
      }
    } catch (error) {
      console.error("API Error:", error)
      onResponse?.("I'm having trouble connecting to my knowledge base right now. Please try again in a moment.", userQuestion)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="border-t border-white/10 bg-zinc-800/40 p-4" onSubmit={handleSubmit}>
      <div className="flex gap-3">
        <div className="relative flex-1 rounded-xl p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500">
          <input
            className="w-full rounded-xl bg-zinc-900/90 text-white placeholder-white/50 text-sm px-4 py-3 border-none outline-none disabled:opacity-50"
            type="text"
            placeholder="Ask about any events..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            disabled={loading}
          />
        </div>
        <button 
          type="submit" 
          className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
            prompt.trim() && !loading
              ? 'bg-gradient-to-br from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg'
              : 'bg-white/10 text-white/30 cursor-not-allowed'
          }`}
          disabled={loading || !prompt.trim()}
        >
          {loading ? (
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          ) : (
            <span className="text-xl">→</span>
          )}
        </button>
      </div>
    </form>
  )
}