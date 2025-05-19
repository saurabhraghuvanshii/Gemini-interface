import React from 'react';
import { ChevronDown, CreditCard, Menu } from 'lucide-react';
import Image from 'next/image';
import Tooltip from './Tooltip';

interface HeaderProps {
    toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
    return (
        <header className="bg-[#1E1E1E] h-14 flex items-center justify-between px-4">
            <div className="flex items-center gap-2">
                <Tooltip content="Menu" side="bottom">
                    <button
                        onClick={toggleSidebar}
                        className="md:hidden p-2 rounded-full hover:bg-[#2D2D2D] transition-colors cursor-pointer"
                    >
                        <Menu size={20} className="text-[#9AA0A6]" />
                    </button>
                </Tooltip>
                <div className="flex items-center">
                    <h1 className="text-[#E8EAED] text-xl font-medium">Gemini</h1>
                </div>
                <div className="hidden md:flex items-center gap-1 ml-2 bg-[#2D2D2D] rounded-full px-3 py-1 cursor-pointer">
                    <span className="text-[#E8EAED] text-xs">2.5 Pro (preview)</span>
                    <ChevronDown size={14} className="text-[#9AA0A6]" />
                </div>
            </div>

            <div className="flex items-center gap-2">
                <button className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-white rounded-lg px-3 py-1.5 text-sm font-medium cursor-pointer">
                    <CreditCard size={14} />
                    <span>Try Gemini Advanced</span>
                </button>
                <Tooltip content="Apps" side="bottom">
                    <button className="hidden md:flex p-2 rounded-full hover:bg-[#2D2D2D] transition-colors cursor-pointer">
                        <Image src="/Apps.svg" alt="Apps" width={20} height={20} />
                    </button>
                </Tooltip>
                <Tooltip content="User" side="bottom">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] flex items-center justify-center text-white font-medium text-sm cursor-pointer">
                        U
                    </div>
                </Tooltip>
            </div>
        </header>
    );
};

export default Header;
