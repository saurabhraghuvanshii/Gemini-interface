import React, { useState } from 'react';
import Image from 'next/image';
import { X, Menu, Diamond, Settings } from 'lucide-react';

interface SidebarItemProps {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
    collapsed: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active, collapsed }) => {
    return (
        <div
            title={label}
            className={`flex items-center gap-4 px-4 py-3 rounded-lg cursor-pointer transition-colors ${active ? 'bg-[#2D2D2D]' : ''} ${collapsed ? 'justify-center' : ''}`}
        >
            <div className="text-[#9AA0A6] flex-shrink-0">{icon}</div>
            {!collapsed && <span className="text-[#E8EAED] text-sm font-medium whitespace-nowrap">{label}</span>}
        </div>
    );
};

interface MobileSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
    const [pinned, setPinned] = useState(true); // Default to expanded on mobile
    const expanded = pinned;

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 md:hidden">
            <div
                className="fixed inset-0 bg-black/50"
                onClick={onClose}
            />
            <div className={`fixed top-0 left-0 h-full ${expanded ? 'w-64' : 'w-20'} bg-[#1E1E1E] animate-in slide-in-from-left duration-300 flex flex-col`}>
                <div className={`p-4 flex items-center ${expanded ? 'justify-between' : 'justify-center'} `}>
                    <button
                        onClick={() => setPinned((prev) => !prev)}
                        className="p-2 rounded-full hover:bg-[#2D2D2D] transition-colors cursor-pointer"
                        aria-label={pinned ? 'Collapse sidebar' : 'Expand sidebar'}
                        title={expanded ? 'Collapse menu' : 'Expand menu'}
                    >
                        <Menu size={20} className="text-[#9AA0A6]" />
                    </button>
                    {expanded && (
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full hover:bg-[#2D2D2D] transition-colors ml-2"
                            aria-label="Close sidebar"
                        >
                            <X size={20} className="text-[#9AA0A6]" />
                        </button>
                    )}
                </div>
                <div className="flex-1 px-2 py-4 space-y-1">
                    <SidebarItem
                        icon={<Image src="/NewChat.svg" alt="New Chat" width={20} height={20} />}
                        label="New chat"
                        active
                        collapsed={!expanded}
                    />
                    <SidebarItem
                        icon={<Diamond size={20} />}
                        label="Explore Gems"
                        collapsed={!expanded}
                    />
                </div>
                <div className="mt-auto px-2 mb-4">
                    <SidebarItem
                        icon={<Settings size={20} />}
                        label="Settings and help"
                        collapsed={!expanded}
                    />
                </div>
            </div>
        </div>
    );
};

export default MobileSidebar;
