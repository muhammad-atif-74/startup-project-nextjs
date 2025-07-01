"use client";
import { X } from 'lucide-react'
import Link from 'next/link';

const SearchFormReset = () => {
    const resetSearch = () => {
        const form = document.querySelector('.searchForm') as HTMLFormElement;
        if (form) {
            form.reset();
            const input = form.querySelector('input[name="query"]') as HTMLInputElement;
            if (input) {
                input.value = '';
            }
        }
    }
    return (
        <button type='reset'>
            <Link href={'/'}>
                <X className='absolute top-4 right-14 text-gray-200 cursor-pointer' onClick={resetSearch} />
            </Link>
        </button>
    )
}

export default SearchFormReset