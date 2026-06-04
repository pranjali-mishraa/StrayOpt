import React, { useState, useRef, useEffect } from "react";

const dummyMessages = [
  { id: 1, from: "them", text: "Hi! Is this pet still available for adoption?" },
  { id: 2, from: "me",   text: "Yes! Bruno is still looking for a home 🐾" },
  { id: 3, from: "them", text: "Amazing! Can you share the exact locality?" },
];

export default function ChatDrawer({ pet, onClose }) {
  const [messages, setMessages] = useState(dummyMessages);
  const [input, setInput]       = useState("");
  const bottomRef               = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function sendMessage() {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { id: Date.now(), from: "me", text: input.trim() }]);
    setInput("");

    // Dummy auto-reply after 1s
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { id: Date.now() + 1, from: "them", text: "Thanks for reaching out! I'll get back to you shortly 🐾" },
      ]);
    }, 1000);
  }

  function handleKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white z-50 flex flex-col shadow-2xl animate-fade-right">

        {/* ── Header ── */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-border-brand bg-cream">
          <button
            onClick={onClose}
            aria-label="Close chat"
            className="w-8 h-8 rounded-full bg-warm flex items-center justify-center hover:bg-tan transition-colors duration-200 flex-shrink-0"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <div>
            <p className="font-display text-[15px] font-semibold text-bark-dark leading-tight">
              Chat about {pet.name}
            </p>
            <p className="text-[12px] text-text-light">
              with {pet.postedBy.name} · {pet.locality}
            </p>
          </div>
        </div>

        {/* ── Pet info strip ── */}
        <div className="flex items-center gap-3 px-5 py-3 bg-warm border-b border-border-brand">
          <div className="w-10 h-10 rounded-xl bg-tan overflow-hidden flex-shrink-0 flex items-center justify-center">
            {pet.images?.[0]
              ? <img src={pet.images[0]} alt={pet.name} className="w-full h-full object-cover" />
              : <span className="text-xl">🐾</span>
            }
          </div>
          <div>
            <p className="text-[13px] font-semibold text-bark-dark">{pet.name}</p>
            <p className="text-[11px] text-text-light">{pet.breed} · {pet.locality}</p>
          </div>
          {pet.urgent && (
            <span className="ml-auto text-[11px] bg-rust text-cream px-2.5 py-0.5 rounded-full">
              ⚡ Urgent
            </span>
          )}
        </div>

        {/* ── Messages ── */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-[13px] leading-relaxed ${
                msg.from === "me"
                  ? "bg-bark-dark text-cream rounded-br-sm"
                  : "bg-warm text-text-mid border border-border-brand rounded-bl-sm"
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* ── Input ── */}
        <div className="px-4 py-4 border-t border-border-brand bg-cream">
          <div className="flex items-end gap-2 bg-white border border-border-brand rounded-2xl px-4 py-2.5 focus-within:border-bark transition-colors duration-200">
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask about location, health, temperament…"
              rows={1}
              className="flex-1 text-[13.5px] text-text bg-transparent outline-none resize-none placeholder:text-text-light leading-relaxed"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim()}
              aria-label="Send message"
              className="w-8 h-8 bg-rust rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 hover:bg-rust-hover active:scale-90 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
              </svg>
            </button>
          </div>
          <p className="text-[11px] text-text-light text-center mt-2">
            Press Enter to send · Shift+Enter for new line
          </p>
        </div>

      </div>
    </>
  );
}