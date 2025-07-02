export interface Author {
    _id: string;
    username: string;
    name: string;
    image: string;
}

export interface StartupTypeCard {
    _id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    views: number;
    createdAt: string;
    author: Author;
}