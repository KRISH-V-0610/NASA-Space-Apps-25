import React from 'react'
import EventDetails from './EventDetails.jsx'
import Chatbot from './Chatbot.jsx'
import AIResponse from './AIResponse.jsx'

export default function Sidebar({ year, events, selectedEvent, onClear, onSelect }) {
  const [answer, setAnswer] = React.useState('')
  const [question, setQuestion] = React.useState('')
  const [showResponse, setShowResponse] = React.useState(false)

  const handleResponse = (answer, question) => {
    setAnswer(answer)
    setQuestion(question)
    setShowResponse(true)
  }

  const clearResponse = () => {
    setAnswer('')
    setQuestion('')
    setShowResponse(false)
  }

  return (
    <aside className="flex flex-col h-full">
      <div className="border-b border-white/10 bg-zinc-800/40 px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="text-white font-semibold text-lg tracking-wide">
            {showResponse ? 'AI Response' : selectedEvent ? 'Event Details' : 'Year Overview'}
          </div>
          <div className="flex gap-2">
            {showResponse && (
              <button 
                className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-lg text-white text-sm transition-all duration-300" 
                onClick={clearResponse}
              >
                Back
              </button>
            )}
            {selectedEvent && !showResponse && (
              <button 
                className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-lg text-white text-sm transition-all duration-300" 
                onClick={onClear}
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hidden">
        {showResponse ? (
          <AIResponse 
            question={question} 
            answer={answer} 
            onBack={clearResponse}
          />
        ) : (
          <EventDetails 
            year={year}
            events={events}
            selectedEvent={selectedEvent}
            onSelect={onSelect}
          />
        )}
      </div>

      <Chatbot 
        year={year}
        selectedEvent={selectedEvent}
        onResponse={handleResponse}
      />
    </aside>
  )
}