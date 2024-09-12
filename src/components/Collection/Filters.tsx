'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import './scroll-bar.css';
import {allItems, CategoryKey, filters} from './FilterStaticData'
import { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';



export const Filters = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    
    const activeButton = (searchParams.get('category') ?? 'all') as CategoryKey;
    const [filteredItems, setFilteredItems] = useState(allItems.all); 

    const handleFilterClick = (value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('category', value);
        router.push(`/collection?${params.toString()}`);
    };

    useEffect(() => {
        setFilteredItems(allItems[activeButton]);
    }, [activeButton]);

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
            <main className='grid grid-cols-2 gap-8 mt-8 px-4'>
                {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                        <Link href={'/'} key={item.id} className=''>
                            <Image className='h-[15rem] border w-full object-cover rounded mt-4' alt={`${item.name} image`} src={item.image} width={1500} height={1500}/>
                            <h2 className='text-md text-black font-medium mt-2 text-lg overflow-ellipsis'>{item.name}</h2>
                            <p className='text-md text-gray-800 font-medium text-md'>R {item.price}</p>
                        </Link>
                    ))
                ) : (
                    <p>No items found in this category.</p>
                )}
            </main>
        </>
    );
};
