import React from 'react';

interface SuggestionCardProps {
    title: string;
    description: string;
    onClick: () => void;
}

const SuggestionCard: React.FC<SuggestionCardProps> = ({ title, description, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="bg-transparent border border-[#5F6368] rounded-3xl p-4 cursor-pointer transition-all duration-200 hover:shadow-md min-w-[220px] flex-shrink-0 hover:bg-black/10"
        >
            <h3 className="text-[#E8EAED] text-base font-medium mb-1">{title}</h3>
            <p className="text-[#9AA0A6] text-sm">{description}</p>
        </div>
    );
};

const SuggestionCards: React.FC = () => {
    const handleCardClick = (suggestion: string) => {
        console.log(`Selected suggestion: ${suggestion}`);
    };

    return (
        <div className="flex flex-row flex-wrap gap-4 max-w-3xl mx-auto px-4 py-2 justify-center">
            <SuggestionCard
                title="Design an interactive"
                description="kaleidoscope"
                onClick={() => handleCardClick("Design an interactive kaleidoscope")}
            />
            <SuggestionCard
                title="Write a python script"
                description="to monitor system performance"
                onClick={() => handleCardClick("Write a python script to monitor system performance")}
            />
            <SuggestionCard
                title="Create an app"
                description="for tracking tasks"
                onClick={() => handleCardClick("Create an app for tracking tasks")}
            />
        </div>
    );
};

export default SuggestionCards;
