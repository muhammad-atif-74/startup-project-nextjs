import { Search, X } from 'lucide-react'
import Form from 'next/form'
import SearchFormReset from './SearchFormReset'
const SearchForm = ({ query }: { query?: string }) => {
    return (
        <Form action='' scroll={false} className="searchForm text-center mt-8 w-[80%] mx-auto">
            <div className="relative">
                <input type="text" name='query' className='searchInput' placeholder='Search' defaultValue={query} />
                <button type='submit'>
                    <Search className='absolute top-4 right-6 text-gray-200 cursor-pointer' />
                </button>
                {
                    query && <SearchFormReset />
                }
            </div>
        </Form>
    )
}

export default SearchForm