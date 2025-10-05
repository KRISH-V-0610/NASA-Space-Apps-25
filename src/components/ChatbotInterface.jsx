/* eslint-disable no-unused-vars */
// components/ChatbotInterface.jsx
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { useSoundEffect } from "../hooks/useSoundEffect.jsx";
import { BiSolidSend } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { GiAstronautHelmet } from "react-icons/gi";

const API_BASE_URL = "https://nasa-25-terranaut.onrender.com";

export default function ChatbotInterface({ isOpen, onClose }) {
  const clickSound = useSoundEffect("/sounds/mouse-click.mp3", { volume: 0.5 });

  const containerRef = useRef(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hello! I'm your TerraNaut. Ask me anything about Terra satellite!" }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        containerRef.current,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)"
        }
      );
    }
  }, [isOpen]);

  const handleSend = async () => {
    await clickSound.play();
    
    if (!message.trim()) return;

    const userMessage = message.trim();
    setMessage("");
    
    setMessages(prev => [...prev, { type: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/v1/ask`, {
        question: userMessage,
        context: "",
        temperature: 0.2,
        return_sources: true
      });

      if (response.data.ok) {
        setMessages(prev => [...prev, {
          type: "bot",
          text: response.data.message_markdown,
          sources: response.data.sources || []
        }]);
      } else {
        setMessages(prev => [...prev, {
          type: "bot",
          text: "I apologize, but I encountered an issue processing your question. Please try again."
        }]);
      }
    } catch (error) {
      console.error("API Error:", error);
      
      setMessages(prev => [...prev, {
        type: "bot",
        text: "I'm having trouble connecting to my knowledge base right now. Please try again in a moment."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div
        ref={containerRef}
        className="font-custom3 w-[90vw] max-w-4xl h-[85vh] max-h-[800px]"
      >
        <div className="relative h-full">
          {/* Chat Box */}
          <div className="relative h-full bg-zinc-900/90 border-2 border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-5 border-b border-white/10 bg-zinc-800/50">
              <div className="flex items-center gap-4">
                <div className="relative text-white font-bold text-2xl">
                  <GiAstronautHelmet className="-rotate-90"/>
                </div>
                <h3 className="text-white font-custom3 ml-[-8px] font-semibold text-2xl tracking-wide">
                  TerraNaut AI Assistant
                </h3>
              </div>
              <button
                onClick={onClose}
                className="cursor-target w-10 h-10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
              >
                <IoClose className="text-2xl" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hidden">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-6 py-4 rounded-2xl ${
                      msg.type === 'user'
                        ? 'bg-gradient-to-br from-blue-500/30 to-purple-500/30 text-white border border-blue-400/40 shadow-lg'
                        : 'bg-zinc-800/60 text-white/95 border border-white/20'
                    }`}
                  >
                    {msg.type === 'user' ? (
                      <p className="text-base font-custom3 leading-relaxed whitespace-pre-wrap">
                        {msg.text}
                      </p>
                    ) : (
                      <div className="markdown-content">
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
                          {msg.text}
                        </ReactMarkdown>
                      </div>
                    )}
                    
                    {/* Display sources if available */}
                    {msg.sources && msg.sources.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Sources:</h4>
                        <ul className="space-y-1">
                          {msg.sources.map((source, idx) => (
                            <li key={idx}>
                              <a
                                href={source.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-blue-300 hover:text-blue-200 underline block truncate"
                              >
                                {source.title || source.url}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] px-6 py-4 rounded-2xl bg-zinc-800/60 border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                      <span className="text-sm text-white/60 font-custom3">TerraNaut is thinking...</span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-white/10 p-6 bg-zinc-800/50">
              <div className="relative">
                <div className="flex gap-3">
                  {/* Input field */}
                  <div className="relative w-full rounded-2xl p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask about Terra satellite data..."
                      disabled={isLoading}
                      className="w-full rounded-2xl bg-zinc-900/90 text-white placeholder-white/50 text-base font-custom3 px-6 py-3 border-none outline-none disabled:opacity-50"
                      style={{ caretColor: '#60a5fa' }}
                    />
                  </div>

                  {/* Send button */}
                  <button
                    onClick={handleSend}
                    disabled={!message.trim() || isLoading}
                    className={`cursor-target flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      message.trim() && !isLoading
                        ? 'bg-gradient-to-br from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-blue-500/50'
                        : 'bg-white/10 text-white/30 cursor-not-allowed'
                    }`}
                  >
                    <BiSolidSend className="text-xl" />
                  </button>
                </div>
              </div>
            </div>

            {/* Corner accents */}
            <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-2xl"></span>
            <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-purple-400/50 rounded-br-2xl"></span>
          </div>
        </div>
      </div>
    </div>
  );
}