// components/ChatbotInterface.jsx
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useSoundEffect } from "../hooks/useSoundEffect";
import { BiSolidSend } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { GiAstronautHelmet } from "react-icons/gi";

export default function ChatbotInterface({ isOpen, onClose }) {
  const clickSound = useSoundEffect("/sounds/mouse-click.mp3", { volume: 0.5 });

  const containerRef = useRef(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hello! I'm your TerraNaut. Ask me anything about Terra satellite!" }
  ]);

  const messagesEndRef = useRef(null);

const scrollToBottom = () => {
  messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
};

useEffect(() => {
  scrollToBottom();
}, [messages]);



  useEffect(() => {
    if (isOpen) {
      // Animate from astronaut position (bottom-right) to center-bottom
      gsap.fromTo(
        containerRef.current,
        {
          scale: 0,
          opacity: 0,
          x: 300, // Start from astronaut position (right side)
          y: 100,
        },
        {
          scale: 1,
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.7)"
        }
      );
    } else {
      // Collapse back to astronaut position
      gsap.to(containerRef.current, {
        scale: 0,
        opacity: 0,
        x: 300,
        y: 100,
        duration: 0.4,
        ease: "power2.in"
      });
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
          text: "I'm analyzing Terra satellite data related to your question..."
        }]);
      }, 800);
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
    <div
      ref={containerRef}
      className="fixed bottom-8 right-40 z-50 w-[350px]"
      style={{ transformOrigin: 'bottom right' }}
    >
      {/* Main Chat Container */}
      <div className="relative">
        {/* Rainbow gradient glow */}
        {/* <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-orange-500 opacity-40 "></div> */}

        {/* Chat Box */}
        <div className="relative h-[400px] bg-black/40  border border-white/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <div className="flex items-center gap-3 justify-center">
              <div className="relative text-white font-bold">
             <GiAstronautHelmet/>
              </div>
              <h3 className="text-white font-custom3 ml-[-6px] mt-1 font-semibold text-lg tracking-wide">TerraNaut</h3>
            </div>
            <button
              onClick={onClose}
              className="cursor-target w-8 h-8 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
            >
              <IoClose className="text-xl" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="h-[400px] overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent scrollbar-hidden ">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-5 py-3 rounded-2xl ${msg.type === 'user'
                    ? 'bg-gradient-to-br from-blue-500/30 to-purple-500/30 text-white border border-blue-400/40 shadow-lg'
                    : 'bg-white/10 text-white/95 border border-white/20'
                    }`}
                >
                  <p className="text-sm font-custom3 leading-relaxed">{msg.text}</p>

                </div>
              </div>
            ))}

              <div ref={messagesEndRef} />
          </div>

          {/* Input Area - Integrated within chatbox */}
          <div className="border-t border-white/10 p-4 bg-black/40">
            <div className="relative">
              {/* Subtle gradient background for input */}
              <div className="absolute inset-0 rounded-full"></div>

              <div className="flex gap-2">
                {/* Input field */}
                <div className="relative w-full rounded-3xl p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-orange-500 ">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about Terra..."
                    className="w-full rounded-3xl bg-black/60 text-white placeholder-white/60 text-sm font-custom3 px-4 py-2 border-none outline-none"
                    style={{ caretColor: '#60a5fa' }}
                  />
                </div>


                {/* Send button */}
                <button
                  onClick={handleSend}
                  disabled={!message.trim()}
                  className={`cursor-target flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${message.trim()
                    ? 'bg-gradient-to-br from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-blue-500/50'
                    : 'bg-white/10 text-white/30 cursor-not-allowed'
                    }`}
                >
                  <BiSolidSend className="text-lg" />
                </button>


              </div>
            </div>
          </div>

          {/* Corner accents */}
          <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-400/50 rounded-tl-3xl"></span>
          <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-400/50 rounded-br-3xl"></span>
        </div>

        {/* Bottom glow */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-2/3 h-8 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl"></div>
      </div>
    </div>
  );
}