"use client"
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MobileSidebar from '../components/MobileSidebar';
import Greeting from '../components/Greeting';
import SuggestionCards from '../components/SuggestionCards';
import ChatInput from '../components/ChatInput';
import Canvas from '../components/Canvas';

function App() {
  const [conversations, setConversations] = useState<Array<{
    role: 'user' | 'assistant';
    content: string;
  }>>([]);
  const [showWelcome, setShowWelcome] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSendMessage = (message: string) => {
    // Add user message
    setConversations(prev => [...prev, { role: 'user', content: message }]);

    // Hide welcome screen
    setShowWelcome(false);

    // Simulate AI response after a short delay
    setTimeout(() => {
      setConversations(prev => [
        ...prev,
        {
          role: 'assistant',
          content: `I received your message: "${message}". This is a simulated response from the Gemini-like interface.`
        }
      ]);
    }, 1000);
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex h-screen bg-[#1E1E1E] text-[#E8EAED] overflow-hidden">
      <Sidebar />
      <MobileSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col h-screen max-h-screen overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex-1 overflow-hidden flex flex-col">
          {showWelcome ? (
            <>
              <div className="flex-1 flex items-center justify-center">
                <Greeting name="Friend" />
              </div>
              <div className="w-full max-w-3xl mx-auto px-4 pb-4 hidden sm:block">
                <SuggestionCards />
              </div>
            </>
          ) : (
            <Canvas conversations={conversations} />
          )}
        </div>
        <div className="sticky bottom-0 bg-[#1E1E1E] w-full z-10 overflow-hidden">
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
}

export default App;

