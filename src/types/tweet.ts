export interface TweetAuthor {
    id: string;
    name: string;
    username: string;
    imageUrl?: string;
}

export interface Like {
    author: TweetAuthor;
    createdAt: string;
}

export interface Tweet {
    id: string;
    content: string;
    authorId?: string; 
    type: 'NORMAL' | 'REPLY';
    createdAt: string;
    updatedAt?: string;
    author: TweetAuthor;
    replies: Tweet[]; 
    likes: Like[] | number; 
}