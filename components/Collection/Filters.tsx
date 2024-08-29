'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import './scroll-bar.css';
import {filters} from './FilterStaticData'

export const Filters = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    
    const activeButton = searchParams.get('category');

    const handleFilterClick = (value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('category', value);
        router.push(`/collection?${params.toString()}`);
    };

    return (
        <>
            <div className='overflow-x-scroll scrollbar-hide'>
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
                            </div>
                        }
                    </div>
                ))}
            </div>
            <main className='grid grid-cols-2 gap-4'>
                {/* Content based on selected filter */}
            </main>
        </>
    );
};
