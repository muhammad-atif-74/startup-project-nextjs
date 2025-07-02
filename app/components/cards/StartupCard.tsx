import { formatDate } from '@/lib/utils'
import { StartupTypeCard } from '@/types'
import { Calendar, Eye, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
    return (
        <div className="relative max-w-md mx-auto bg-white rounded-2xl shadow-lg hover:shadow-xl  transition-all duration-300 overflow-hidden group">
            <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                {/* <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div> */}
                <Image
                    alt={post.title}
                    src={post.image}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Link href={`/?query=${post.category.toLowerCase()}`} className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-primaryColor bg-opacity-30 rounded-full backdrop-blur-sm">
                        {post.category}
                    </span>
                </Link>
                <div className="absolute top-4 right-4 flex items-center space-x-1 text-white text-sm">
                    <Eye size={16} />
                    <span>{post.views}</span>
                </div>

            </div>

            <div className="p-4">
                <Link href={`/post/${post._id}`} className="cursor-pointer">
                    <h3 className="text-xl font-bold text-primaryColor mb-3 line-clamp-1 group-hover:text-primaryColorHover transition-colors duration-200">
                        {post.title}
                    </h3>
                </Link>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {post.description}
                </p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-800 to-green-600 rounded-full flex items-center justify-center">
                            <User size={20} className="text-white" />
                        </div>
                        <Link href={`/user/${post.author._id}`}>
                            <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                            <div className="flex items-center space-x-1 text-xs text-gray-500">
                                <Calendar size={12} />
                                <span>{formatDate(post.createdAt)}</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default StartupCard