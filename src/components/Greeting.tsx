import React, { useState, useEffect } from 'react';

interface GreetingProps {
    name?: string;
}

const Greeting: React.FC<GreetingProps> = ({ name = "there" }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center pt-8 pb-4 md:pt-16 md:pb-8">
            <h1 className={`text-2xl md:text-5xl font-semibold transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
                <span className="text-[#8AB4F8] font-semibold">Hello, </span>
                <span className="font-semibold bg-gradient-to-r from-[#8AB4F8] to-[#F28B82] bg-clip-text text-transparent animate-gradient">
                    {name}
                </span>
            </h1>
        </div>
    );
};

export default Greeting;
