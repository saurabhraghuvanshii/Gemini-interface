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
    <div className="flex flex-col h-screen">
      <Header toggleSidebar={toggleSidebar} />
      <main className="flex-1 overflow-y-auto">
        {showWelcome ? (
          <div>
            <Greeting name="Friend" />
            <div className="hidden sm:flex">
              <SuggestionCards />
            </div>
          </div>
        ) : (
          <Canvas conversations={conversations} />
        )}
      </main>
      <div className="sticky bottom-0 bg-[#1E1E1E] z-10">
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default App;

