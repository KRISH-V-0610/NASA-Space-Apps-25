// components/ChatbotInterface.jsx
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useSoundEffect } from "../hooks/useSoundEffect";

export default function ChatbotInterface({ isOpen, onClose }) {

  const clickSound = useSoundEffect("/sounds/mouse-click.mp3", { volume: 0.5 });

  const chatRef = useRef(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hello! I'm your Terra assistant. How can I help you today?" }
  ]);

  useEffect(() => {
    if (chatRef.current) {
      if (isOpen) {
        gsap.to(chatRef.current, {
          bottom: "0%",
          opacity: 1,
          duration: 0.6,
          ease: "power3.out"
        });
      } else {
        gsap.to(chatRef.current, {
          bottom: "-100%",
          opacity: 0,
          duration: 0.4,
          ease: "power2.in"
        });
      }
    }
  }, [isOpen]);

  const handleSend = async () => {
    await clickSound.play();
    if (message.trim()) {
      setMessages([...messages, { type: "user", text: message }]);
      setMessage("");

      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: "bot",
          text: "I'm processing your request about Terra satellite data..."
        }]);
      }, 1000);
    }
  };

  return (
    <div
      ref={chatRef}
      className="fixed left-1/2 transform -translate-x-1/2 w-[600px] h-[500px] bg-black/90 backdrop-blur-xl border-t-2 border-l-2 border-r-2 border-white/20 rounded-t-3xl shadow-2xl z-50"
      style={{ bottom: '-100%', opacity: 0 }}
    >
      <div className="flex items-center justify-between p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          <h3 className="text-white font-medium text-lg">Terra Assistant</h3>
        </div>
        <button
          onClick={onClose}
          className="cursor-target text-white/60 hover:text-white transition-colors p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="h-[300px] overflow-y-auto p-6 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] px-5 py-3 rounded-2xl ${
                msg.type === 'user'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30'
                  : 'bg-white/5 text-white/90 border border-white/10'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-black/50">
        <div className="flex gap-3">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            onClick={async (e) => {
              e.stopPropagation()
              await clickSound.play();
            
            }}
            placeholder="Ask about Terra satellite..."
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
          />
          <button
            onClick={handleSend}
            className="cursor-target bg-cyan-500/20 border border-cyan-400/30 rounded-xl px-6 py-3 text-cyan-400 hover:bg-cyan-500/30 hover:border-cyan-400/50 transition-all font-medium"
          >
            Send
          </button>
        </div>
      </div>

      <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400/50"></span>
      <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400/50"></span>
    </div>
  );
}