'use client'
import { useState } from "react";

const filters = [
    {
      id: "category",
      name: "Category",
      options: [
        { value: "all", label: "All" },
        { value: "tees", label: "Tees" },
        { value: "headwear", label: "Hats & Bennies"},
        { value: "pants", label: "Pants"},

      ]
    }
  ];

  export const Filters = () => {
    const [activeButton, setActiveButton] = useState<string>('all');

    const handleFilterClick = (value: string) => {
        setActiveButton(value);
    };

    return (
        <div>
            {filters.map((item) => (
                <div key={item.id}>
                    {item.id === 'category' && 
                    <div className='flex justify-between items-center mt-5 px-4'>
                        {item.options.map((x) => (
                            <button 
                                key={x.value} 
                                onClick={() => handleFilterClick(x.value)} 
                                className={`transition-all duration-500 ease-in-out ${activeButton === x.value ? 'bg-black rounded-full px-4 py-2 text-white' : 'text-gray-500 font-semibold px-4'}`}
                            >
                                {x.label}
                            </button>
                        ))}
                    </div>}
                </div>
            ))}
        </div>
    );
};