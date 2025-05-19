import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, Diamond, Settings } from 'lucide-react';

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
            className={`flex items-center gap-4 px-4 py-3 rounded-lg cursor-pointer transition-colors ${active ? 'bg-[#2D2D2D]' : 'hover:bg-[#2D2D2D]'} ${collapsed ? 'justify-center' : ''}`}
        >
            <div className="text-[#9AA0A6] flex-shrink-0">{icon}</div>
            {!collapsed && <span className="text-[#E8EAED] text-sm font-medium whitespace-nowrap">{label}</span>}
        </div>
    );
};

const Sidebar: React.FC = () => {
    const [pinned, setPinned] = useState(false);
    const [hovered, setHovered] = useState(false);

    // Sidebar is expanded if pinned or hovered
    const expanded = pinned || hovered;

    // Determine menu button title
    let menuTitle = "Expand menu";
    if (pinned) {
        menuTitle = "Collapse menu";
    } else if (expanded && !pinned) {
        menuTitle = "Keep menu expanded";
    }

    const handleMouseEnter = () => {
        if (!pinned) setHovered(true);
    };
    const handleMouseLeave = () => {
        if (!pinned) setHovered(false);
    };
    const handleMenuClick = () => {
        if (pinned) {
            setPinned(false);
        } else {
            setPinned(true);
            setHovered(false);
        }
    };

    return (
        <aside
            className={`bg-zinc-800 ${expanded ? 'w-68' : 'w-20'} h-full hidden md:flex flex-col border-r border-[#3C4043] overflow-hidden transition-all duration-200`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={`p-4 flex items-center ${expanded ? 'justify-between' : 'justify-center'}`}>
                <button
                    className="p-2 rounded-full hover:bg-[#2D2D2D] transition-colors cursor-pointer"
                    onClick={handleMenuClick}
                    aria-label={pinned ? 'Unpin sidebar' : 'Pin sidebar'}
                    title={menuTitle}
                >
                    <Menu size={20} className="text-[#9AA0A6]" />
                </button>
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
        </aside>
    );
};

export default Sidebar;
