import React, { useState } from 'react';
import { Plus, Mic, SendHorizontal } from 'lucide-react';

interface ChatInputProps {
    onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };
    
    return (
        <div className="w-full max-w-3xl mx-auto px-2 sm:px-4 py-2 pb-3">
            <form
                onSubmit={handleSubmit}
                className="relative bg-transparent rounded-2xl p-2 sm:p-3 min-h-[48px] flex items-center border border-[#5F6368]"
            >
                <button
                    type="button"
                    className="p-2 rounded-full hover:bg-[#3C4043] transition-colors"
                >
                    <Plus size={20} className="text-[#9AA0A6]" />
                </button>
                
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask Gemini"
                    className="flex-1 bg-transparent border-none outline-none px-3 sm:px-4 py-1 text-[#E8EAED] placeholder-[#9AA0A6] text-base font-normal"
                />
                
                <div className="flex items-center">
                    {!message.trim() ? (
                        <button
                            type="button"
                            className="p-2 rounded-full hover:bg-[#3C4043] transition-colors"
                        >
                            <Mic size={20} className="text-[#9AA0A6]" />
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className="p-2 rounded-full bg-[#8E2DE2] hover:bg-[#7B2AD6] transition-colors"
                        >
                            <SendHorizontal size={18} className="text-white" />
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default ChatInput;
