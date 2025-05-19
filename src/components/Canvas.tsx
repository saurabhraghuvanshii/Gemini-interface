import React from 'react';
import { FileText } from 'lucide-react';

interface CanvasProps {
  conversations: Array<{
    role: 'user' | 'assistant';
    content: string;
  }>;
}

const Canvas: React.FC<CanvasProps> = ({ conversations }) => {
  if (conversations.length === 0) return null;
  
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-4 overflow-y-auto">
      {conversations.map((message, index) => (
        <div key={index} className={`flex gap-4 mb-6 ${message.role === 'assistant' ? 'items-start' : 'items-center'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
            ${message.role === 'assistant' ? 'bg-[#8AB4F8] text-[#1E1E1E]' : 'bg-green-500 text-white'}`}
          >
            {message.role === 'assistant' ? 'G' : 'U'}
          </div>
          
          <div className="flex-1">
            {message.role === 'assistant' ? (
              <div className="bg-[#2D2D2D] rounded-lg p-4">
                <p className="text-[#E8EAED]">{message.content}</p>
                
                <div className="flex items-center gap-2 mt-4 text-[#9AA0A6]">
                  <button className="hover:bg-[#3C4043] p-2 rounded transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 9V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 15H5a3 3 0 0 0-3 3v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18 13h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="hover:bg-[#3C4043] p-2 rounded transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 11v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M13 7V3H3v10h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="hover:bg-[#3C4043] p-2 rounded transition-colors">
                    <FileText size={16} />
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-[#E8EAED]">{message.content}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Canvas;
